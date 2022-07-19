import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../data/products'

const ProductPage = () => {
  const { id } = useParams()

  const currProduct = products.find((product) => product._id === id)

  return (
    <div>
      <Link className='btn btn-primary my-3' to='/'>
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={currProduct.image} alt={currProduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{currProduct.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={currProduct.rating}
                text={`${currProduct.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${currProduct.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {currProduct.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${currProduct.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    {currProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={currProduct.stock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage
