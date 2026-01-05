import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Register from "./pages/register"
import Login from "./pages/Login"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register"/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
