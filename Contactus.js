import React from 'react';
import '../App.css'; // Update the path to point to the correct location

function ContactUs() {
  return (
    <div className="container">
      <h1 className="text-center">Contact Us</h1>

      <div className="contact-content">
        <p>
          We'd love to hear from you! If you have any questions, feedback, or need assistance, please don't hesitate to reach out.
        </p>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Send Message</button>
          </form>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 BloodBridge. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;