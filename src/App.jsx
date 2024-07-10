import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./components/Auth/Signup/Signup"
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword"
import Login from "./components/Auth/Login/Login"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Signup/>} />
        <Route path="/login" element={ <Login/>} />
        <Route exact path="/forgot-password" element={ <ForgotPassword/>} />
      </Routes>
    </Router>
  )
}

export default App
