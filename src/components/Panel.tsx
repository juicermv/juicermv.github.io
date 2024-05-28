import { AnimatePresence, m } from 'framer-motion';
import { Children } from 'react';

interface PanelProps {
	children?: undefined | string | JSX.Element | JSX.Element[];
	className?: undefined | string;
}

export default function Panel({ children, className }: PanelProps) {
	return (
		<>
			<m.div
				className={
					'panel' + (className === undefined ? '' : ' ' + className)
				}
			>
				{Children.map(children, (child) => {
					return child;
				})}
			</m.div>
		</>
	);
}
