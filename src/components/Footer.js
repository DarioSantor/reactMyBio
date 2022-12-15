import React from 'react'
import { NavLink } from 'react-router-dom'
import * as style from '../styles/Header.styled'
import { Container, FooterNav } from '../styles/Global.styled'

const Footer = () => (
    <style.FooterStyled className='footer'>
        <Container>
            <FooterNav>
                <NavLink className='navlink' to="/">Home</NavLink>
                <NavLink className='navlink' to="/details">Details</NavLink>
                <NavLink className='navlink' to="/contacts">Contacts</NavLink>
            </FooterNav>
        </Container>
    </style.FooterStyled>
)

export default Footer