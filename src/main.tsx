import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'
import './scss/main.scss'

document.documentElement.setAttribute(
	'data-bs-theme',
	window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
