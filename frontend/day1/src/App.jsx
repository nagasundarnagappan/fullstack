import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Animation } from "./components/ui/Animation"
import LazyLayout from "./components/ui/LazyLayout"
import ForgotPassword from "./pages/auth/ForgotPassword"

const LazyRegister=lazy(() => import('./pages/auth/Register'))
const LazyLogin=lazy(() => import('./pages/auth/Login'))
const LazyForgotPassword=lazy(() => import('./pages/auth/ForgotPassword'))
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/register" element={<LazyLayout component={LazyRegister}/>}/>
      <Route path="/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/forgotpassword" element={<LazyLayout component={LazyForgotPassword}/>}/>
      <Route path="/animation" element={<Animation/>}/>
    </Routes>
  )
}

export default App