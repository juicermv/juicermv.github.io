import sc3 from '../assets/sc3c.png'
import sc2 from '../assets/sc2c.png'
import sc1 from '../assets/sc1c.png'
import { Link } from 'react-router-dom'

export default function GPS() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap-reverse text-bg-body bg-body tw-items-center tw-justify-evenly gap-4'>
				<div className='card-group'>
					<div className='card tw-w-64'>
						<img
							src={sc1}
							className='tw-max-h-full card-img-top'
							alt="GTA SA's Radar, showing a player-set red objective marker, with a navigation route leading to it."
						/>
						<div className='card-footer'>
							<small className='text-body-secondary'>
								Navigating to the player's waypoint in freeroam.
							</small>
						</div>
					</div>
					<div className='card tw-w-64'>
						<img
							src={sc3}
							className='tw-max-h-full card-img-top'
							alt="GTA SA's Radar, showing a yellow mission objective marker with a yellow navigation route leading to it."
						/>
						<div className='card-footer'>
							<small className='text-body-secondary'>
								Driving to the barber's during "Ryder"
							</small>
						</div>
					</div>
					<div className='card tw-w-64'>
						<img
							src={sc2}
							className='tw-max-h-full card-img-top'
							alt="GTA SA's Radar, showing a blue marker, signifying a friendly mission NPC, with a blue navigation route leading to it."
						/>
						<div className='card-footer'>
							<small className='text-body-secondary'>
								Following Sweet during "Sweet & Kendl"
							</small>
						</div>
					</div>
				</div>
				<div className='tw-flex tw-flex-col tw-content-stretch text-center tw-gap-4'>
					<div className='tw-flex-col tw-p-2 tw-flex tw-items-center tw-justify-center'>
						<h1 className='fs-1'>San Andreas: GPS</h1>
						<h1 className='tw-text-xs alert alert-primary tw-p-1.5'>
							<i className='bi bi-car-front-fill tw-mr-1.5' />
							REDUX
						</h1>
					</div>

					<span className='text-wrap fs-5'>
						The definitive GPS mod for Grand Theft Auto: San
						Andreas. <br /> Providing full navigation both for
						mission objectives and the player's waypoint.
					</span>
					<div className='btn-group tw-mx-auto'>
						<Link
							to='https://github.com/juicermv/GTA-GPS-Redux/releases/latest/download/GPS_Redux.zip'
							className='btn btn-outline-primary bi bi-download '
						></Link>
						<Link
							to='https://github.com/juicermv/GTA-GPS-Redux'
							className='btn btn-outline-primary bi bi-github '
						></Link>
					</div>
				</div>
			</div>
		</>
	)
}
