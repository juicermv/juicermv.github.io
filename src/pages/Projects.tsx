export default function Projects() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-between gap-4'>
				<div className='tw-flex tw-flex-col tw-content-stretch text-center tw-m-auto'>
					<h1>
						<i className='bi bi-gear-wide-connected tw-mr-2'></i>
						Projects.
					</h1>
					<span className='text-wrap'>
						Here you can find the random things I spend my free time
						on. <br />
						Feel free to browse and download.
					</span>
				</div>

				<div className='tw-flex tw-flex-row tw-justify-center gap-4 tw-items-center tw-flex-wrap'>
					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-code tw-mr-2'></i>
								PluginSDK Builds
							</h5>

							<p className='card-text'>
								Prebuilt PluginSDK libraries for VS2022. Source
								by DK22Pac.
								<div className='p-2 tw-mt-2 border rounded border-warning-subtle bg-warning-subtle text-bg-warning-subtle mono tw-text-xs'>
									Please note that you are still required to
									set your PLUGIN_SDK_PATH environment
									variable.
								</div>
							</p>

							<div className='btn-group'>
								<a
									href='https://github.com/juicermv/plugin-sdk/releases/latest/download/release.zip'
									className='btn btn-outline-primary bi bi-download '
								></a>
								<a
									href='https://github.com/DK22Pac/Plugin-SDK'
									className='btn btn-outline-primary bi bi-github '
								/>
							</div>
						</div>
					</div>

					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-heart-pulse-fill tw-mr-2'></i>
								AutoHealSA
							</h5>
							<p className='card-text'>
								A small GTA SA script that provides healing
								behavior similar to GTA V's.
							</p>
							<div className='btn-group'>
								<a
									href='https://github.com/Juicermv/AutoHealSA'
									className='btn btn-outline-primary bi bi-github '
								></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
