import React from 'react';

const ProfileView = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.address}</h1>
        </div>
    );
}

export default ProfileView;
