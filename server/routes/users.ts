import express, { Request, Response } from 'express'
const { check, validationResult } = require('express-validator')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = express.Router()

const User = require('../models/User')

//@route  POST api/users
//@desc   register a user
//@access Public
router.post('/', [
  check('name', 'name is required').not().isEmpty(),
  check('email', 'please include a valid email').isEmail(),
  check('password', 'please enter a password with 6 or more characters').isLength({min: 6})
], async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json(errors.array())
  }

  const { name, email, password } = req.body

  try {
    let user =  await User.findOne({email}) //try to find user by the email
    if (user) {
      return res.status(400).json([{
          'msg': 'user with this email address already exists',
          'param': 'email'
        }]
      )
    }

    user = await User.findOne({name}) //try to find user by the name
    if (user) {
      return res.status(400).json([{
          'msg': 'user with this name already exists',
          'param': 'name'
        }]
      )
    }

    user = new User ({
      name,
      email,
      password
    })

    //password encryption
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

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
    console.error(err.message)
    res.status(500).send('server error')
  }


})

module.exports = router
