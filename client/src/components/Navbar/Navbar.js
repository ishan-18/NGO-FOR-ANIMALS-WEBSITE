import React from 'react'
import {Link} from 'react-router-dom'
import {FaCat} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <>
            <nav>
                <Link to="/" className="nav-links">ADOPT</Link>
                <div className="nav-icon" onClick={toggle}>
                    <p className="nav-para">Menu</p>
                    <FaCat className="icon"></FaCat>
                </div>
            </nav>
        </>
    )
}

export default Navbar
