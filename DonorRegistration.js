import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DonorRegistration.css'; // Import the CSS file

const DonorRegistration = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="text-center">New Donor Registration</h1>

            <div className="donor-registration-nav">
                <button className="donor-nav-item active" onClick={() => navigate('/donor-registration')}>Donor Registration</button>
                <button className="donor-nav-item active" onClick={() => navigate('/need-blood')}>Need Blood</button>
                <button className="donor-nav-item active" onClick={() => navigate('/search-donor')}>Search Blood</button>
            </div>

            <div className="donor-form">
                <h2>Register as a Blood Donor</h2>
                <form action="#" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fatherName">Father Name:</label>
                        <input type="text" id="fatherName" name="fatherName" placeholder="Father Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">D.O.B:</label>
                        <input type="date" id="dob" name="dob" placeholder="YYYY-MM-DD" required />
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
                        <label htmlFor="country">Country:</label>
                        <select id="country" name="country" required>
                            <option value="">Select Country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                            <option value="Australia">Australia</option>
                            <option value="India">India</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Japan">Japan</option>
                            <option value="China">China</option>
                            <option value="Brazil">Brazil</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" placeholder="State" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" placeholder="City" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="area">Area:</label>
                        <input type="text" id="area" name="area" placeholder="Area" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" placeholder="Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode">Pincode:</label>
                        <input type="text" id="pincode" name="pincode" placeholder="Pincode" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact1">Contact 1:</label>
                        <input type="tel" id="contact1" name="contact1" placeholder="Contact Number 1" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact2">Contact 2:</label>
                        <input type="tel" id="contact2" name="contact2" placeholder="Contact Number 2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact3">Contact 3:</label>
                        <input type="tel" id="contact3" name="contact3" placeholder="Contact Number 3" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bodyweight">Body Weight:</label>
                        <input type="text" id="bodyweight" name="bodyweight" placeholder="Body Weight" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailid">Email ID:</label>
                        <input type="email" id="emailid" name="emailid" placeholder="Email ID" required />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="voluntaryDonor" name="voluntaryDonor" />
                        <label htmlFor="voluntaryDonor">Voluntary Donor</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newDonor">New Donor:</label>
                        <select id="newDonor" name="newDonor" required>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Upload Photo:</label>
                        <input type="file" id="photo" name="photo" accept="image/*" required />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="eligibility" name="eligibility" />
                        <label htmlFor="eligibility">I have read the eligibility criteria and confirm that I am eligible to donate blood.</label>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="terms" name="terms" />
                        <label htmlFor="terms">I agree to the Term and Conditions and consent to have my contact and donor information published to the potential blood recipients.</label>
                    </div>
                    <button type="submit" className="btn-danger">Register</button>
                </form>
            </div>

            <footer>
                <p>&copy; 2024 BloodBridge. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default DonorRegistration;