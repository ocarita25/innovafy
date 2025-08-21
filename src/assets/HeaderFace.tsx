import 'animate.css';
import { useState } from 'react';

function HeaderFace() {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(false);
        setTimeout(() => setAnimate(true), 10);
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" className={`${animate ? "animate__animated animate__swing" : " "}`} onClick={handleClick}>
            <path fill="currentColor" d="M0 18.166A3.635 3.635 0 0 0 3.637 21.8a3.635 3.635 0 0 0 3.637-3.633 3.635 3.635 0 0 0-3.637-3.633A3.635 3.635 0 0 0 0 18.166M32.734 3.633a3.635 3.635 0 0 0 3.637 3.633 3.635 3.635 0 0 0 3.638-3.633A3.635 3.635 0 0 0 36.37 0a3.635 3.635 0 0 0-3.637 3.633M7.273 0v3.633h10.912V21.8h14.548v-3.633H21.822V0zM20.126 36.332A14.5 14.5 0 0 1 9.844 32.07l-2.57 2.567a18.14 18.14 0 0 0 12.852 5.327c5.014 0 9.56-2.037 12.853-5.327l-2.57-2.567a14.5 14.5 0 0 1-10.283 4.26"></path>
        </svg>
    )
}

export default HeaderFace
