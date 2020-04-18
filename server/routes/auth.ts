import express, { Request, Response } from 'express'

const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')

const User = require('../models/User')

//@route  GET api/auth
//@desc   get logged-in user
//@access Private
router.get('/', auth, async (req: any, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch(err) {
    console.error(err.message)
    res.status(500).send("server error")
  }
})

//@route  POST api/auth
//@desc   auth user and get token
//@access Public
router.post ('/', [
  check('nameOrEmail', 'name or email is required').exists(),
  check('password', 'password is required ').exists()
], async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json(errors.array())
  }

  const { nameOrEmail, password } = req.body

  try {
    let user =  await User.findOne({email: nameOrEmail})

    if (!user) {
      user =  await User.findOne({name: nameOrEmail})
    }

    if (!user) {
      return res.status(400).json(
        [{
          'msg': 'invalid credentials',
          'param': 'nameOrEmail'
        }]
      )
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json(
        [{
          'msg': 'invalid password',
          'param': 'password'
        }]
      )
    }

    //json web token creation
    const payload = {
      user: {
        id: user.id
      }
    }
    jwt.sign(payload, config.get('jwtSecret'),{
      expiresIn: 36000
    }, (err: string, token: string) => {
      if (err) throw err
      res.json({ token })
    })
  } catch(err) {
    console.log(err)
    res.status(500).send('server error')
  }
})

module.exports = router
