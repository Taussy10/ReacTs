import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {  TestContextProvider } from './Components/Context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* provide the provider */}
    <TestContextProvider >
    <App />
    </TestContextProvider>
  </StrictMode>,
)
