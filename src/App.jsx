import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/header/NavBar";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import ContactUs from "./components/pages/ContactUs";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/works" element={<div>Works Page</div>} />
        <Route path="/about-me" element={<div>About Me Page</div>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
