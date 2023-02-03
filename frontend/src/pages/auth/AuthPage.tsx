import React, { useState } from 'react'
import { Alert, Button, Input } from 'antd'
import classes from './AuthPage.module.css'
import { Link } from 'react-router-dom'

const AuthPage = () => {
	const [forgotPasswordAlert, setForgotPasswordAlert] = useState<boolean>(false)
	return (
		<div className={classes.root}>
			{
				forgotPasswordAlert
					? <Alert message={'Ебать ты лох'} type={'success'} className={classes.alert} />
					: <></>
			}
			<form className={classes.form}>
				<h1 className={classes.title}>Авторизация</h1>
				<div className={classes.wrapper}>
					<Input placeholder={'Имя пользователя'} className={classes.input} />
					<div className={classes.passwordWrapper}>
						<Input.Password placeholder={'Пароль'} className={classes.input} />
						<Button onClick={() => {
							setForgotPasswordAlert(true)
							setTimeout(() => {
								setForgotPasswordAlert(false)
							}, 2000)
						}} type={'link'}>Забыл пароль</Button>
					</div>
					<Button className={classes.loginButton} type={'primary'}><Link to={'/feed'}>Войти</Link></Button>
				</div>
			</form>
		</div>
	)
}

export default AuthPage
