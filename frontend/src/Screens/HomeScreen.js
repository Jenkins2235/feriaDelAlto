import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from '../components/Carousel'

export default function HomeScreen() {

    return (
        <div className='large-container'>
            <h1>Productos Recomendados</h1>
            <ul>
                <Carousel />
            </ul>
        </div>
    )
}

