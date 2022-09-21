import whiteTextLogo from '../img/white-text-logo.png';
import { useState } from 'react';

const LoadingScreen = () => {
    const [loadingScreen, setLoadingScreen] = useState(true);

    setTimeout(() => {
        setLoadingScreen(false);
    }, 4000);

    return (
        <div className="loading-screen">
            {loadingScreen && <div className="loading-screen-content">
                <img src={whiteTextLogo} alt="Logo" />

                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>}
        </div>
    )
}

export default LoadingScreen;