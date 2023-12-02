import api from '../../services/api';

const all = () => {
	return api.get('/categories');
}

export default {
	all
}