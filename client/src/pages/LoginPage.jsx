import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormCont from '../components/FormCont'
import { login } from '../actions/userActions'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const decodeURL = decodeURI(useLocation().search)
  const redirect = decodeURL ? decodeURL.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(login(email, password))
  }

  if (loading) return <Loader />

  return (
    <FormCont>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Don't have an account?{' '}
          <Link to={redirect ? `/redirect?redirect=${redirect}` : '/register'}>
            Sign Up
          </Link>
        </Col>
      </Row>
    </FormCont>
  )
}

export default LoginPage
