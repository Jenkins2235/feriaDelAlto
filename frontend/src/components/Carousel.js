import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { products } from './products'
import Card from 'react-bootstrap/Card'

const Carousel = () => {
  return (
    <div variant='dark' className='rectangle'>
        <div className='mockProducts'>
            {products.map((product) => {
                return (
                    <Card key={product.id} mb={5} className='product'>
                    <Card.Body key={product.id}>
                        <img className='img-med' src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <h4>Bs. {product.price}</h4>
                        <Button variant="primary">Me Interesa</Button>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
        <a href='https://en.wikipedia.org/wiki/Programming_languages_used_in_most_popular_websites'>Click Me</a>
    </div>
  )
}

export default Carousel