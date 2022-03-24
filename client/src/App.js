import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission/statement" element="" />
        <Route path="/park/section" element="" />
        <Route path="/poke/card" element="" />
      </Routes>
    </div>
  )
}

export default App
