import React from 'react'
import Navbar from '../../modules/navbar/Navbar'
import { currentUser } from '../../model/IUser'

const Feed = () => {
	return (
		<div>
			<Navbar user={currentUser} />
			<h1>хуй</h1>
		</div>
	)
}

export default Feed
