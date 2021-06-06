import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Services = () => {
    return (
        <div className="services">
            <div className="services__container">
                <div>
                    <p className="topline">Features</p>    
                    <h1 className="services__heading">What we Provide</h1>
                    <div className="services__features">
                        <p className="services__feature"><FaCheckCircle className="services__icon"/>Giving A homeless a shelter to live</p>
                        <p className="services__feature"><FaCheckCircle className="services__icon"/>Train Pets for adoption</p>
                        <p className="services__feature"><FaCheckCircle className="services__icon"/>Rescueing endangered spieces</p>
                        <p className="services__feature"><FaCheckCircle className="services__icon"/>Rescueing wild aninmals for forest fires</p>
                        <p className="services__feature"><FaCheckCircle className="services__icon"/>Open 24/7 for Animals</p> 
                        <p className="services__feature"><FaCheckCircle className="services__icon"/>Provide Products for pets</p>
                        <p className="services__feature"><FaCheckCircle className="services__icon"/>Proper medication facilities for animals</p>
                    </div>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3690510/pexels-photo-3690510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="animal" className="services__img" />
                </div>
            </div>
        </div>
    )
}

export default Services
