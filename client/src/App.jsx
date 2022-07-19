import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main className='py-5'>
        <Container>
          <h1>Welcome to eStore</h1>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
