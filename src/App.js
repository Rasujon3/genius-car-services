import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
