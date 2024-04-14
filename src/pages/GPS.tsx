import sc3 from '../assets/sc3c.png'
import sc2 from '../assets/sc2c.png'
import sc1 from '../assets/sc1c.png'
import { Link } from 'react-router-dom'

interface GPSProps {
	setCurrent: (current: string) => void
}
export default function GPS({setCurrent}:GPSProps) {
	setCurrent('GPS')
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-evenly gap-4'>
				<div className='tw-flex tw-flex-col tw-content-stretch text-center'>
					<div className='tw-flex-col tw-p-2 tw-flex tw-items-center tw-justify-center'>
						<h1>
						San Andreas: GPS
						</h1>
						<h1 className='tw-text-xs rounded border border-primary tw-p-1 text-primary'><i className='bi bi-car-front-fill tw-mr-1'/>REDUX</h1>
					</div>
					
					<span className='text-wrap'>
						The definitive GPS mod for Grand Theft Auto: San
						Andreas. <br /> Providing full navigation both for
						mission objectives and the player's waypoint.
					</span>
					<div className='btn-group tw-mt-4 tw-mx-auto'>
						<Link
							to='https://github.com/juicermv/GTA-GPS-Redux/releases/latest/download/GPS_Redux.zip'
							className='btn btn-outline-primary bi bi-download '
						></Link>
						<Link
							to='https://github.com/Juicermv/GTA-GPS-Redux'
							className='btn btn-outline-primary bi bi-github '
						></Link>
					</div>
				</div>
				<div className='tw-flex tw-flex-row tw-justify-center gap-4 tw-items-center tw-flex-wrap tw-mt-4'>
						<div className='card'>
							<img
								src={sc1}
								className='card-img'
								alt="GTA SA's Radar, showing a player-set red objective marker, with a navigation route leading to it."
							/>
						</div>
						<div className='card'>
							<img
								src={sc3}
								className='card-img'
								alt="GTA SA's Radar, showing a yellow mission objective marker with a yellow navigation route leading to it."
							/>
						</div>
						<div className='card'>
							<img
								src={sc2}
								className='card-img'
								alt="GTA SA's Radar, showing a blue marker, signifying a friendly mission NPC, with a blue navigation route leading to it."
							/>
						</div>
					</div>
			</div>
		</>
	)
}
