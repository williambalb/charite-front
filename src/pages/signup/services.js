import api from '../../services/api';

const signup = (payload) => {
    return api.post("/register", payload)
}

export default {
    signup
}