import { Link } from 'react-router-dom'
import Panel from '../components/Panel'

export default function Home() {
	return (
		<>
			<Panel className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-center gap-4'>
				<div>
					<h1 className='instrument-serif-regular-italic tw-text-8xl'>
						Hello!
					</h1>
					<h5>
						My name is Juicermv, I have a bunch of small projects I
						like to work on over at my{' '}
						<Link
							to='https://www.github.com/juicermv'
							className='tw-no-underline link-primary'
						>
							<i className='bi bi-github tw-mr-1' />
							GitHub.
						</Link>
						<br />
						My most active project at the moment is my GPS mod for
						GTA SA, which you can take a look at under{' '}
						<Link
							to='/GPS'
							className='tw-no-underline link-primary'
						>
							<i className='bi bi-car-front-fill tw-mr-1' />
							GPS Redux.
						</Link>
						<br />
						Thank you so much for taking an interest!
					</h5>
				</div>
			</Panel>
		</>
	)
}
