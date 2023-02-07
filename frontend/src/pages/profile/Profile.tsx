import React, { FC } from 'react'
import { IUser } from '../../model/IUser'
import { Avatar } from 'antd'
import Form from '../../modules/form/Form'
import classes from './Profule.module.css'

interface ProfileProps {
	user: IUser
}

const Profile: FC<ProfileProps> = ({ user }) => {
	return (
		<div>
			<div className={classes.fromWrapper}>
				<Form title={''}>
					<h1>{user.name}</h1>
					<h1>{user.surname}</h1>
					<h1>{user.age}</h1>
					<Avatar src={user.image} />
				</Form>
			</div>
		</div>
	)
}

export default Profile
