import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Hero = () => {
    const [isOpen ,setIsOpen] = useState(false)
    
    const toggle = () =>{
        const sidebar = document.querySelector(".sidebar-container")
        isOpen ? sidebar.style.right="0px" : sidebar.style.right="-1000px"
        setIsOpen(!isOpen)
    }
    return (
        <div className="container">
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <div className="hero-content">
                <div className="hero-items">
                    <h1>ADOPT the HOMELESS ones</h1>
                    <p>You guys can help these sweet living creatures by giving them a nice home</p>
                    <Link to="/">Adopt now</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
