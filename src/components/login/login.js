import React from 'react';
import './login.css';
const login = () => {
	return (
		<div className='login'>
			<h1>Login</h1>
			<input type="text" placeholder='Enter your email' />
			<input type="text" placeholder='Enter your password' />
			<div className='button'>Login</div>
			<div>or</div>
			<div className='button'>Register</div>
		</div>
	)
}

export default login;
