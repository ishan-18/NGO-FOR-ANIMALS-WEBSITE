import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {FaTimes, FaShoppingCart} from 'react-icons/fa'
import {GlobalState} from '../../../../GlobalState'

const AdoptSidebar = ({isOpen, toggle}) => {
    const value = useContext(GlobalState)
    return (
        <div className="sidebar-container" isOpen={isOpen} onClick={toggle}>
            <div className="icon">
                <FaTimes className="close-icon" onClick={toggle}/>
            </div>
            <div className="sidebar-menu">
                <Link to="/">Home</Link>
                <Link to="/adopt/prod">Products</Link>
                <Link to="/adopt/cart"><span style={{position: 'relative', top: '-16%', right: '-8%', color: "#fff", background: 'red', padding: '5px 5px', borderRadius: '50px', fontSize: '0.6rem'}}>0</span><FaShoppingCart/>&nbsp;Cart</Link>
                <Link to="/">About us</Link>
            </div>
            <div className="btn-wrapper">
                <Link to="">Adopt Now</Link>
            </div>
        </div>
    )
}

export default AdoptSidebar
