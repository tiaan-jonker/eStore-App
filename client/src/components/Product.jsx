import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  const ratingText = product.rating
    ? `${product.rating}/5 from ${product.numReviews} reviews`
    : 'No rating'

  return (
    <Card
      className='my-3 p-3 rounded border-primary'
      style={{ width: '18rem' }}
    >
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} alt={product.name} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong style={{ color: '#fff' }}>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>{ratingText}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
