import React, { FC } from 'react'
import classes from '../../pages/auth/AuthPage.module.css'

interface FormProps {
	title: string
	children: React.ReactNode
}

const Form: FC<FormProps> = ({ title, children }) => {
	return (
		<form className={classes.form}>
			<h1 className={classes.title}>{title}</h1>
			<div className={classes.wrapper}>
				{children}
			</div>
		</form>
	)
}

export default Form
