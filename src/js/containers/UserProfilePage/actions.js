import * as types from './actionTypes';

export const fetchUserById = (userId) => ({
    type: types.USER_PROFILE_FETCH_USER,
    payload: { userId }
});

export const setUser = (user) => ({
    type: types.USER_PROFILE_SET_USER,
    payload: { user }
});

export const fetchProjects = (features) => ({
    type: types.USER_PROFILE_FETCH_USER_PROJECTS,
    payload: { features }
});

export const setProjects = (currentUserProjects) => ({
    type: types.USER_PROFILE_SET_USER_PROJECTS,
    payload: { currentUserProjects }
});

export const fetchUserDetailsById = (userId) => ({
    type: types.USER_PROFILE_FETCH_USER_DETAILS,
    payload: { userId }
});

export const setUserWorkExperience = (userWorkExperience) => ({
    type: types.USER_PROFILE_SET_USER_WORK_EXPERIENCE,
    payload: { userWorkExperience }
});

export const setUserFollowing = (userFollowing) => ({
    type: types.USER_PROFILE_SET_USER_FOLLOWING,
    payload: { userFollowing }
});

export const setUserFollowers = (userFollowers) => ({
    type: types.USER_PROFILE_SET_USER_FOLLOWERS,
    payload: { userFollowers }
});