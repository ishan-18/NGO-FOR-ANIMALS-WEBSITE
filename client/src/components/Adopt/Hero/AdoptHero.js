import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AdoptNavbar from './AdoptNavbar/AdoptNavbar'
import AdoptSidebar from './AdoptSidebar/AdoptSidebar'


const AdoptHero = () => {
    const [isOpen ,setIsOpen] = useState(false)
    
    const toggle = () =>{
        const sidebar = document.querySelector(".sidebar-container")
        isOpen ? sidebar.style.right="0px" : sidebar.style.right="-1000px"
        setIsOpen(!isOpen)
    }
    return (
        <div className="adopt-container">
            <AdoptNavbar toggle={toggle} />
            <AdoptSidebar isOpen={isOpen} toggle={toggle}/>
        </div>
    )
}

export default AdoptHero
