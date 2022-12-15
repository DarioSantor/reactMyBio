import styled from "styled-components"

export const StyledForm = styled.div`
    text-align: left;
`

export const Container = styled.div`
    margin: auto;
    width:50%;
    height:100%;
    font-size:20px;
`

export const NavbarStyled = styled.nav`
    text-align:center;
    display:flex;
    height:100%;
    margin: auto 0;
`

export const ButtonStyled = styled.button`
display: inline-block;
outline: 0;
border: 0;
cursor: pointer;
will-change: box-shadow,transform;
background: radial-gradient( 100% 100% at 100% 0%, black 0%, #060263 100% );
box-shadow: 0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%);
padding: 0 25px;
border-radius: 6px;
color: #fff;
height: 48px;
font-size: 18px;
text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
transition: box-shadow 0.15s ease,transform 0.15s ease;
    :hover {
        box-shadow: 0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
        transform: translateY(-2px);
    }
    :active{
        box-shadow: inset 0px 3px 7px #3c4fe0;
        transform: translateY(2px);
    }
    `

export const ImageStyled = styled.img`
    margin: auto;
    display: flex;
`

export const UlStyled = styled.ul`
    width:50%;
    margin:auto;
    padding:0
`

export const FooterNav = styled.nav`
    text-align:center;
    display:flex;
    font-size:20px;
    height:100%;
    margin: auto 0;
    justify-content:flex-end;
.navlink{
    margin:auto 0 auto 20px;
}
`