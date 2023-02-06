import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Tooltip } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../model/IUser'
import classes from './navbar.module.css'

interface NavbarProps {
	user: IUser
}

const Navbar: FC<NavbarProps> = ({ user }) => {
	return (
		<div className={classes.navbar}>
			<Tooltip
				title='Нажмите, чтобы перейти в свой профиль'
				placement='right'
				className='avatar-wrapper'
			>
				<Link to='/profile'>
					<Avatar
						className={classes.avatar}
						size={100}
						src={user.image}
						icon={<UserOutlined />}
					/>
					<span className={classes.username}>{user.username}</span>
				</Link>
			</Tooltip>
			<Button
				type='primary'
				size='large'
				shape='round'
				className={classes.toListButton}
			>
				<Link to={'/error'}>Главная</Link>
			</Button>
		</div>
	)
}

export default Navbar
