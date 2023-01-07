import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";
// import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/user/:name" element={<User/>}/>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
