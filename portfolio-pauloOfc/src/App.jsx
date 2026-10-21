import { MotionConfig } from "motion/react";
import { Toaster } from 'sonner'
import Layout from './components/layout'
import './App.css'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Layout/>
      <Toaster position="bottom-right" richColors/>
    </MotionConfig>
  )
}

export default App
