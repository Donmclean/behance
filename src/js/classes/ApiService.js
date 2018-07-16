import axios from 'axios';
import jsonp from 'jsonp';
import queryString from 'query-string';

class ApiService {
    static _getClientIdFromattedQueryString(options = {}) {
        const queryStringObject = Object.assign(
            {},
            { client_id: 'BehanceWebSusi1' },
            // { api_key: 'xn96tdrMx5rHzV0SidIMRK3y3ZZuvw3U' },
            options
        );
        return "?" + queryString.stringify(queryStringObject);
    }

    static _getBaseUrl() {
        return 'https://www.behance.net/v2';
    }
    
    static fetchUsersBySearchValue(searchValue = '') {
        const baseUrl = ApiService._getBaseUrl();
        const requestQuery = ApiService._getClientIdFromattedQueryString({ q: searchValue });

        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}/users${requestQuery}`, null, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static fetchUserById(userId = null) {
        const baseUrl = ApiService._getBaseUrl();
        const requestQuery = ApiService._getClientIdFromattedQueryString();

        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}/users/${userId + requestQuery}`, null, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static fetchUserProjectById(userProjectId = null) {
        const baseUrl = ApiService._getBaseUrl();
        const requestQuery = ApiService._getClientIdFromattedQueryString();

        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}/projects/${userProjectId + requestQuery}`, { timeout: 2000 }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static fetchUserWorkExperienceById(userId = null) {
        const baseUrl = ApiService._getBaseUrl();
        const requestQuery = ApiService._getClientIdFromattedQueryString();

        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}/users/${userId}/work_experience${requestQuery}`, null, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static fetchUserFollowersById(userId = null) {
        const baseUrl = ApiService._getBaseUrl();
        const requestQuery = ApiService._getClientIdFromattedQueryString();

        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}/users/${userId}/followers${requestQuery}`, null, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    static fetchUserFollowingById(userId = null) {
        const baseUrl = ApiService._getBaseUrl();
        const requestQuery = ApiService._getClientIdFromattedQueryString();

        return new Promise((resolve, reject) => {
            jsonp(`${baseUrl}/users/${userId}/following${requestQuery}`, null, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

export default ApiService;