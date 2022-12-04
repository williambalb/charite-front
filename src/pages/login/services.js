import api from '../../services/api';

const login = (payload) => {
	return api.post("/login", payload);
}

export default {
	login
}