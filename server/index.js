import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'

import errorHandler from './middleware/errorHandler.js'
import notFoundError from './errors/notFoundError.js'

dotenv.config()
connectDB()
const server = express()

server.get('/', (req, res) => {
  res.send('Up and running')
})

server.use('/api/v1/products', productRoutes)

// Error handlers
server.all('*', notFoundError)
server.use(errorHandler)

const PORT = process.env.PORT || 5000

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.cyan
      .underline.bold
  )
)
