import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchDonor.css';

const SearchDonor = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="text-center">Search Blood</h1>

            <div className="donor-registration-nav">
                <button className="donor-nav-item active" onClick={() => navigate('/donor-registration')}>Donor Registration</button>
                <button className="donor-nav-item active" onClick={() => navigate('/need-blood')}>Need Blood</button>
                <button className="donor-nav-item active" onClick={() => navigate('/search-donor')}>Search Blood</button>
            </div>

            <div className="search-blood-form">
                <h2>Search Donor Availability</h2>
                <form action="#" method="get">
                    <div className="form-group">
                        <label htmlFor="bloodGroup">Blood Group:</label>
                        <select id="bloodGroup" name="bloodGroup" required>
                            <option value="">Select Blood</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" placeholder="Enter Location" required />
                    </div>
                    <button type="submit" className="btn-danger">Search</button>
                </form>
            </div>

            <div className="search-results">
            </div>

            <footer>
                <p>&copy; 2024 BloodBridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default SearchDonor;