import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Filter from "./components/Filter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Community from "./components/NestedRoutingComponents/Community";
import MyProjects from "./components/NestedRoutingComponents/MyProjects";
import Services from "./components/NestedRoutingComponents/Services";
import User from "./components/User";
// import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/contactUs/" element={<ContactUs />}>
          <Route path="communities" element={<Community />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/*" element={<Navigate to={"/"} />} />
        {/* <Route path="/*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
