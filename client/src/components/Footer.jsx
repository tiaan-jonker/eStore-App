import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='py-5'>Copyright &copy; 2049 eStore</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
