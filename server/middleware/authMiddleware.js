import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const authProtect = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(tokenDecoded.id).select('-password')
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authed, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authed')
  }
})

export { authProtect }
