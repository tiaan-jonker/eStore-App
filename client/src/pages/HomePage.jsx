import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../data/products'

const HomePage = () => {
  return (
    <>
      <h1>Welcome to eStore</h1>
      <h2>All latest products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
