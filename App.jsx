import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import HomepageContent from './components/HomepageContent'
import HomepageComponent from './components/HomepageComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mobile from './components/Mobile';
import HomeAppliances from './components/HomeAppliances';
import Fashion from './components/Fashion';
import Add from './components/Add';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
    <br></br>
      <Routes>
        <Route path = "/" element = {<HomepageContent/>} />
        <Route path = "/Mobile" element = {<Mobile/>} />
        <Route path = "/HomeAppliances" element = {<HomeAppliances/>} />
        <Route path = "/Fashion" element = {<Fashion/>} />
        <Route path = "/Add" element = {<Add/>} />
      </Routes>
    </Router>
  </>
  )
}

export default App
