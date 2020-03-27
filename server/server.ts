import express, { Request, Response } from 'express'
const connectDB = require('../config/db')

const cors = require('cors')
const app = express()
const port = 5050

// connect database
connectDB()

// middleware
// @ts-ignore
app.use(express.json({ extended: false })) // to accept body data
app.options('/', cors()) // CORS pre-flight
app.use(cors()) // enable CORS

// define routes
app.get('/', (req: Request, res: Response) => res.send('Welcome to my personal page API'))

app.listen(port, () => console.log(`API listening on port ${port}`))
