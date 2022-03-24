import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import MissionStatement from './pages/MissionStatement'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission/statement" element={<MissionStatement />} />
        <Route path="/park/section" element="" />
        <Route path="/poke/card" element="" />
      </Routes>
    </div>
  )
}

export default App
