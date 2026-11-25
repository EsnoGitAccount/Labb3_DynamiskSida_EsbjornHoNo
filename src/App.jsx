import './App.css'
import { Route, Routes } from 'react-router'
import AboutPage from './pages/AboutPage'
import CurriculumVitaePage from './pages/CurriculumVitaePage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import Header from './components/Header'
import EasterEggTager from './components/EasterEggTager'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Labb3_DynamiskSida_EsbjornHoNo/" element={<HomePage/>}/>
        <Route path= "/Labb3_DynamiskSida_EsbjornHoNo/about" element={<AboutPage/>}/>
        <Route path= "/Labb3_DynamiskSida_EsbjornHoNo/curriculumvitae" element={<CurriculumVitaePage/>}/>
        <Route path= "/Labb3_DynamiskSida_EsbjornHoNo/portfolio" element={<PortfolioPage/>}/>
      </Routes>
      <EasterEggTager />
    </>
  )
}

export default App
