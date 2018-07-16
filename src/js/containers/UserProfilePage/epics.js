import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { isEmpty, isNil, get } from 'lodash';
import { getOnlySuccessfulPromises } from '../../utils';
import ApiService from '../../classes/ApiService';

import * as userProfileActionTypes from './actionTypes';
import * as userProfileActions from './actions';

export const userProfileFetchUserEpic = (action$, store) =>
    action$.ofType(userProfileActionTypes.USER_PROFILE_FETCH_USER)
        .switchMap(({ payload }) => {
            const { userId } = payload;

            if(isEmpty(userId) || isNil(userId)) {
                return Observable.of();
            }

            return Observable.fromPromise(ApiService.fetchUserById(userId))
                .mergeMap(({ user }) => Observable.of(
                    userProfileActions.setUser(user),
                    userProfileActions.fetchUserDetailsById(user.id),
                    userProfileActions.fetchProjects(user.features)
                ))
                .do(({payload = {}}) => {
                    if(payload.user && window.responsiveVoice) {
                        const displayName = get(payload, 'user.display_name', '');
                        const city = get(payload, 'user.city', '');
                        const country = get(payload, 'user.country', '');
                        responsiveVoice.speak(`${displayName} from ${city} ${country}`);
                    }
                })
                .catch((err) => {
                    console.error('err > userProfileFetchUserEpic > fromPromise: ', err);
                    return Observable.of();
                });
        })
        .catch((err) => {
            console.error('err > userProfileFetchUserEpic: ', err);
            return Observable.of();
        });

export const userProfileFetchUserProjectsEpic = (action$, store) =>
    action$.ofType(userProfileActionTypes.USER_PROFILE_FETCH_USER_PROJECTS)
        .switchMap(({ payload }) => {
            const { features = [] } = payload;

            if(isEmpty(features) || isNil(features)) {
                return Observable.of();
            }

            const projectRequestPromises = features.reduce((acc, feature) => {
                feature.projects.forEach((project) => {
                    acc = acc.concat(ApiService.fetchUserProjectById(project.id));
                });

                return acc;
            }, []);

            const resolvedPromises = getOnlySuccessfulPromises(projectRequestPromises);
            
            return Observable.forkJoin(resolvedPromises)
                .mergeMap(([currentUserProjects]) => {
                    return Observable.of(userProfileActions.setProjects(currentUserProjects));
                });
                
        })
        .catch((err) => {
            console.error('err > userProfileFetchUserProjectsEpic: ', err);
            return Observable.of();
        });

export const userProfileFetchUserDetailsEpic = (action$, store) =>
    action$.ofType(userProfileActionTypes.USER_PROFILE_FETCH_USER_DETAILS)
        .switchMap(({ payload }) => {
            const { userId } = payload;
            
            return Observable.forkJoin([
                ApiService.fetchUserWorkExperienceById(userId),
                ApiService.fetchUserFollowersById(userId),
                ApiService.fetchUserFollowingById(userId)
            ])
            .mergeMap(([{work_experience}, {followers}, {following}]) => {
                return Observable.of(
                    userProfileActions.setUserWorkExperience(work_experience),
                    userProfileActions.setUserFollowers(followers),
                    userProfileActions.setUserFollowing(following)
                );
            });
        })
        .catch((err) => {
            console.error('err > userProfileFetchUserDetailsEpic: ', err);
            return Observable.of();
        });

export default combineEpics(
    userProfileFetchUserEpic,
    userProfileFetchUserProjectsEpic,
    userProfileFetchUserDetailsEpic
);