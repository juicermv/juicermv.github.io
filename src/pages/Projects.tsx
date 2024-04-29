import { Link } from 'react-router-dom'

export default function Projects() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-evenly gap-4'>
				<div className='tw-flex tw-flex-col tw-content-stretch text-center'>
					<h1 className='fs-1'>Projects</h1>
					<span className='text-wrap fs-5'>
						Some things I work on during my free time.
					</span>
				</div>

				<div className='tw-flex tw-flex-col tw-flex-wrap tw-content-stretch tw-items-baseline tw-justify-evenly gap-4'>
					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-gear-wide-connected tw-mr-2'></i>
								NuMake
							</h5>
							<p className='card-subtitle mb-2'>
								An experimental C/C++ build system written in
								Rust.
							</p>

							<div className='card-text'>
								In-development. Supports GCC, Clang & MSVC.
								<br />
								GPS Redux & AutoHealSA already utilize it!
							</div>
						</div>
						<div className='card-footer'>
							<div className='btn-group'>
								<Link
									to='https://github.com/juicermv/numake'
									className='btn btn-outline-primary bi bi-github'
								/>
							</div>
						</div>
					</div>

					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-code tw-mr-2'></i>
								PluginSDK Builds
							</h5>
							<p className='card-subtitle mb-2'>
								Prebuilt PluginSDK libraries for VS2022. Source
								by DK22Pac.
							</p>

							<div className='card-text alert alert-warning mono tw-text-xs tw-max-w-lg tw-mx-auto'>
								<i className='bi bi-exclamation-circle tw-mr-1'></i>
								Please note that you are still required to set
								your PLUGIN_SDK_PATH environment variable (&
								others) in order for projects to compile.
							</div>
						</div>
						<div className='card-footer'>
							<div className='btn-group'>
								<Link
									to='https://github.com/juicermv/plugin-sdk/releases/latest/download/release.zip'
									className='btn btn-outline-primary bi bi-download'
								></Link>
								<Link
									to='https://github.com/DK22Pac/Plugin-SDK'
									className='btn btn-outline-primary bi bi-github '
								/>
							</div>
						</div>
					</div>

					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-heart-pulse tw-mr-2'></i>
								AutoHealSA
							</h5>
							<p className='card-subtitle mb-2'>
								A small GTA SA script that provides healing
								behavior similar to GTA V's.
							</p>
						</div>
						<div className='card-footer'>
							<div className='btn-group'>
								<Link
									to='https://github.com/juicermv/AutoHealSA'
									className='btn btn-outline-primary bi bi-github '
								></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
