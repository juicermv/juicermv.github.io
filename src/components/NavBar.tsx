import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

interface NavBarProps {
	_default: string
	source: string[]
	onItemClicked: (itemName: string) => void
}

export default function NavBar({
	_default,
	source,
	onItemClicked,
}: NavBarProps) {
	const [current, setCurrent] = useState(_default)
	const { scrollY } = useScroll()
	const [classes, setClasses] = useState(
		'navbar navbar-expand-lg bg-body sticky-top'
	)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		console.log(latest)
		if (latest > 0) {
			setClasses('navbar navbar-expand-lg bg-body-tertiary sticky-top')
		} else {
			setClasses('navbar navbar-expand-lg bg-body sticky-top')
		}
	})

	return (
		<>
			<nav className={classes}>
				<div className='container-fluid'>
					<button
						className='navbar-toggler focus-ring border-0 p-2'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarNavAltMarkup'
					>
						<div className='navbar-nav'>
							{source.map((item) => {
								if (item === current) {
									return (
										<a
											className='nav-link active text-body-emphasis'
											key={item}
											href={'#'}
										>
											{item}
										</a>
									)
								} else {
									return (
										<a
											className='nav-link fw-light text-body'
											key={item}
											onClick={() => {
												onItemClicked(item)
												setCurrent(item)
											}}
											href={'#'}
										>
											{item}
										</a>
									)
								}
							})}
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
