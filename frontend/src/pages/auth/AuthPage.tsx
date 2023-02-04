import React, { FC } from 'react'
import classes from './AuthPage.module.css'

interface AuthPageProps {
	child: React.ReactNode
}

const AuthPage: FC<AuthPageProps> = ({ child }) => {
	return (
		<div className={classes.root}>
			{child}
		</div>
	)
}

export default AuthPage
