import React from 'react'
import { Button, Input } from 'antd'
import classes from '../../pages/auth/AuthPage.module.css'
import { Link } from 'react-router-dom'
import Form from '../form/Form'
import Uploader from './uploader/Uploader'

const RegisterForm = () => {
	return (
		<Form title={'Регистрация'}>
			<div style={{ display: 'flex' }}>
				<Input placeholder={'Имя'} className={classes.input} />
				<Input placeholder={'Фамилия'} className={classes.input} />
			</div>
			<Input placeholder={'Имя пользователя'} className={classes.input} />
			<Input.Password placeholder={'Пароль'} className={classes.input} />
			<Uploader />
			<Button className={classes.loginButton} type={'primary'}>
				<Link to={'/feed'}>Зарегистрироватся</Link>
			</Button>
		</Form>
	)
}

export default RegisterForm
