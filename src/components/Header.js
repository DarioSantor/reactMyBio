import React  from 'react'
import { NavLink } from 'react-router-dom'
import { Container, NavbarStyled } from '../styles/Global.styled'
import { HeaderStyled, MyBioStyled } from '../styles/Header.styled'

const Header = (props) => (
    <HeaderStyled className='header'>
        <Container>
            <MyBioStyled>
                <h1>{props.title}</h1>
                <NavbarStyled>
                    <NavLink className="navlink" to="/">Home</NavLink>
                    <NavLink className="navlink" to="/details">Details</NavLink>
                    <NavLink className="navlink"to="/contacts">Contacts</NavLink>
                </NavbarStyled>
            </MyBioStyled>
        </Container>
    </HeaderStyled>
)

Header.defaultProps = {
    title: "My Bio"
}

export default Header









