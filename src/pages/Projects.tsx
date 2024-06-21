import { Link } from 'react-router-dom'
import Panel from '../components/Panel'

export default function Projects() {
	return (
		<>
			<Panel className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-evenly gap-4'>
				<div>
					<h1 className='tw-text-6xl instrument-serif-regular-italic'>
						Other Projects
					</h1>
					<h5>Some things I like to work on during my free time.</h5>
				</div>

				<div className='tw-flex tw-flex-col tw-flex-wrap tw-content-stretch tw-items-baseline tw-justify-evenly gap-4'>
					<div className='card tw-max-w-lg'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-gear-wide-connected tw-mr-2'></i>
								nuMake
							</h5>
							<p className='card-subtitle mb-2 text-body-secondary'>
								An experimental C/C++ build system written in
								Rust.
							</p>

							<p className='card-text'>
								Supports GCC, Clang & MSVC. GPS Redux,
								AutoHealSA & my PluginSDK builds already utilize
								it!
							</p>
							<div className='btn-group'>
								<Link
									to='https://github.com/juicermv/numake'
									className='btn btn-outline-secondary bi bi-github'
								/>
							</div>
						</div>
					</div>

					<div className='card tw-max-w-lg'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-heart-pulse tw-mr-2'></i>
								AutoHealSA
							</h5>
							<p className='card-text'>
								A small GTA SA script that provides healing
								behavior similar to GTA V's.
							</p>
							<div className='btn-group'>
								<Link
									to='https://github.com/juicermv/AutoHealSA'
									className='btn btn-outline-secondary bi bi-github '
								></Link>
							</div>
						</div>
					</div>

					<div className='card tw-max-w-lg'>
						<div className='card-body'>
							<h5 className='card-title'>
								<i className='bi bi-code tw-mr-2'></i>
								PluginSDK Builds
							</h5>
							<p className='card-subtitle mb-2 text-body-secondary'>
								Prebuilt PluginSDK libraries for MSVC and MinGW.
								Originally by DK22Pac, modified for nuMake by
								me.
							</p>

							<p className='card-text text-warning-emphasis tw-underline'>
								<div className='mb-2'>
									Please note that you are still required to
									set your PLUGIN_SDK_PATH environment
									variable (& others) in order for some
									projects to compile.
								</div>
								<div>
									For some projects, the expected directory
									structure of PLUGIN_SDK_DIR may differ than
									what is provided. In that case, simply copy
									the directories under the lib and src
									directories to lib & src's parent directory.
								</div>
							</p>
							<div className='btn-group'>
								<Link
									to='https://github.com/juicermv/plugin-sdk/releases/latest/'
									className='btn btn-success bi bi-download'
								></Link>
								<Link
									to='https://github.com/juicermv/Plugin-SDK'
									className='btn btn-outline-secondary bi bi-github '
								/>
							</div>
						</div>
					</div>
				</div>
			</Panel>
		</>
	)
}
