import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeProducts = () => {
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
            Buy a Product
        </h1>
        <div className="home-prod-wrapper">
            <OwlCarousel className="owl-theme" {...options}>
                <div className="home-prod-card">
                    <img src="https://storage.googleapis.com/shop-seo-firestore.appspot.com/gdb/whiskas-ault-cat-food-chicken-in-jelly-85g_1605582962.jpg" alt="Dog" />
                    <div className="home-prod-info item">
                        <h1>Pedigree</h1>
                        <p>Pedigree Petfoods is a subsidiary of the American group Mars</p>
                        <span>$35</span>
                        <a href="/">Buy Now</a>
                    </div>
                </div>
                <div className="home-prod-card">
                    <img src="https://storage.googleapis.com/shop-seo-firestore.appspot.com/gdb/whiskas-ault-cat-food-chicken-in-jelly-85g_1605582962.jpg" alt="Dog" />
                    <div className="home-prod-info item">
                        <h1>Pedigree</h1>
                        <p>Pedigree Petfoods is a subsidiary of the American group Mars</p>
                        <span>$35</span>
                        <a href="/">Buy Now</a>
                    </div>
                </div>
                <div className="home-prod-card">
                    <img src="https://storage.googleapis.com/shop-seo-firestore.appspot.com/gdb/whiskas-ault-cat-food-chicken-in-jelly-85g_1605582962.jpg" alt="Dog" />
                    <div className="home-prod-info item">
                        <h1>Pedigree</h1>
                        <p>Pedigree Petfoods is a subsidiary of the American group Mars</p>
                        <span>$35</span>
                        <a href="/">Buy Now</a>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </div>
)
}

export default HomeProducts
