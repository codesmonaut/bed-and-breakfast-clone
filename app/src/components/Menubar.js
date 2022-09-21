import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import textLogo from '../img/text-logo.png';
import search from '../img/search.png';
import globe from '../img/globe.png';
import profile from '../img/profile.png';
import phoneLogo from '../img/phone-logo.png';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDropdownMenu = () => {
        setIsOpen(!isOpen);
    }

    const menuRef = useRef();

    useEffect(() => {
        
        const handler = (e) => {
            
            if (!menuRef.current?.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener(`mousedown`, handler);

        return () => {
            document.removeEventListener(`mousedown`, handler);
        }
    }, [])

    const openExtendedMenu = () => {
        
        if (isMenuOpen === false) {
            setIsMenuOpen(true);
        }

        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    const closeExtendedMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className="menubar">
            <div className="container">
                <header className="menu">
                    <Link to="/" className="logo"><img src={textLogo} alt="Logo" /></Link>
                    <Link to="/" className="phone-logo"><img src={phoneLogo} alt="Logo" /></Link>

                    <div className="search-container" onClick={openExtendedMenu}>
                        <button id="left-border-radius">Anywhere</button>
                        <button id="middle-btn">Any week</button>
                        <button id="right-border-radius">Add guests</button>
                        <img src={search} alt="Search" className="search-icon" />
                    </div>

                    <div className="profile-container">
                        <button id="hosting">Become a Host</button>
                        <button id="language"><img src={globe} alt="Globe" /></button>
                        <div className="dropdown-menu-container" ref={menuRef}>
                            <img src={profile} alt="Profile" className={isOpen ? "profile-icon profile-icon-clicked" : "profile-icon"} onClick={handleDropdownMenu} />

                            <div className="dropdown-menu-holder">
                                {isOpen && 
            
                                <div className="dropdown-menu">
                                    <div className="menu-content">
                                        <a href="#/" id="sign-up">Sign up</a>
                                        <a href="#/">Log in</a>
                                        <div className="horizontal-line"></div>
                                        <a href="#/">Host your home</a>
                                        <a href="#/">Host an experience</a>
                                        <a href="#/">Help</a>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <div className={isMenuOpen ? "overlay" : "overlay transparent"} onClick={closeExtendedMenu}></div>

            <div className={isMenuOpen ? "white-overlay" : "white-overlay transparent"}></div>

            <div className={isMenuOpen ? "extended-menu" : "extended-menu disabled"}>
                <div className="inputs-holder">
                    <div className="inputs-wrapper">
                        <div className="input-wrapper where">
                            <label htmlFor="where">Where</label>
                            <input type="text" placeholder="Search destinations" id="where" />
                        </div>
                        <div className="input-wrapper check-in">
                            <label htmlFor="check-in">Check in</label>
                            <input type="text" placeholder="Add dates" id="check-in" />
                        </div>
                        <div className="input-wrapper check-out">
                            <label htmlFor="check-out">Check out</label>
                            <input type="text" placeholder="Add dates" id="check-out" />
                        </div>
                        <div className="input-wrapper who">
                            <label htmlFor="who">Who</label>
                            <input type="text" placeholder="Add guests" id="who" />
                        </div>

                        <img src={search} alt="Search" className="search-btn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menubar;