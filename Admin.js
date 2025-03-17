import React from 'react';

function Admin() {
  return (
    <div className="container">
      <h1 className="text-center">Admin Login</h1>

      <div className="admin-login-form">
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn btn-danger">Login</button>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 BloodBridge. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Admin;