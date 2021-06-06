import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeAdopt = () => {
    const options = {
            loop: true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:3
                }
        }
    }
    return (
        <div className="home-prod-container">
            <h1 className="home-prod-heading">
                Choose your favorite
            </h1>
            <div className="home-prod-wrapper">
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="home-prod-card">
                        <img src="https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Dog" />
                        <div className="home-prod-info item">
                            <h1>Dalmatian Cross</h1>
                            <p>The Dalmatian is a breed of medium-sized dog, noted for its unique white coat marked with black or liver-colored spots.</p>
                            <span>$35</span>
                            <a href="/">Adopt</a>
                        </div>
                    </div>
                    <div className="home-prod-card">
                        <img src="https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Dog" />
                        <div className="home-prod-info item">
                            <h1>Dalmatian Cross</h1>
                            <p>The Dalmatian is a breed of medium-sized dog, noted for its unique white coat marked with black or liver-colored spots.</p>
                            <span>$35</span>
                            <a href="/">Adopt</a>
                        </div>
                    </div>
                    <div className="home-prod-card">
                        <img src="https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Dog" />
                        <div className="home-prod-info item">
                            <h1>Dalmatian Cross</h1>
                            <p>The Dalmatian is a breed of medium-sized dog, noted for its unique white coat marked with black or liver-colored spots.</p>
                            <span>$35</span>
                            <a href="/">Adopt</a>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default HomeAdopt


            
