import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import type IScheduleService from './Services/IScheduleService.ts'
import WebApiScheduleService from './Services/WebApiScheduleService.ts'

let scheduleService: IScheduleService = new WebApiScheduleService(
  // todo: replace with values from config
  'http://localhost:3000/api/schedules',
  "",
  "");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App {...scheduleService} />
  </StrictMode>,
)
