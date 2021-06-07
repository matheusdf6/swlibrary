import React from 'react';

import "./styles.css"

const Spinner = () => {
    return (
        <div className="sw-spinner-container">
            <div class="sw-spinner">
                <div class="ls-particles ls-part-1"></div>
                <div class="ls-particles ls-part-2"></div>
                <div class="ls-particles ls-part-3"></div>
                <div class="ls-particles ls-part-4"></div>
                <div class="ls-particles ls-part-5"></div>
                <div class="lightsaber ls-left ls-green"></div>
                <div class="lightsaber ls-right ls-red"></div>
            </div>
        </div>
    );
}
 
export default Spinner;