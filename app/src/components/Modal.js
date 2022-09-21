import { useState } from 'react';
import facebook from '../img/facebook.png';
import google from '../img/google.png';
import apple from '../img/apple.png';
import email from '../img/email.png';

const Modal = ({ closeBtn }) => {
    const [inputAnimation, setInputAnimation] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
    }

    const addAnimation = () => {
        setInputAnimation(true);
    }

    return (
        <div className="modal-and-overlay">
            <div className="overlay" onClick={() => closeBtn()}></div>
            <div className="modal">
                <div className="modal-container">
                    <div className="heading">
                        <button className="close" onClick={() => closeBtn()}>&times;</button>
                        <h3>Log in or sign up</h3>
                        <div className="square"></div>
                    </div>
                </div>

                <div className="horizontal-line"></div>

                <div className="scroll-container">
                    <div className="modal-container">
                        <form className="sign-up-form" onSubmit={handleForm}>
                            <h2>Welcome to Airbnb</h2>

                            <div className="select-wrapper">
                                <select id="country-region">
                                    <option value="united-states">United States (+1)</option>
                                    <option value="egypt">Egypt (+20)</option>
                                    <option value="france">France (+33)</option>
                                </select>
                                <p>Country/Region</p>
                            </div>
                            <div className={inputAnimation ? "input-wrapper animation" : "input-wrapper"} onFocus={addAnimation}>
                                <input type="tel" className="animation" id="phone-number" />
                                <label htmlFor="phone-number">Phone Number</label>
                            </div>
                            <p className="privacy-policy">We'll call you to confirm your number. Standard message and data rates apply. <a href="#">Privacy Policy</a></p>

                            <button type="submit" id="continue-btn" >Continue</button>
                        </form>
                    </div>

                    <div className="modal-container">
                        <div className="horizontal-line-with-text">
                            <div className="line"></div>
                            <p>or</p>
                            <div className="line"></div>
                        </div>

                        <button className="social">
                            <img src={facebook} alt="Facebook" />
                            <p>Continue with Facebook</p>
                            <div className="square"></div>
                        </button>

                        <button className="social">
                            <img src={google} alt="Google" />
                            <p>Continue with Google</p>
                            <div className="square"></div>
                        </button>

                        <button className="social">
                            <img src={apple} alt="Apple" />
                            <p>Continue with Apple</p>
                            <div className="square"></div>
                        </button>

                        <button className="social email-btn">
                            <img src={email} alt="Email" id="email" />
                            <p>Continue with email</p>
                            <div className="square"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;