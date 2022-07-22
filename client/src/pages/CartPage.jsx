import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { addToCart, removeFromCart } from '../actions/cartActions'

const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  const decodeURL = decodeURI(useLocation().search)
  const quantity = decodeURL ? Number(decodeURL.split('=')[1]) : 1

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity))
    }
  }, [dispatch, id, quantity])

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleCheckout = () => {
    console.log('checkout')
    navigate('/login?redirect=shipping')
  }

  return (
    <div>
      <Col md={8}>
        <h2>Your items</h2>
        {cartItems.length === 0 ? (
          <div>
            <Message>You eStore cart is empty.</Message>
            <Link to='/'>Go back</Link>
          </div>
        ) : (
          <div>
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={2}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.quantity}
                        onChange={(evt) =>
                          dispatch(addToCart(item.product, evt.target.value))
                        }
                      >
                        {[...Array(item.stock).keys()].map((qty) => (
                          <option key={qty + 1} value={qty + 1}>
                            {qty + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='danger'
                        onClick={() => handleRemoveFromCart(item.product)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>
                Total items:{' '}
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </h3>
              $
              {cartItems
                .reduce((acc, item) => acc + item.quantity * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                {' '}
                Proceed to checkout{' '}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </div>
  )
}

export default CartPage
