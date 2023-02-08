import AuthPage from '../../pages/auth/AuthPage'
import Error from '../../pages/error/Error'
import './App.module.css'
import { Navigate, Route, Routes } from 'react-router'
import React from 'react'
import Feed from '../../pages/feed/Feed'
import LoginForm from '../login/LoginForm'
import RegisterForm from '../register/RegisterForm'
import Profile from '../../pages/profile/Profile'
import { currentUser } from '../../model/IUser'

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path={'/register'}
					element={<AuthPage child={<RegisterForm />} />}
				/>
				<Route
					path='/'
					element={<Navigate to='/login' replace />}
				/>
				<Route
					element={<AuthPage child={<LoginForm />} />}
					path='/login'
				/>
				<Route
					element={<Feed />}
					path='/feed'
				/>
				<Route
					path='/error'
					element={<Error />}
				/>
				<Route
					path='/*'
					element={<Navigate to='/error' replace />}
				/>
				<Route
					path='/profile'
					element={<Profile user={currentUser} />}
				/>
				)
			</Routes>
		</div>
	)
}

export default App
