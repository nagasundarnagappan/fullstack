import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../services/auth";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async () => {
    const form = {
      email: email,
      password: password
    };

    try {
      const res = await signIn(form);
      sessionStorage.setItem('token', res.data.token);
      navigate('/admindashboard', { state: { email: email } });
    } catch (err) {
      console.error("Sign-in failed:", err.response ? err.response.data : err.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mydiv">
      <div className="container-login">
        <div className="left-container">
          <div className="login-left-container">
            <div className="login-left-container-h2">
              <h2>Login As Admin</h2>
              {/* <p><Link to={`/adminlogin`}> Or Login as Admin</Link></p> */}
            </div>
            <div className="login-info">
              <input type="email" className="login-username-input" placeholder="Email" value={email} onChange={handleEmailChange}></input>
              <input type="password" className="login-email-input" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
              {/* <p>Don't have an account? </p><Link to={`/register`} className="Register-link">Register</Link> */}
              <button className="login-button" onClick={handleFormSubmit}>Login</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AdminLogin;
