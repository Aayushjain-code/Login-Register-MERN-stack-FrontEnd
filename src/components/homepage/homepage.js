import React from 'react'
import './homepage.css'




const homepage = ({ setLoginUser }) => {

	return (
		<div className="homepage">
			<h1>HomePage</h1>
			<div className='button' onClick={() => setLoginUser({})} > Logout</div>
		</div >
	)
}

export default homepage
