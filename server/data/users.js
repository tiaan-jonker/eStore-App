import bcrypt from 'bcryptjs'
import { PasswordManager } from '../utils/passwordManager.js'

const users = [
  {
    name: 'Admin user',
    email: 'adminuser@example.com',
    password: '123456',
    isAdmin: true,
  },
  {
    name: 'Bob Bell',
    email: 'bob@example.com',
    password: '123456',
    isAdmin: false,
  },
  {
    name: 'Chris Cyprus',
    email: 'chris@example.com',
    password: '123456',
    isAdmin: false,
  },
  {
    name: 'Danielle Daniels',
    email: 'danielle@example.com',
    password: '123456',
    isAdmin: false,
  },
]

export default users
