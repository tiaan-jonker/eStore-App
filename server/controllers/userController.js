import asyncHandler from 'express-async-handler'
import { PasswordManager } from '../utils/passwordManager.js'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

//@desc     Auth user, get token
//@route    POST /api/v1/users/login
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  const passwordsMatch = await PasswordManager.compare(user.password, password)

  if (user && passwordsMatch) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.send(401)
    throw new Error('Invalid email or password')
  }
})

//@desc     Register a new user
//@route    POST /api/v1/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//@desc     Get user profile
//@route    GET /api/v1/users/profile
//@access   Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error('User not found')
  }
})

//@desc     Update user profile
//@route    PUT /api/v1/users/profile
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  const { name, email, password } = req.body

  if (user) {
    user.name = name || user.name
    user.email = email || user.email
    if (password) {
      user.password = password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(400)
    throw new Error('User not found')
  }
})

export { authUser, getUserProfile, registerUser, updateUserProfile }