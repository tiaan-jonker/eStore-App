import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'
import { authProtect } from '../middleware/authMiddleware.js'

//@desc     Register a new user
//@route    POST /api/v1/users
//@access   Public
router.route('/').post(registerUser)

//@desc     Auth user, get token
//@route    GET /api/v1/users/login
//@access   Public
router.route('/login').post(authUser)

//@desc     Get user profile
//@route    GET /api/v1/users/profile
//@access   Private
router.route('/profile').get(authProtect, getUserProfile)

export default router
