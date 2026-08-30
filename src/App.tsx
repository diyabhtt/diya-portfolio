import { Navigate, Route, Routes } from 'react-router-dom'
import { GameWorld } from './components/GameWorld'
import { ResumePage } from './pages/ResumePage'
import { ProjectDetail } from './projects/ProjectDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GameWorld />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
