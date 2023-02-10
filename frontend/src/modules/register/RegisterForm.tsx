import { Button, Input } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from '../../pages/auth/AuthPage.module.css'
import Form from '../form/Form'
import { getCurrentUser, IUser } from '../../model/IUser'
import FloatingAlert from '../alerts/floating/FloatingAlert'

const RegisterForm = () => {
	const [regIsAvailable, setRegIsAvailable] = useState<boolean>(false)
	const [alertIsHidden, setAlertIsHidden] = useState<boolean>(true)
	const [name, setName] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const isCorrectField = (field: string) => {
		if (field != '' && field != null) {
			setRegIsAvailable(true)
			return field.trim()
		}
		setAlertIsHidden(false)
		setTimeout(() => {
			setAlertIsHidden(true)
		}, 2000)
		return ''
	}

	const createUser = () => {
		let user: IUser = {
			username: isCorrectField(username),
			password: isCorrectField(password),
			name: isCorrectField(name),
			surname: isCorrectField(surname),
			image: 'https://picsum.photos/200'
		}
		return user
	}

	const register = () => {
		let user = createUser()
		getCurrentUser(user)
	}

	return (
		<div>
			<FloatingAlert message={'Заполните все поля'} type={'error'} isHidden={alertIsHidden} />
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
				>{
					regIsAvailable
						? <Link to={'/feed'}>Зарегистрироватся</Link>
						: <span>Зарегистрироватся</span>
				}
				</Button>
			</Form>
		</div>
	)
}

export default RegisterForm
