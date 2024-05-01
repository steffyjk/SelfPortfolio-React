import logo from './logo.svg';
import './App.css';
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
