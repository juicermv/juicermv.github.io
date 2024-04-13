import sc3 from '../assets/sc3c.png'
import sc2 from '../assets/sc2c.png'
import sc1 from '../assets/sc1c.png'

export default function GPS() {
	return (
		<>
			<div className='p-4 tw-flex tw-flex-row tw-flex-wrap text-bg-body bg-body tw-items-center tw-justify-between gap-4'>
				<div className='tw-flex tw-flex-col tw-content-stretch text-center tw-m-auto'>
					<h1>
						<i className='bi bi-car-front-fill tw-mr-2'></i>
						SA GPS Redux
					</h1>
					<span className='text-wrap'>
						The definitive GPS mod for Grand Theft Auto: San
						Andreas. <br /> Providing full navigation both for
						mission objectives and the player's waypoint.
					</span>
					<div className='btn-group tw-mt-4 tw-mx-auto'>
						<a
							href='https://github.com/juicermv/GTA-GPS-Redux/releases/latest/download/GPS_Redux.zip'
							className='btn btn-outline-primary bi bi-download '
						></a>
						<a
							href='https://github.com/Juicermv/GTA-GPS-Redux'
							className='btn btn-outline-primary bi bi-github '
						></a>
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
								src={sc2}
								className='card-img'
								alt="GTA SA's Radar, showing a blue marker, signifying a friendly mission NPC, with a blue navigation route leading to it."
							/>
						</div>
						<div className='card'>
							<img
								src={sc3}
								className='card-img'
								alt="GTA SA's Radar, showing a yellow mission objective marker with a yellow navigation route leading to it."
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}