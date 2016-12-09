import axios from 'axios';

const API_KEY = '?key=vanjunior';
const ROOT_URL = `http://reduxblog.herokuapp.com/api`;

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}
