import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__desc">
                    <h1>ADOPT</h1>
                    <p>ADOPT NGO located in NYC.</p>
                    <p className="phone">305 - 123 - 4567</p>
                </div>
                <div className="footer__links">
                    <h2 className="footer__title">Contact Us</h2>
                    <Link to="/" className="footer__link">Contact</Link>
                    <Link to="/" className="footer__link">Support</Link>
                    <Link to="/" className="footer__link">Sponsorships</Link>
                </div>
            </div>
            <div className="footer__wrapper">
            <div className="footer__links">
                    <h2 className="footer__title">Memberships</h2>
                    <Link to="/" className="footer__link">Pricing</Link>
                    <Link to="/" className="footer__link">Plans</Link>
                    <Link to="/" className="footer__link">FAQ</Link>
                </div>
                <div className="footer__links">
                    <div className="footer__title">Social Media</div>
                    <Link to="/" className="footer__link">Instgram</Link>
                    <Link to="/" className="footer__link">Facebook</Link>
                    <Link to="/" className="footer__link">Youtube</Link>
                    <Link to="/" className="footer__link">Twitter</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
