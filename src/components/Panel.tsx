import { m } from 'framer-motion'
import NavBar from './NavBar'
import { Router } from '@remix-run/router'
import { Children } from 'react'

interface PanelProps {
	children?: undefined | string | JSX.Element | JSX.Element[]
	className?: undefined | string
}

export default function Panel({ children, className }: PanelProps) {
	return (
		<>
			<div className='tw-w-full tw-my-auto tw-flex tw-flex-col tw-justify-center'>
				<div
					className={
						'panel' +
						(className === undefined ? '' : ' ' + className)
					}
				>
					{Children.map(children, (child) => {
						return child
					})}
				</div>
			</div>
		</>
	)
}
