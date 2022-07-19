import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/v1/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Welcome to eStore</h1>
      <h2>All latest products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomePage
