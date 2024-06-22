import { useEffect, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { router } from '../App'
import { To } from 'react-router'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
	const { scrollY } = useScroll()
	const [classes, setClasses] = useState('animate-no-shadow')

	useMotionValueEvent(scrollY, 'change', (latest) => {
		console.log(latest)
		if (latest > 0) {
			setClasses('animate-shadow')
		} else {
			setClasses('animate-no-shadow')
		}
	})

	const location = useLocation()

	return (
		<>
			<nav className={'navbar navbar-expand-lg sticky-top ' + classes}>
				<div className='container-fluid'>
					<button
						className='navbar-toggler focus-ring border-0 p-2'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarNavAltMarkup'
					>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0 tw-gap-1'>
							{router.routes[0].children?.map((route) => {
								if (route.id !== 'NotFound')
									return (
										<li key={route.id}>
											{' '}
											<Link
												to={route.path as To}
												className={
													'nav-link active tw-cursor-pointer p-2 m-0 text-center ' +
													((route.index === true
														? '/'
														: route.path?.toLowerCase()) ===
													location.pathname.toLowerCase()
														? 'text-primary'
														: 'text-body ')
												}
											>
												{route.id}
											</Link>
										</li>
									)
							})}
						</ul>
						<a
							href='https://www.github.com/juicermv/juicermv.github.io'
							className='btn btn-outline-secondary bi bi-github'
						/>
					</div>
				</div>
			</nav>
		</>
	)
}
