import './App.css'
import 'boxicons'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Education from './Components/Education-Section/Education'
// import {Routes} form 'router'

function App() {

  return (
    <div className={`bg-[#ffffff]`}>
      <Navbar />
      <Header />
      <Education/>
    </div>
  )
}

export default App
