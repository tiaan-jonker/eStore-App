import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

//@desc     All products
//@route    GET /api/v1/products
//@access   Public
router.route('/').get(getProducts)

//@desc     Single products
//@route    GET /api/v1/products/:id
//@access   Public
router.route('/:id').get(getProductById)

export default router
