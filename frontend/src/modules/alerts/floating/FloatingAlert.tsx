import React, { FC } from 'react'
import classes from '../../../pages/auth/AuthPage.module.css'
import { Alert } from 'antd'

interface FloatingAlertProps {
	message: string
	type: 'success' | 'info' | 'warning' | 'error';
	isHidden: boolean
}

const FloatingAlert: FC<FloatingAlertProps> = ({ type, message, isHidden }) => {
	return (
		<Alert
			showIcon
			message={message}
			type={type}
			className={!isHidden ? classes.alertShown : classes.alertHidden}
		/>
	)
}

export default FloatingAlert
