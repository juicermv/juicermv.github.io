import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-center gap-4'>
				<div className='tw-flex tw-flex-col tw-content-start text-wrap tw-text-center gap-4'>
					<h1 className='fs-1'>
						<i className='bi bi-person-raised-hand tw-mr-2'></i>
						Hello!
					</h1>
					<div className='fs-5'>
						<p>
							My name is Juicermv, I have a bunch of small
							projects I like to work on over at my{' '}
							<Link
								to='https://www.github.com/juicermv'
								className='tw-no-underline link-primary'
							>
								<i className='bi bi-github tw-mr-1' />
								GitHub.
							</Link>
						</p>
						<p>
							My most active project at the moment is my GPS mod
							for GTA SA, which you can take a look at under{' '}
							<Link
								to='/GPS'
								className='tw-no-underline link-primary'
							>
								<i className='bi bi-car-front-fill tw-mr-1' />
								GPS Redux.
							</Link>
						</p>
					</div>
					<p className='fs-5'>
						Thank you so much for taking an interest!
					</p>
				</div>
			</div>
		</>
	)
}
