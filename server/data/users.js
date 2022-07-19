import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'adminuser@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Bob Bell',
    email: 'bob@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Chris Cyprus',
    email: 'chris@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Danielle Daniels',
    email: 'danielle@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users
