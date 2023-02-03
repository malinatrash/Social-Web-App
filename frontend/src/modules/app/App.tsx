import AuthPage from '../../pages/auth/AuthPage'
import Error from '../../pages/error/Error'
import './App.module.css'
import { Navigate, Route, Routes } from 'react-router'
import React from 'react'
import Feed from '../../pages/feed/Feed'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={<Navigate to='/login' replace />}
				/>
				<Route
					element={<AuthPage />}
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
				)
			</Routes>
		</div>
	)
}

export default App
