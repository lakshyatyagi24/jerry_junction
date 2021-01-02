import React from 'react'
import {Bars, Nav, NavLink, NavIcon} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Jerry Junction</NavLink>
                <NavIcon>
                    Menu
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
 