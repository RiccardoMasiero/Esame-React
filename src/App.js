import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

import { Home } from './pages/Home'
import { About } from './pages/About';


function Main() {
  return (
    <>
        <div>
          <nav>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
          </nav>
          <Outlet />
        </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
