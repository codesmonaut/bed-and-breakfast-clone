import footerMenuSearch from '../img/footer-menu-search.png';
import wishlists from '../img/wishlists.png';
import logIn from '../img/log-in.png';

const FooterMenu = () => {

    return (
        <div className="footer-menu">
            <div className="menu-holder">
                <div className="icon">
                    <div className="img-holder">
                        <img src={footerMenuSearch} alt="Search" />
                    </div>
                    <p>Explore</p>
                </div>

                <div className="icon">
                    <div className="img-holder">
                        <img src={wishlists} alt="Wishlists" />
                    </div>
                    <p>Explore</p>
                </div>

                <div className="icon">
                    <div className="img-holder">
                        <img src={logIn} alt="Log in" />
                    </div>
                    <p>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu;