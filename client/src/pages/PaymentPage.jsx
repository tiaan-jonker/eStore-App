import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormCont from '../components/FormCont'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <FormCont>
      <CheckoutSteps stepOne stepTwo stepThree />
      <h1 className='mb-4'>Payment Method</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-4'>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(evt) => setPaymentMethod(evt.target.value)}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(evt) => setPaymentMethod(evt.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Continue to payment
        </Button>
      </Form>
    </FormCont>
  )
}

export default PaymentPage
