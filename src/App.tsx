import './App.css'
import { ReactNode, useState } from 'react'

// Bootstrap
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'

// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// Fonts
import '@fontsource/inter'
import '@fontsource-variable/jetbrains-mono'

function App() {
	const [page, setPage] = useState('')

	function getPage(name: string): ReactNode {
		switch (name.toLowerCase()) {
			case 'home':
				return <Home />
			case 'projects':
				return <Projects />
			default:
				return <Home />
		}
	}

	return (
		<>
			<div className='tw-flex tw-h-full tw-flex-col tw-justify-between tw-content-stretch'>
				<NavBar
					title='Juicermv'
					_default='Home'
					source={['Home', 'Projects']}
					onItemClicked={(item) => {
						setPage(item.toLowerCase())
					}}
					onTitleClicked={() => {}}
				/>
				<div className='tw-w-full tx-h-full'>{getPage(page)}</div>
				<Footer />
			</div>
		</>
	)
}

export default App
