import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Router } from '@remix-run/router';
import { To } from 'react-router';

interface NavBarProps {
	router: Router;
}

export default function NavBar({ router }: NavBarProps) {
	const { scrollY } = useScroll();
	const [classes, setClasses] = useState('');
	const [currentPath, setCurrentPath] = useState(
		router.state.location.pathname
	);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		console.log(latest);
		if (latest > 0) {
			setClasses('bg-body-tertiary');
		} else {
			setClasses('bg-body');
		}
	});

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
							{router.routes.map((route) => {
								if (route.id !== 'NotFound')
									return (
										<li key={route.id}>
											{' '}
											<a
												className={
													'nav-link active tw-cursor-pointer alert p-2 m-0 text-center' +
													(route.path === currentPath
														? 'text-body-emphasis alert-primary'
														: 'text-body ')
												}
												onClick={() => {
													router.navigate(
														route.path as To
													);

													setCurrentPath(
														route.path as string
													);
												}}
											>
												{route.id}
											</a>
										</li>
									);
							})}
						</ul>
						<a
							href='https://www.github.com/juicermv/juicermv.github.io'
							className='btn btn-outline-primary bi bi-github'
						/>
					</div>
				</div>
			</nav>
		</>
	);
}
