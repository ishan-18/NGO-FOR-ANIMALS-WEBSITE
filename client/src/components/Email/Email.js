import React from 'react'

const Email = () => {
    return (
        <div className="email">
            <div className="email__content">
                <h1>To Get our Recent Updates</h1>
                <p>Sign up for our newsletter below!!</p>
                <form action="#" className="email__form">
                    <div className="email-form__wrap">
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email:" id="email" /> 
                        </label>
                        <a>Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Email
