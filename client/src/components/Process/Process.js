import React from 'react'
import {FaTruckMoving, FaDollarSign, FaTruckLoading} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Process = () => {
    return (
        <div className="process">
            <h1>View Our Process</h1>
            <p className="process__desc">Get Started today and recieve 25% off your second purchase</p>
            <div className="process__wrapper">
                <div className="process__card">
                    <div className="process__title">
                        <FaDollarSign className="process__card-icon"></FaDollarSign>
                        <h3>Pay First</h3>
                    </div>
                    <div className="process__perks">
                        <p>For Buying a Product</p>
                        <p>Products for your pets</p>
                    </div>
                    <Link to="/" className="process__btn">Buy now</Link>
                </div>
                <div className="process__card">
                    <div className="process__title">
                        <FaTruckLoading className="process__card-icon"></FaTruckLoading>
                        <h3>Load Products</h3>
                    </div>
                    <div className="process__perks">
                        <p>Loading Your Products</p>
                        <p>Products for your pets</p>
                    </div>
                    <Link to="/" className="process__btn">Buy now</Link>
                </div>
                <div className="process__card">
                    <div className="process__title">
                        <FaTruckMoving className="process__card-icon"></FaTruckMoving>
                        <h3>Deliver Products</h3>
                    </div>
                    <div className="process__perks">
                        <p>Truck: On it's way to you</p>
                        <p>Products for your pets</p>
                    </div>
                    <Link to="/" className="process__btn">Buy now</Link>
                </div>
            </div>
        </div>
    )
}

export default Process
