import axios from 'axios';

// Create user
export const createUser = async (token) => {
    return await axios.post(process.env.REACT_APP_API_URL + '/user/create', {}, {
        headers: {
            authToken: token
        }
    });
}

// Get User
export const getCurrentUser = async (token) => {
    return await axios.get(process.env.REACT_APP_API_URL + '/user/current', {
        headers: {
            authToken: token
        }
    });
}

// Check isAdmin
export const isAdminUser = async (token) => {
    return await axios.get(process.env.REACT_APP_API_URL + '/user/admin', {
        headers: {
            authToken: token
        }
    });
}
