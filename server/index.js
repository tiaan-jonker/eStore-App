import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()
connectDB()
const server = express()

server.get('/', (req, res) => {
  res.send('Up and running')
})

const PORT = process.env.PORT || 5000

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.cyan
      .underline.bold
  )
)
