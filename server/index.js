const express = require('express')
const json = require('body-parser')
const colors = require('colors')
const products = require('./data/products')

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

server.listen(
  5000,
  console.log('Server running on port: 5000'.cyan.underline.bold)
)
