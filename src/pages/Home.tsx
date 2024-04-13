export default function Home() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-start gap-4'>
				<div className='tw-flex tw-flex-col tw-content-stretch text-wrap'>
					<h1>
						<i className='bi bi-person-raised-hand tw-mr-2'></i>
						Hello!
					</h1>
					<span>
						My name is Juicermv, I have a bunch of small projects I
						like to work on over at my{' '}
						<a href='https://www.github.com/juicermv'>Github</a>.
					</span>
					<span>
						My most active project at the moment is my GPS mod for
						GTA SA, which you can take a look at under{' '}
						<span className='text-body-emphasis'>GPS</span>.
					</span>
					<span>Thank you so much for taking an interest!</span>
				</div>
			</div>
		</>
	)
}
