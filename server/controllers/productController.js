import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc     All products
//@route    GET /api/v1/products
//@access   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.send(products)
})

//@desc     Single products
//@route    GET /api/v1/products/:id
//@access   Public
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)

  if (!product) {
    res.status(404)
    throw new Error('Product not found')
  }

  res.send(product)
})

export { getProducts, getProductById }
