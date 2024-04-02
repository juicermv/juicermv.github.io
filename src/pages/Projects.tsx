import sc from '../assets/sc3c.png'

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
						<img
							src={sc}
							className='card-img-top'
							alt="GTA SA's Radar, showing a yellow objective marker with a yellow path leading to it."
						/>

						<div className='card-body tw-justify-start tw-items-start tw-flex tw-flex-col tw-gap-2'>
							<h5 className='card-title'>
								<i className='bi bi-car-front-fill tw-px-2'></i>
								SA GPS Redux
							</h5>
							<p className='card-text'>
								A mod that adds full GPS support to GTA SA.{' '}
								<br /> Including mission objective GPS.
							</p>
						</div>
						<div className='card-body tw-flex tw-flex-row tw-gap-3 tw-w-full'>
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

					<div className='card -sm'>
						<div className='card-body tw-justify-start tw-items-start tw-flex tw-flex-col tw-gap-2'>
							<h5 className='card-title'>
								<i className='bi bi-heart-pulse-fill tw-px-2'></i>
								AutoHealSA
							</h5>
							<p className='card-text'>
								A small GTA SA script that provides healing
								behavior similar to GTA V's.
							</p>
						</div>

						<div className='card-body tw-flex tw-flex-row tw-gap-3 tw-w-full'>
							<a
								href='https://github.com/Juicermv/AutoHealSA'
								className='btn btn-primary bi bi-github '
							></a>
						</div>
					</div>

					<div className='card -sm'>
						<div className='card-body tw-justify-start tw-items-start tw-flex tw-flex-col tw-gap-2'>
							<h5 className='card-title'>
								<i className='bi bi-code tw-px-2'></i>
								PluginSDK Builds
							</h5>
							<p className='card-text'>
								Prebuilt PluginSDK libraries for VS2022. Source
								by DK22Pac.
							</p>
						</div>
						<div className='card-body border-top border-bottom border-warning-subtle bg-warning-subtle text-bg-warning-subtle -sm p-2 mono tw-text-xs'>
							Please note that you are still required to set your
							PLUGIN_SDK_PATH environment variable.
						</div>
						<div className='card-body'>
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
