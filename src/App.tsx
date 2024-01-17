import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ReactNode, useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const [page, setPage] = useState('')

  function getPage(name: string) : ReactNode{
    switch (name.toLowerCase()) {
      case 'home':
        return <Home/>
      case 'projects':
        return <Projects />
      default: 
        return <Home/>
    }
  }

  return (
    <>
      <div className='tw-flex tw-h-full tw-flex-col tw-justify-between tw-content-stretch'>
        <NavBar title='Juicermv' _default="Home" source={['Home', 'Projects']} onItemClicked={ (item) => {setPage(item.toLowerCase())}} onTitleClicked={()=> {}}/>
        <div className='tw-w-full tx-h-full'>
          {
            getPage(page)
          }
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
