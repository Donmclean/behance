import * as R from 'ramda';
import * as types from './actionTypes';

const CONSTANTS = {
    currentUser: 'currentUser',
    currentUserProjects: 'currentUserProjects',
    currentUserFollowers: 'currentUserFollowers',
    currentUserFollowing: 'currentUserFollowing',
    currentUserWorkExperience: 'currentUserWorkExperience'
};

export const initialState = {
    [CONSTANTS.currentUser]: null,
    [CONSTANTS.currentUserProjects]: [],
    [CONSTANTS.currentUserFollowers]: [],
    [CONSTANTS.currentUserFollowing]: [],
    [CONSTANTS.currentUserWorkExperience]: []
};

const userProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOCATION_CHANGE: {
            return initialState;
        }
        case types.USER_PROFILE_SET_USER: {
            const { user } = action.payload;
            return R.set(R.lensProp(CONSTANTS.currentUser), user, state);
        }
        case types.USER_PROFILE_SET_USER_PROJECTS: {
            const { currentUserProjects } = action.payload;
            return R.set(R.lensProp(CONSTANTS.currentUserProjects), currentUserProjects, state);
        }

        case types.USER_PROFILE_SET_USER_WORK_EXPERIENCE: {
            const { userWorkExperience } = action.payload;
            return R.set(R.lensProp(CONSTANTS.currentUserWorkExperience), userWorkExperience, state);
        }
        case types.USER_PROFILE_SET_USER_FOLLOWERS: {
            const { userFollowers } = action.payload;
            return R.set(R.lensProp(CONSTANTS.currentUserFollowers), userFollowers, state);
        }
        case types.USER_PROFILE_SET_USER_FOLLOWING: {
            const { userFollowing } = action.payload;
            return R.set(R.lensProp(CONSTANTS.currentUserFollowing), userFollowing, state);
        }
        default: {
            return state;
        }
    }
};

export default userProfilePageReducer;