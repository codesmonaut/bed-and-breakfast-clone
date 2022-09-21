import searchPhone from '../img/search-phone.png';
import filtersPhone from '../img/filters-phone.png';

const PhoneMenu = () => {

    return (
        <div className="phone-menu">
            <div className="container">
                <button className="large-search-btn">
                    <div className="search">
                        <img src={searchPhone} alt="Search" />
                        <div className="text">
                            <h2>Where to?</h2>
                            <p>Anywhere</p>
                            <p>•</p>
                            <p>Any week</p>
                            <p>•</p>
                            <p>Add guests</p>
                        </div>
                    </div>
                    
                    <img src={filtersPhone} alt="Filters" className="filters" />
                </button>
            </div>
        </div>
    )
}

export default PhoneMenu;