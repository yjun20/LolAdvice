import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { HashRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'
import ChampCamile from './ChampCamile.jsx'
import ChampAatrox from './ChampAatrox.jsx'
import ChampMordekaiser from './ChampMordekaiser.jsx'

function App() {
  return (
    <Router basename="/LolAdvice">
      {/* 메인 화면 */}
  

      {/* 라우트 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChampCamile" element={<ChampCamile />} />
        <Route path="/ChampAatrox" element={<ChampAatrox />} />
        <Route path="/ChampMordekaiser" element={<ChampMordekaiser />} />
      </Routes>
    </Router>
  );
}
export default App
