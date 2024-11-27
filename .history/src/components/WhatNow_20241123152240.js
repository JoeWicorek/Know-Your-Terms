import React from 'react';

function WhatNow() {
    return (
        <div>
            <h1>WhatNow</h1>
            {/* External Image */}
            <img
                src="https://www.apu.apus.edu/area-of-study/business-and-management/resources/how-social-media-sites-affect-society/"
                alt="Social Media Impact"
                style={{ width: '100%', height: 'auto' }}
            />
            {/* Local Image */}
            <img
                src={`${process.env.PUBLIC_URL}/img/facebook.png`}
                alt="Facebook Logo"
                style={{ width: '100px', height: 'auto' }}
            />
        </div>
    );
}

export default WhatNow;
