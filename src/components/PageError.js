import React from 'react'
import { Link } from 'react-router-dom'
import gif404 from '../images/gif404.gif'
import { Container, ImageStyled } from '../styles/Global.styled'

const PageError = () => (
    <>
        <Container>
            <ImageStyled src={gif404} alt="404 gif" />
            <h1>Error 404</h1>
            <h4>Page not found!</h4>
            <Link to='/'>Home</Link>
        </Container>
    </>
)

export default PageError