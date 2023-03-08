import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

const getToken = async (email, password) => {
    const response = await axios.post('/login', {
        email: email,
        password: password,
    });
    return response.data.body.token;
};

const userData = async () => {
    const response = await axios.post('/profile');
    return response.data.body;
};

const userEdit = async (firstName, lastName) => {
    await axios.put('/profile', {
        firstName,
        lastName,
    });
};

const setBearer = (token) => {
    axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
    };
};

export { getToken, userData, userEdit, setBearer };
