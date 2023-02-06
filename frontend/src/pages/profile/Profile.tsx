import React, { FC } from 'react'
import Form from '../../modules/form/Form'
import { IUser } from '../../model/IUser'

interface ProfileProps {
	user: IUser
}

const Profile: FC<ProfileProps> = ({ user }) => {
	return (
		<Form title='Информация о пользователе'>
			<span>{user.name}</span>
			<span>{user.age}</span>
		</Form>
	)
}

export default Profile
