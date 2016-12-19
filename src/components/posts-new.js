// ES6
import React, { Component, PropTypes } from 'react';
// ES5
// const Component = React.Component;

import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	dangerControl(input) {
		return input.touched && input.invalid ? 'has-danger' : '';
	}

	onSubmit(props) {
		console.log(props);
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate to index
				// We navigate by calling this.context.router.push with the new path to navigate to.
				this.context.router.push('/learn-route-blog');
			});
	}

	render() {
		// ES6 Syntax
		const {
			fields: { title, categories, content }, handleSubmit
		} = this.props;

		// ES5 Syntax
		// const handleSumbit = this.props.handleSumbit;
		// const title = this.props.fields.title;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<div className={`form-group ${this.dangerControl(title)}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help text-danger">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${this.dangerControl(categories)}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help text-danger">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${this.dangerControl(content)}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
					<div className="text-help text-danger">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/learn-route-blog" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}

}

function validate(values) {
	const errors = {};

	if(! values.title) {
		errors.title = 'Enter a title';
	}

	if(! values.categories) {
		errors.categories = 'Enter a categories';
	}

	if(! values.content) {
		errors.content = 'Enter a content';
	}

	return errors;
}

// connect: 1st argument mapStateToProps, 2nd mapDispatchToProps
// reduxForm: 1st argument form config, 2nd mapStateToProps, 3rd mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: [
		'title',
		'categories',
		'content'
	],
	validate
}, null, { createPost })(PostsNew);
