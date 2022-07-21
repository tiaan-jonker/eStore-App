import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { addToCart } from '../actions/cartActions'

const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  const decodeURL = decodeURI(useLocation().search)
  const quantity = decodeURL ? Number(decodeURL.split('=')[1]) : 1

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity))
    }
  }, [dispatch, id, quantity])

  return <div>CartPage</div>
}

export default CartPage
