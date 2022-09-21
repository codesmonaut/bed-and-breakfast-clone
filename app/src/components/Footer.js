import globe from '../img/globe.png';

const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="copyright-and-nav">
                        <p>© 2022 Airbnb, Inc.</p>
                        <p>·</p>
                        <a href="#">Privacy</a>
                        <p>·</p>
                        <a href="#">Terms</a>
                        <p>·</p>
                        <a href="#">Sitemap</a>
                        <p>·</p>
                        <a href="#">Destinations</a>
                    </div>

                    <div className="description">
                        <div className="language">
                            <img src={globe} alt="Language" />
                            <a href="#">English (US)</a>
                        </div>

                        <div className="currency">
                            <p>$</p>
                            <a href="#">USD</a>
                        </div>

                        <h3>Airbnb Clone</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;