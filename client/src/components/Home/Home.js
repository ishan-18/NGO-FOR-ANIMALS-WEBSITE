import React from 'react'
import Email from '../Email/Email'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import HomeAdopt from '../HomeAdopt/HomeAdopt'
import HomeProducts from '../HomeProducts/HomeProducts'
import Process from '../Process/Process'
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Hero />
            <HomeAdopt />
            <Services />
            <HomeProducts />
            <Process />
            <Email />
            <Footer />
        </div>
    )
}

export default Home
