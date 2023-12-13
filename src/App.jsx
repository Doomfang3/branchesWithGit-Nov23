import { Route, Routes } from "react-router-dom";
// CAN YALL SEE THIS????
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>My Home Page</h1>} />
        {/* RAGNAR RULES ALL!!!! */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
