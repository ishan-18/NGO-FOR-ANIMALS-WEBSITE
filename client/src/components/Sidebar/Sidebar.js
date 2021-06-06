import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <div className="sidebar-container" isOpen={isOpen} onClick={toggle}>
            <div className="icon">
                <FaTimes className="close-icon" onClick={toggle}/>
            </div>
            <div className="sidebar-menu">
                <Link to="/">Home</Link>
                <Link to="/adopt/prod">Adopt</Link>
                <Link to="/">Store</Link>
                <Link to="/">Medication</Link>
                <Link to="/">About us</Link>
            </div>
            <div className="btn-wrapper">
                <Link to="">Adopt Now</Link>
            </div>
        </div>
    )
}

export default Sidebar
