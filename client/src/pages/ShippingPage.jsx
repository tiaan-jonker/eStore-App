import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormCont from '../components/FormCont'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingPage = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/payment')
  }

  return (
    <FormCont>
      <CheckoutSteps stepOne stepTwo />
      <h1 className='mb-4'>Shipping</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='address' className='mb-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(evt) => setAddress(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city' className='mb-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(evt) => setCity(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode' className='mb-3'>
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(evt) => setPostalCode(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country' className='mb-3'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={country}
            required
            onChange={(evt) => setCountry(evt.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Continue to payment
        </Button>
      </Form>
    </FormCont>
  )
}

export default ShippingPage
