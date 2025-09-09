import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProtectDashboard from './components/ProtectDashboard.jsx'
import FormLayout from './layout/FormLayout.jsx'
import Login from './pages/Login.jsx'
import Registrasi from './pages/Registrasi.jsx'
import Dashboard from './pages/Dashboard.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route element={<FormLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='registrasi' element={<Registrasi />} />
      </Route>

      <Route path='dashboard' element={
        <ProtectDashboard>
          <Dashboard />
        </ProtectDashboard>
        } />
    </Routes>
  </BrowserRouter>,
)
