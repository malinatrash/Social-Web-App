import React, { useState } from 'react'
import { Alert, Button, Input } from 'antd'
import classes from './AuthPage.module.css'
import { Link } from 'react-router-dom'

const AuthPage = () => {
	const [forgotPasswordAlert, setForgotPasswordAlert] = useState<boolean>(false)
	const showAlert = () => {
		setForgotPasswordAlert(true)
		setTimeout(() => {
			setForgotPasswordAlert(false)
		}, 2000)
	}
	return (
		<div className={classes.root}>
			{
				<Alert
					showIcon
					message={'Ебать ты лох'}
					type={'success'}
					className={forgotPasswordAlert ? classes.alertShown : classes.alertHidden}
				/>

			}
			<form className={classes.form}>
				<h1 className={classes.title}>Авторизация</h1>
				<div className={classes.wrapper}>
					<Input placeholder={'Имя пользователя'} className={classes.input} />
					<Input.Password placeholder={'Пароль'} className={classes.input} />
					<div className={classes.linkButtons}>
						<Button
							onClick={showAlert}
							type={'link'}>Забыл(а) пароль
						</Button>
						<Button
							type={'link'}><Link to={'/register'}>Зарегистрироваться</Link>
						</Button>
					</div>
					<Button
						className={classes.loginButton}
						type={'primary'}
					>
						<Link to={'/feed'}>Войти</Link>
					</Button>
				</div>
			</form>
		</div>
	)
}

export default AuthPage
