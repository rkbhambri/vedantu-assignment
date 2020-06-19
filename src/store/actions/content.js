import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setProfileData = (profileData) => ({
    type: actionTypes.SET_PROFILE_DATA,
    profileData
});

export const getProfileData = () => {
    return dispatch => {
        axios.get(`https://api.github.com/users/supreetsingh247`)
            .then(response => {
                if (response.data) {
                    dispatch(setProfileData(response.data));
                }
            })
            .catch(error => {

            });
    };
};

export const setUserRepositories = (repositories) => ({
    type: actionTypes.SET_USER_REPOSITORIES,
    repositories
});

export const getUserRepositories = () => {
    return dispatch => {
        axios.get(`https://api.github.com/users/supreetsingh247/repos`)
            .then(response => {
                if (response.data) {
                    dispatch(setUserRepositories(response.data));
                }
            })
            .catch(error => {

            });
    };
};
