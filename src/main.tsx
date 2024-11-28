import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {  TestContextProvider } from './Components/Context/Context.tsx'
import { TryProvider } from './Components/Context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* // 3. Provide context to the app (in main.tsx)*/}
    <TryProvider>
    <TestContextProvider >
    <App />
    </TestContextProvider>
    </TryProvider>
  </StrictMode>,
)
