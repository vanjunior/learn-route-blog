import React, { Component } from 'react';

class PostIndex extends Component {
	componentWillMount() {
		console.log('Component Will Mount -- This would be a good to call an action creator');
	}

	render() {
		return (
			<div>List of blog posts</div>
		);
	}

}

export default PostIndex;
