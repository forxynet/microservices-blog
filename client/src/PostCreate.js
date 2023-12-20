import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
	const [title, setTitle] = useState('');

	const onSubmit = async (event) => {
		await axios.post('http://posts-srv:4000/posts', {
			title,
		});

		event.preventDefault();
		setTitle('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Title</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='form-control'
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default PostCreate;
