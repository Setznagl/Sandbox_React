import { Link , Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">Movies Lib</Link>
          <Link to="/movie/1">Movies Lib</Link>
          <Link to="/search">Movies Lib</Link>
        </h2>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
