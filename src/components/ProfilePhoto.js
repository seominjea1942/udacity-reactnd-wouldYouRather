import React from 'react';
import reducers from '../reducers';

function ProfilePhoto({size,imageURL, alt}) {
    return (
        <div
            style={{
                width: size,
                height: size,
                overflow: 'hidden',
                borderRadius: '50%',
                display:"inline-block"
            }}
        >
            <img
             style={{
                height: '100%',
                marginLeft: '-25%'
            }}
            src={imageURL} alt={alt} />
        </div>
    );
}

export default ProfilePhoto;