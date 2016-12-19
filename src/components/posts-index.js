import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

	componentWillMount() {
		// console.log('Component Will Mount - This would be a good to call an action creator');

		this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`learn-route-blog/posts/${post.id}`}>
						<span className="float-md-right float-xs-right text-help">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="text-xs-right text-right">
					<Link to="/learn-route-blog/posts/new" className="btn btn-primary">Add a Post</Link>
				</div>

				<h3>Recent Post</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}

}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);

function mapStateToProps(state) {
	return {
		posts: state.posts.all
	};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);