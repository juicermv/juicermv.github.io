import { useEffect, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

interface NavBarProps {
	_current: string
	source: string[]
	onItemClicked: (itemName: string) => void
}

export default function NavBar({
	_current,
	source,
	onItemClicked,
}: NavBarProps) {
	const [current, setCurrent] = useState('')
	const { scrollY } = useScroll()
	const [classes, setClasses] = useState(
		'navbar navbar-expand-lg bg-body sticky-top'
	)

	useEffect(()=>{
		setCurrent(_current)
	},[_current])

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
								return (
									<a
										className={'nav-link active tw-cursor-pointer ' + (item.toLowerCase() === current.toLowerCase() ? 'text-body-emphasis' : 'text-body')}
										key={item}
										onClick={()=>{
											onItemClicked(item)
										}}
									>
										{item}
									</a>
								)
							})}
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
