import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>My Home Page</h1>} />

      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
