import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import Services from './Pages/Services';
import Admin from './Pages/Admin';
import DonorRegistration from './Components/DonorRegistration';
import NeedBlood from './Components/NeedBlood';
import SearchDonor from './Components/SearchDonor';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/" style={{ color: 'red', fontWeight: 'bold' }}>BloodBridge</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Routes>
        <Route path="/donor-registration" element={<DonorRegistration />} />
        <Route path="/need-blood" element={<NeedBlood />} />
        <Route path="/search-donor" element={<SearchDonor />} />
      </Routes>
    </Router>
  );
}

export default App;