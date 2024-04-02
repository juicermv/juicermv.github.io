import { useState } from 'react'

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

	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
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
