import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { isNull } from '../../../helpers/miscellenous';
import * as actionCreaters from '../../../store/actions';
import './ProfileData.css';

const ProfileData = (props) => {

    useEffect(() => {
        props.onGetProfileData();
    }, []);

    return (
        <div className="profile-data">
            <img className="profile-pic" alt='vedantu' src={props.profileData.avatar_url} />
            <div className="name">
                {props.profileData.name}
            </div>
            <div className="login-username">
                {props.profileData.login}
            </div>
            <div className="bio">
                {props.profileData.bio}
            </div>
            <div className="company">{props.profileData.company}</div>
            <div className="location">{props.profileData.location}</div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        profileData: state.content.profileData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetProfileData: () => dispatch(actionCreaters.getProfileData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileData);
