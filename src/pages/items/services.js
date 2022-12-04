import api from '../../services/api';

const all = () => {
	return api.get('/items');
}

export default {
	all
}