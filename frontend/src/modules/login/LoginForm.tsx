import { Button, Input } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from '../../pages/auth/AuthPage.module.css'
import FloatingAlert from '../alerts/floating/FloatingAlert'
import Form from '../form/Form'

const LoginForm = () => {
	const [alertHidden, setAlertHidden] = useState<boolean>(true)

	const showAlert = () => {
		setAlertHidden(false)
		setTimeout(() => {
			setAlertHidden(true)
		}, 2000)
	}

	return (
		<div>
			<FloatingAlert
				type={'success'}
				message={'Забыл пиздец!'}
				isHidden={alertHidden}
			/>
			<Form title={'Авторизация'}>
				<Input placeholder={'Имя пользователя'} className={classes.input} />
				<Input.Password placeholder={'Пароль'} className={classes.input} />
				<div className={classes.linkButtons}>
					<Button onClick={showAlert} type={'link'}>
						Забыл(а) пароль
					</Button>
					<Button type={'link'}>
						<Link to={'/register'}>Зарегистрироваться</Link>
					</Button>
				</div>
				<Button className={classes.loginButton} type={'primary'}>
					<Link to={'/feed'}>Войти</Link>
				</Button>
			</Form>
		</div>
	)
}

export default LoginForm
