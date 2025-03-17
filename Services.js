import React from 'react';

function Services() {
  return (
    <div className="container">
      <h1 className="text-center">Our Services</h1>

      <div className="services-content">
        <section className="service">
          <h2>Donor Registration</h2>
          <p>
            Register as a blood donor and contribute to saving lives. Our easy registration process helps us match you with patients in need.
          </p>
          <p>
            <a href="/donor-registration" className="btn btn-danger">Register Now</a>
          </p>
        </section>

        <section className="service">
          <h2>Blood Request</h2>
          <p>
            If you or someone you know needs blood, you can submit a request through our platform. We will connect you with available donors and blood banks.
          </p>
          <p>
            <a href="/need-blood" className="btn btn-danger">Request Blood</a>
          </p>
        </section>

        <section className="service">
          <h2>Blood Bank Directory</h2>
          <p>
            Find a list of blood banks in your area. Our directory provides contact information and locations to help you find the nearest blood bank.
          </p>
          <p>
            <a href="/blood-bank-directory" className="btn btn-danger">View Directory</a>
          </p>
        </section>

        <section className="service">
          <h2>Blood Donation Camps</h2>
          <p>
            Stay informed about upcoming blood donation camps in your community. Join us in organizing or participating in these life-saving events.
          </p>
          <p>
            <a href="/blood-donation-camps" className="btn btn-danger">Upcoming Camps</a>
          </p>
        </section>

        <section className="service">
          <h2>Educational Resources</h2>
          <p>
            Learn more about blood donation, its benefits, and the importance of regular donations. Access educational materials and FAQs to stay informed.
          </p>
          <p>
            <a href="/educational-resources" className="btn btn-danger">Learn More</a>
          </p>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 BloodBridge. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;