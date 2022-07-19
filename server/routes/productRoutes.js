import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

//@desc     All products
//@route    GET /api/v1/products
//@access   Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.send(products)
  })
)

//@desc     Single products
//@route    GET /api/v1/products/:id
//@access   Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)

    if (!product) {
      res.status(404).json({ message: 'Product not found.' })
    }

    res.send(product)
  })
)

export default router
