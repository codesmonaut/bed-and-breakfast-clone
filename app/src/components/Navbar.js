import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import omg from '../img/omg.png';
import nationalParks from '../img/national-parks.png';
import cabins from '../img/cabins.png';
import islands from '../img/islands.png';
import beach from '../img/beach.png';
import aFrames from '../img/a-frames.png';
import design from '../img/design.png';
import arctic from '../img/arctic.png';
import tinyHomes from '../img/tiny-homes.png';
import lakefront from '../img/lakefront.png';
import surfing from '../img/surfing.png';
import amazingPools from '../img/amazing-pools.png';
import bedAndBreakfasts from '../img/bed-and-breakfasts.png';
import camping from '../img/camping.png';
import caves from '../img/caves.png';
import chefsKitchens from '../img/chefs-kitchens.png';
import creativeSpaces from '../img/creative-spaces.png';
import luxe from '../img/luxe.png';
import golfing from '../img/golfing.png';
import grandPianos from '../img/grand-pianos.png';
import historicalHomes from '../img/historical-homes.png';
import houseBoats from '../img/house-boats.png';
import iconicCities from '../img/iconic-cities.png';
import lake from '../img/lake.png';
import mansions from '../img/mansions.png';
import ryokans from '../img/ryokans.png';
import tropical from '../img/tropical.png';
import vineyards from '../img/vineyards.png';
import rightArrow from '../img/right-arrow.png';
import leftArrow from '../img/left-arrow.png';
import filters from '../img/filters.png';

const Navbar = () => {
    const [leftArrowActive, setLeftArrowActive] = useState(false);
    const [rightArrowActive, setRightArrowActive] = useState(true);
    const [active, setActive] = useState(false);

    const slideLeft = () => {
        const slider = document.querySelector(`.nav-links`);
        slider.scrollLeft = slider.scrollLeft - 900;
        
        setRightArrowActive(true);

        setTimeout(() => {
            
            if (slider.scrollLeft === 0) {
                setLeftArrowActive(false);
            }

        }, 700)
    }

    const slideRight = () => {
        const slider = document.querySelector(`.nav-links`);
        slider.scrollLeft = slider.scrollLeft + 900;

        setLeftArrowActive(true);

        setTimeout(() => {
            
            if (slider.scrollLeft > 1600) {
                setRightArrowActive(false);
            }

        }, 700)
    }

    const handleActive = () => {

        if (window.scrollY >= 114) {
            setActive(true);
        }

        if (window.scrollY < 114) {
            setActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener(`scroll`, handleActive);
    }, [])

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="navigation">
                    <div className="nav-links-holder">
                        <ul className="nav-links">
                            <li>
                                <NavLink exact activeClassName="active-nav-link" to="/">
                                    <div className="img-holder">
                                        <img src={omg} alt="OMG" />
                                    </div>
                                    <p>OMG!</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/national-parks">
                                    <div className="img-holder">
                                        <img src={nationalParks} alt="National parks" />
                                    </div>
                                    <p>National parks</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/cabins">
                                    <div className="img-holder">
                                        <img src={cabins} alt="Cabins" />
                                    </div>
                                    <p>Cabins</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/islands">
                                    <div className="img-holder">
                                        <img src={islands} alt="Islands" />
                                    </div>
                                    <p>Islands</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/beach">
                                    <div className="img-holder">
                                        <img src={beach} alt="Beach" />
                                    </div>
                                    <p>Beach</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/a-frames">
                                    <div className="img-holder">
                                        <img src={aFrames} alt="A-frames" />
                                    </div>
                                    <p>A-frames</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/design">
                                    <div className="img-holder">
                                        <img src={design} alt="Design" />
                                    </div>
                                    <p>Design</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/arctic">
                                    <div className="img-holder">
                                        <img src={arctic} alt="Arctic" />
                                    </div>
                                    <p>Arctic</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/tiny-homes">
                                    <div className="img-holder">
                                        <img src={tinyHomes} alt="Tiny homes" />
                                    </div>
                                    <p>Tiny homes</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/lakefront">
                                    <div className="img-holder">
                                        <img src={lakefront} alt="Lakefront" />
                                    </div>
                                    <p>Lakefront</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/surfing">
                                    <div className="img-holder">
                                        <img src={surfing} alt="Surfing" />
                                    </div>
                                    <p>Surfing</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/amazing-pools">
                                    <div className="img-holder">
                                        <img src={amazingPools} alt="Amazing pools" />
                                    </div>
                                    <p>Amazing pools</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/bed-and-breakfasts">
                                    <div className="img-holder">
                                        <img src={bedAndBreakfasts} alt="Bed and breakfasts" />
                                    </div>
                                    <p>Bed and breakfasts</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/camping">
                                    <div className="img-holder">
                                        <img src={camping} alt="Camping" />
                                    </div>
                                    <p>Camping</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/caves">
                                    <div className="img-holder">
                                        <img src={caves} alt="Caves" />
                                    </div>
                                    <p>Caves</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/chefs-kitchens">
                                    <div className="img-holder">
                                        <img src={chefsKitchens} alt="Chef's kitchens" />
                                    </div>
                                    <p>Chef's kitchens</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/creative-spaces">
                                    <div className="img-holder">
                                        <img src={creativeSpaces} alt="Creative spaces" />
                                    </div>
                                    <p>Creative spaces</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/luxe">
                                    <div className="img-holder">
                                        <img src={luxe} alt="Luxe" />
                                    </div>
                                    <p>Luxe</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/golfing">
                                    <div className="img-holder">
                                        <img src={golfing} alt="Golfing" />
                                    </div>
                                    <p>Golfing</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="grand-pianos">
                                    <div className="img-holder">
                                        <img src={grandPianos} alt="Grand pianos" />
                                    </div>
                                    <p>Grand pianos</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/historical-homes">
                                    <div className="img-holder">
                                        <img src={historicalHomes} alt="Historical homes" />
                                    </div>
                                    <p>Historical homes</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/house-boats">
                                    <div className="img-holder">
                                        <img src={houseBoats} alt="House boats" />
                                    </div>
                                    <p>House boats</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/iconic-cities">
                                    <div className="img-holder">
                                        <img src={iconicCities} alt="Iconic cities" />
                                    </div>
                                    <p>Iconic cities</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/lake">
                                    <div className="img-holder">
                                        <img src={lake} alt="Lake" />
                                    </div>
                                    <p>Lake</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/mansions">
                                    <div className="img-holder">
                                        <img src={mansions} alt="Mansions" />
                                    </div>
                                    <p>Mansions</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/ryokans">
                                    <div className="img-holder">
                                        <img src={ryokans} alt="Ryokans" />
                                    </div>
                                    <p>Ryokans</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/tropical">
                                    <div className="img-holder">
                                        <img src={tropical} alt="Tropical" />
                                    </div>
                                    <p>Tropical</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-nav-link" to="/vineyards">
                                    <div className="img-holder">
                                        <img src={vineyards} alt="Vineyards" />
                                    </div>
                                    <p>Vineyards</p>
                                </NavLink>
                            </li>
                        </ul>

                        <a href="#/" className={leftArrowActive ? "left-arrow" : "invisible"} onClick={slideLeft}><img src={leftArrow} alt="" /></a>
                        <a href="#/" className={rightArrowActive ? "right-arrow" : "invisible"} onClick={slideRight}><img src={rightArrow} alt="" /></a>

                        <div className={leftArrowActive ? "white-shadow-left" : "invisible"}></div>
                        <div className={rightArrowActive ? "white-shadow-right" : "invisible"}></div>
                    </div>

                    <button className="filters-btn">
                        <img src={filters} alt="Filters" />
                        <p>Filters</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;