import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Navbar from './Navbar'
import { UserProvider } from './context/UserProvider'

const MainApp = () => {
  return (
    <UserProvider>
      <div>MainApp</div>
      <hr />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </UserProvider>
  )
}

export default MainApp
