import './App.css'
import { ReactNode, useEffect, useState } from 'react'

// Bootstrap
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import GPS from './pages/GPS'

// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// Fonts
import '@fontsource/inter'
import '@fontsource-variable/jetbrains-mono'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home/>
		},
		{
			path: 'gps',
			element: <GPS/>
		},
		{
			path: 'other projects',
			element: <Projects/>
		}
	])

	useEffect(() => {
		// Check if user prefers dark theme. Copied over from Bootstrap examples.
		document.documentElement.setAttribute(
			'data-bs-theme',
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
		)
	}, [])

	return (
		<>
			<div className='tw-flex tw-h-full tw-flex-col tw-justify-between tw-content-stretch'>
				<NavBar
					_default='Home'
					source={['Home', 'GPS', 'Other Projects']}
					onItemClicked={(item) => {
						router.navigate(item.toLowerCase() == 'home' ? '/' : '/'+item)
					}}
				/>
				
				<div className='tw-w-full'><RouterProvider router={router} /></div>
				<Footer />
			</div>
		</>
	)
}

export default App
