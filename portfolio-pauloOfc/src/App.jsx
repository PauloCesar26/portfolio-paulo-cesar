import { useState } from 'react'
import { Sidebar } from "@/components/ui/sidebar"
import Layout from './components/layout'
import './App.css'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Layout/>
      <Toaster position="bottom-right" richColors/>
    </>
  )
}

export default App
