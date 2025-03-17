import React from 'react';

function About() {
  return (
    <div className="container">
      <h1 className="text-center">About BloodBridge</h1>

      <div className="about-content">
        <p>
          Welcome to BloodBridge, an online platform dedicated to connecting blood donors with those in need. Our mission is to ensure a readily available and safe supply of blood for patients requiring transfusions.
        </p>
        <p>
          BloodBridge was founded with the vision of streamlining the blood donation process and making it more accessible to everyone. We understand the critical importance of timely blood availability and are committed to bridging the gap between donors and recipients.
        </p>
        <p>
          Our platform provides a user-friendly interface for donors to register and for hospitals and individuals to request blood. We strive to create a reliable and efficient system that saves lives.
        </p>
        <p>
          We are passionate about promoting blood donation awareness and encouraging individuals to become regular donors. With your support, we can make a significant impact on the lives of those in need.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Compassion:</strong> We are driven by empathy and a desire to help others.</li>
          <li><strong>Efficiency:</strong> We aim to provide a seamless and effective blood donation process.</li>
          <li><strong>Reliability:</strong> We are committed to ensuring a stable and secure blood supply.</li>
          <li><strong>Transparency:</strong> We maintain open communication and accountability in our operations.</li>
        </ul>

        <h2>Get Involved</h2>
        <p>
          Join us in our mission to save lives. Whether you are a donor, a healthcare professional, or simply someone who wants to make a difference, there are many ways to get involved.
        </p>
        <p>
          Contact us today to learn more about how you can contribute to BloodBridge.
        </p>
      </div>

      <footer>
        <p>&copy; 2024 BloodBridge. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;