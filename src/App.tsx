// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import GPS from './pages/GPS'
import NotFound from './pages/NotFound'

// Components
import NavBar from './components/NavBar'
import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function Layout() {
	return (
		<>
			<div className='tw-flex tw-h-full tw-flex-col tw-justify-stretch'>
				<NavBar />
				<Outlet />
			</div>
		</>
	)
}
export const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
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
		],
	},
])

function App() {
	matchMedia('(prefers-color-scheme: dark)').addEventListener(
		'change',
		(event) => {
			document.documentElement.setAttribute(
				'data-bs-theme',
				event.matches ? 'dark' : 'light'
			)
		}
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
