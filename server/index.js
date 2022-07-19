const express = require('express')
const dotenv = require('dotenv')
const json = require('body-parser')
const colors = require('colors')
const products = require('./data/products')

dotenv.config()

const server = express()
server.use(json())

server.get('/', (req, res) => {
  res.send('Up and running')
})

server.get('/api/v1/products', (req, res) => {
  res.send(products)
})

server.get('/api/v1/products/:id', (req, res) => {
  const { id } = req.params

  const product = products.find((product) => product._id === id)
  res.send(product)
})

const PORT = process.env.PORT || 5000

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.cyan
      .underline.bold
  )
)
