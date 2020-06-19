import React from 'react';
import './Content.css';
import ProfileData from './ProfileData/ProfileData';
import Repositories from './Repositories/Repositories';

const Content = (props) => {
    return (
        <div className="content">
            <ProfileData profileData={props.profileData} />
            <Repositories />
        </div>
    );
};
export default Content;

