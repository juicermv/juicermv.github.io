import sc3 from '../assets/sc3c.png'
import sc2 from '../assets/sc2c.png'
import sc1 from '../assets/sc1c.png'
import { Link } from 'react-router-dom'
import Panel from '../components/Panel'

export default function GPS() {
	return (
		<>
			<Panel className='p-4 tw-flex tw-flex-col text-bg-body bg-body tw-items-center tw-justify-evenly tw-gap-8'>
				<div>
					<h1 className='tw-text-8xl instrument-serif-regular border-2 border-top-0 border-start-0 border-end-0 border-primary'>
						San Andreas: GPS
					</h1>
					<h2 className='tw-text-center text-primary tw-font-normal'>
						REDUX
					</h2>
				</div>
				<p className='tw-text-xl tw-text-center'>
					The definitive GPS mod for Grand Theft Auto: San Andreas.
					<br />
					Providing full navigation for both mission objectives and
					the player's waypoint.
				</p>
				<div className='tw-flex tw-flex-row tw-flex-wrap tw-gap-4 tw-items-center tw-justify-center'>
					<div className='card text-danger tw-w-64'>
						<img
							src={sc1}
							className='tw-max-h-full card-img-top'
							alt="GTA SA's Radar, showing a player-set red objective marker, with a navigation route leading to it."
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								Navigate to your waypoint...
							</h5>
						</div>
					</div>
					<div className='card text-warning tw-w-64'>
						<img
							src={sc3}
							className='tw-max-h-full card-img-top'
							alt="GTA SA's Radar, showing a yellow mission objective marker with a yellow navigation route leading to it."
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								..or to a mission destination!
							</h5>
						</div>
					</div>
					<div className='card text-primary tw-w-64'>
						<img
							src={sc2}
							className='tw-max-h-full card-img-top'
							alt="GTA SA's Radar, showing a blue marker, signifying a friendly mission NPC, with a blue navigation route leading to it."
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								Or maybe follow that special someone.
							</h5>
						</div>
					</div>
				</div>
				<div className='btn-group'>
					<Link
						to='https://github.com/juicermv/GTA-GPS-Redux/releases/latest/download/GPS_Redux.zip'
						className='btn btn-success'
					>
						<i className='bi bi-download tw-mr-2'></i>
						Download
					</Link>
					<Link
						to='https://github.com/juicermv/GTA-GPS-Redux'
						className='btn btn-outline-secondary'
					>
						<i className='bi bi-github'></i>
					</Link>
				</div>
			</Panel>
		</>
	)
}
