import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./components/Auth/Signup/Signup"
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword"
import Login from "./components/Auth/Login/Login"
import { Container } from "react-bootstrap"

function App() {

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{background: "#0005", height: "100vh", color: "white"}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
