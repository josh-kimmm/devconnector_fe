import api from './api';

const setAuthToken = token => {
    if(token) {
        api.defaults.headers.common['x-auth-token'] = token;
        return;
    }

    delete api.defaults.headers.common['x-auth-token'];
};

export default setAuthToken;