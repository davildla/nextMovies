import React from 'react';

function BlourImgPlaceHolder({smallImgUrl, children}) {
    return (
        <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${smallImgUrl})` }}>
            {children}
        </div>
    );
}

export default BlourImgPlaceHolder;