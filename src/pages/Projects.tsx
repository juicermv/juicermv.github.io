export default function Projects() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-between gap-5'>
				<div className='tw-flex tw-flex-col tw-content-stretch'>
					<h1>Projects.</h1>
					<span className='text-wrap'>
						Here you can find the random things I spend my free time
						on. <br />
						Feel free to browse and download.
					</span>
				</div>

				<div className='tw-flex tw-flex-row tw-justify-center gap-5 tw-items-center tw-flex-wrap'>
					<div className='card -sm'>
						<h5 className='card-header'>
							<i className='bi bi-car-front-fill tw-px-2'></i>
							SA GPS Redux
						</h5>
						<div className='card-body tw-justify-end tw-items-start tw-flex tw-flex-col tw-gap-2'>
							<p className='card-text'>
								A mod that adds full GPS support to GTA SA.{' '}
								<br /> Including mission objective GPS.
							</p>

							<div className='tw-flex tw-flex-row tw-gap-3 tw-w-full'>
								<a
									href='https://github.com/juicermv/GTA-GPS-Redux/releases/latest/download/GPS_Redux.zip'
									className='btn btn-primary bi bi-download '
								></a>
								<a
									href='https://github.com/Juicermv/GTA-GPS-Redux'
									className='btn btn-primary bi bi-github '
								></a>
							</div>
						</div>
					</div>

					<div className='card -sm'>
						<h5 className='card-header'>
							<i className='bi bi-heart-pulse-fill tw-px-2'></i>
							AutoHealSA
						</h5>
						<div className='card-body tw-justify-end tw-items-start tw-flex tw-flex-col tw-gap-2'>
							<p className='card-text'>
								A small GTA SA script that provides healing
								behavior similar to GTA V's.
							</p>
							<a
								href='https://github.com/Juicermv/AutoHealSA'
								className='btn btn-primary bi bi-github '
							></a>
						</div>
					</div>

					<div className='card -sm'>
						<h5 className='card-header'>
							<i className='bi bi-code tw-px-2'></i>
							PluginSDK Builds
						</h5>
						<div className='card-body tw-justify-start tw-items-start tw-flex tw-flex-col tw-gap-2'>
							<div className='rounded border border-danger bg-danger text-bg-danger -sm p-2 mono tw-text-xs'>
								Please note that you still need to set your
								PLUGIN_SDK_PATH via the included installer.
							</div>
							<p className='card-text'>
								Prebuilt PluginSDK libraries for VS2022. Source
								by DK22Pac.
							</p>

							<div className='tw-flex tw-flex-row tw-gap-3 tw-w-full'>
								<a
									href='https://github.com/juicermv/plugin-sdk/releases/latest/download/release.zip'
									className='btn btn-primary bi bi-download '
								></a>
								<a
									href='https://github.com/DK22Pac/Plugin-SDK'
									className='btn btn-primary bi bi-github '
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
