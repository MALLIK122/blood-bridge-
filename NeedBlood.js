import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NeedBlood.css';

const NeedBlood = () => {
    const navigate = useNavigate();

    return (
            <div className="container">
            <h1 className="text-center">Blood Request</h1> 
            <div className="donor-registration-nav">
                <button className="donor-nav-item active" onClick={() => navigate('/donor-registration')}>Donor Registration</button>
                <button className="donor-nav-item active" onClick={() => navigate('/need-blood')}>Need Blood</button>
                <button className="donor-nav-item active" onClick={() => navigate('/search-donor')}>Search Blood</button>
            </div>

            <div className="need-blood-form">
            <h2>Register as a Blood Receiver</h2>
                <form action="#" method="post">
                    <div className="form-group">
                        <label htmlFor="patientName">Patient Name:</label>
                        <input type="text" id="patientName" name="patientName" placeholder="Patient Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hospitalName">Hospital Name:</label>
                        <input type="text" id="hospitalName" name="hospitalName" placeholder="Hospital Name" required />
                    </div>
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
                        <label htmlFor="units">Units Required:</label>
                        <input type="number" id="units" name="units" placeholder="Number of Units" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="tel" id="contactNumber" name="contactNumber" placeholder="Contact Number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">Reason for Requirement:</label>
                        <textarea id="reason" name="reason" rows="4" placeholder="Reason for Blood Requirement" required></textarea>
                    </div>
                    <button type="submit" className="btn-danger">Submit Request</button>
                </form>
            </div>

            <footer>
                <p>&copy; 2024 BloodBridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default NeedBlood;