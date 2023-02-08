import { Button, Input } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from '../../pages/auth/AuthPage.module.css'
import Form from '../form/Form'

const RegisterForm = () => {
	const [name, setName] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const createUser = () => {
		return {
			username: username,
			password: password,
			name: name,
			surname: surname,
			image: 'https://picsum.photos/200',
		}
	}

	const register = () => {
		let user = createUser()
		console.log(user)
	}

	return (
		<Form title={'Регистрация'}>
			<div style={{ display: 'flex' }}>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder={'Имя'}
					className={classes.input}
				/>
				<Input
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
					placeholder={'Фамилия'}
					className={classes.input}
				/>
			</div>
			<Input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder={'Имя пользователя'}
				className={classes.input}
			/>
			<Input.Password
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder={'Пароль'}
				className={classes.input}
			/>

			{/* <Uploader /> */}
			<Button
				className={classes.loginButton}
				type={'primary'}
				onClick={register}
			>
				<Link to={'/feed'}>Зарегистрироватся</Link>
			</Button>
		</Form>
	)
}

export default RegisterForm
