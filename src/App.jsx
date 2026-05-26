import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import ColorsPage from './pages/ColorsPage'
import TypographyPage from './pages/TypographyPage'
import SpacingPage from './pages/SpacingPage'
import ButtonsPage from './pages/ButtonsPage'
import FormsPage from './pages/FormsPage'
import CardsPage from './pages/CardsPage'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <div className="app">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Navigate to="/colors" replace />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/spacing" element={<SpacingPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
      </main>
    </div>
  )
}
