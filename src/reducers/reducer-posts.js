import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = {
	all: [],
	post: null
};

// export default (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case FETCH_POST:
// 			return { ...state, post: action.payload.data }
//
// 		case FETCH_POSTS:
// 			return { ...state, all: action.payload.data };
//
// 		default:
// 			return state;
// 	}
// }

/**
 * With Redux Thunk
 */
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_POST:
			return { ...state, all: [action.payload, ...state.all ] };

		case FETCH_POST:
			return { ...state, post: action.payload };

		case FETCH_POSTS:
			return { ...state, all: action.payload };

		case DELETE_POST:
			const afterDeletePosts = _.filter(state.all, (del) => { return del.id != action.payload.id });
			return { ...state, all: afterDeletePosts };

		default:
			return state;
	}
}
