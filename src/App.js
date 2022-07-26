import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';



function App() {
  return (
    <div >
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
