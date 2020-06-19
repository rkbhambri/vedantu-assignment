
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    profileData: {},
    repositories: []
};

const setProfileData = (state, action) => {
    return updateObject(state, {
        profileData: action.profileData
    });
};

const setUserRepositories = (state, action) => {
    return updateObject(state, {
        repositories: action.repositories
    });
};

const content = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PROFILE_DATA:
            return setProfileData(state, action);
        case actionTypes.SET_USER_REPOSITORIES:
            return setUserRepositories(state, action);
        default:
            return state;
    }
};

export default content;
