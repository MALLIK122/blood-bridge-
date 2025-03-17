import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DonorRegistration from '../Components/DonorRegistration';
import NeedBlood from '../Components/NeedBlood';
import SearchDonor from '../Components/SearchDonor';

const Home = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center">Online Blood Bank Management System</h1>

                <div className="row">
                    <div className="col-md-4">
                        <header className="card">
                            <h2 className="card-title">Donor Registration</h2>
                            <p className="card-text">Have you at anytime witnessed a relative of yours or a close friend searching frantically for a blood donor, when blood banks say out of stock, the donors in mind are out of reach and the time keeps ticking? This thought laid our foundation.</p>
                            <Link to="/donor-registration" className="btn btn-danger">Register Now</Link>
                        </header>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="card-title">Need Blood</h2>
                            <p className="card-text">Every 2 seconds someone needs blood. Your blood helps more than one life at a time. Accident victims, premature babies, patients undergoing major surgeries require whole blood, where your blood after testing is used directly.</p>
                            <Link to="/need-blood" className="btn btn-danger">Request Blood</Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <h2 className="card-title">Search Donor</h2>
                            <p className="card-text">Some people who have serious injuries they need blood transfusions to replace blood lost during the injury. Regular blood donors ensure that a safe and plentiful supply of blood is available whenever and wherever it is needed.</p>
                            <Link to="/search-donor" className="btn btn-danger">Search Now</Link>
                        </div>
                    </div>
                </div>

                <div className="blood-camps">
                    <h2 className="text-center">Blood Donor Camps</h2>
                    <div className="d-flex">
                        <img src="https://images.hindustantimes.com/img/2021/09/10/1600x900/bfb04ab4-126d-11ec-8f84-d3748427d977_1631302621025.jpg" alt="Blood Camp 1" />
                        <img src="https://gscbt.net/wp-content/uploads/2020/02/donation-camp.jpg" alt="Blood Camp 2" />
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/01/29/783772-blood-donation-camp-03.jpg" alt="Blood Camp 3" />
                    </div>
                    <div className="text-center">
                        <p>The blood you donate gives someone another chance at life.</p>
                        <p>GIVE THE GIFT OF LIFE DONATE BLOOD</p>
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 BloodBridge. All rights reserved.</p>
            </footer>

            <Routes>
                <Route path="/donor-registration" element={<DonorRegistration />} />
                <Route path="/need-blood" element={<NeedBlood />} />
                <Route path="/search-donor" element={<SearchDonor />} />
            </Routes>
        </div>
    );
}

export default Home;