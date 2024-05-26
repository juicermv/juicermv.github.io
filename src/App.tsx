// Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import GPS from './pages/GPS'

// Components
import NavBar from './components/NavBar'

// Fonts
import { RouterProvider, createHashRouter } from 'react-router-dom'

import './App.css'
import NotFound from './pages/NotFound'

function App() {
	const router = createHashRouter([
		{
			path: '/',
			id: 'Home',
			element: <Home />,
		},
		{
			path: '/gps',
			id: 'GPS Redux',
			element: <GPS />,
		},
		{
			path: '/projects',
			id: 'Other Projects',
			element: <Projects />,
		},
		{
			path: '*',
			id: 'NotFound',
			element: <NotFound />,
		},
	])

	document.documentElement.setAttribute(
		'data-bs-theme',
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	)

	return (
		<>
			<div className='tw-flex tw-h-full tw-flex-col tw-justify-stretch'>
			<NavBar router={router} />
				<div className='tw-w-full tw-my-auto tw-flex tw-flex-col tw-justify-center'>
					<RouterProvider router={router} />
				</div>
			</div>
		</>
	)
}

export default App
