import { useState } from 'react'

interface NavBarProps {
	title: string
	_default: string
	source: string[]
	onItemClicked: (itemName: string) => void
	onTitleClicked: () => void
}

export default function NavBar({
	title,
	_default,
	source,
	onItemClicked,
	onTitleClicked,
}: NavBarProps) {
	const [current, setCurrent] = useState(_default)

	return (
		<>
			<nav className='navbar navbar-expand-md text-bg-light bg-light shadow px-5'>
				<div className='container-fluid'>
					<a
						className='navbar-brand'
						onClick={() => {
							onTitleClicked()
						}}
					>
						{title}
					</a>
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
											className='nav-link active text-primary'
											key={item}
											href={'#'}
										>
											{item}
										</a>
									)
								} else {
									return (
										<a
											className='nav-link'
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
