import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import star from '../img/star.png';
import heart from '../img/heart.png';
import logoDataLoading from '../img/logo-data-loading.png';
import Modal from './Modal';

const BnBsDisplay = () => {
    const [signUpModal, setSignUpModal] = useState(false);
    const [bnbs, setBnbs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleModal = () => {
        setSignUpModal(true);
        document.body.style.overflow = "hidden";
    }

    const handleClose = () => {
        setSignUpModal(false);
        document.body.style.overflow = "scroll";
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://bed-and-breakfast-clone.herokuapp.com/bnbs`)
            .then(res => {

                if (!res.ok) {
                    throw new Error(`Could not fetch the data.`);
                }

                return res.json();
            })
            .then(data => {
                setBnbs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
                setBnbs(null);
            })
        }, 500)
    }, [])

    return (
        <div className="container">
            <div className="bnbs-container">
                {bnbs && bnbs.map(bnb => (
                    <div className="bnb" key={bnb.id}>
                        <Carousel interval={null}>
                            {bnb.pictures.map((pic, key) => (
                                <Carousel.Item key={key}>
                                    <img src={pic} alt="BnB" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <div className="text">
                            <div className="bnb-description">
                                <h3 className="bnb-name">{ bnb.bnbName }</h3>
                                <p className="distance">{ bnb.distance } kilometers</p>
                                <p className="date">{ bnb.date }</p>
                                <p className="price">{ bnb.price }$ <span>night</span></p>
                            </div>

                            <div className="rating">
                                <img src={star} alt="Star" />
                                <p>{ bnb.rating }</p>
                            </div>
                        </div>

                        <img src={heart} alt="Favorites" className="favorites" onClick={handleModal} />
                    </div>
                ))}
            </div>

            {signUpModal && <Modal closeBtn={handleClose}></Modal>}

            {isPending && 
            
            <div className="bnbs-loading-screen">
                <img src={logoDataLoading} alt="Loading..." />
                <div className="dots-holder">
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
            }

            {error && <h2 className="error-message">{ error }</h2>}
        </div>
    )
}

export default BnBsDisplay;