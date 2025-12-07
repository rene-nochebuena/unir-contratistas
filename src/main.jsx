import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContractorDashboard from "./ContractorDashboard.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContractorDashboard />
  </StrictMode>,
)
