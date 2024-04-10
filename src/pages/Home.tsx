import pfp from 'https://github.com/juicermv.png'

export default function Home() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-between'>
				<div className='tw-flex tw-flex-col tw-content-stretch'>
					<h1>Welcome.</h1>
					<span className='text-wrap'>
						My name is juicermv. I use my free time to code various
						projects (including this website).
						<br />
						I am proficient with C++, C#, Python, and Node.js.
						<br />
						Head over to{' '}
						<div className='d-inline text-body-emphasis'>
							Projects
						</div>{' '}
						to see my works.
					</span>
				</div>

				<img
					src={pfp}
					alt='GitHub Profile Picture'
					className='tw-flex-none'
				/>
			</div>
		</>
	)
}
