import express, { Request, Response } from 'express'

const router = express.Router()
const geoip = require('geoip-lite')
const { check, validationResult } = require('express-validator')

const Visitor = require('../models/Visitor')

//@route  POST api/visitors
//@desc   add a main
//@access Public
router.post('/', [
  check('name', 'name is required').not().isEmpty()
], async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({msg: errors.array()[0].msg})
  }

  const { name } = req.body
  const ip = req.socket.remoteAddress
  const mockIp = '86.49.245.164'

  const geo = geoip.lookup(ip)
  let country, city
  try {
    country = geo.country
    city = geo.city
  } catch {
    country = 'Unknown'
    city = 'Unknown'
  }

  const agent = req.get('user-agent')

  try {
    let visitor = await Visitor.findOne({
      name,
      ip
    })

    if (visitor) {
      visitor.numberOfVisits += 1
      visitor.lastVisit = Date.now()
      await visitor.save()
      return res.json(visitor)
    }

    visitor = new Visitor({
      name,
      ip,
      country,
      city,
      agent
    })

    await visitor.save()

    return res.json(visitor)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

module.exports = router
