export default function NotFound() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-center gap-4'>
				<div className='tw-flex tw-flex-col tw-content-start text-wrap tw-text-center gap-4'>
					<div
						className='alert alert-danger'
						role='alert'
					>
						<i className='tw-mr-2 bi bi-cone-striped'></i>Page not
						found!
					</div>
				</div>
			</div>
		</>
	)
}
