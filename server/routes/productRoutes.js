import express from 'express'
const router = express.Router()

server.get('/', (req, res) => {
  res.send(products)
})

server.get('/:id', (req, res) => {
  const { id } = req.params

  const product = products.find((product) => product._id === id)
  res.send(product)
})

export default router
