import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>My Home Page</h1>} />
        {/* RAGNAR RULES ALL!!!! */}
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
