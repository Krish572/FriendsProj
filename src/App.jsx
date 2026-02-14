import {Route, Routes, BrowserRouter} from "react-router-dom"
import './App.css'
import { Home } from "./components/Home"
import { Success } from "./components/Success"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="success" element={<Success/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App
