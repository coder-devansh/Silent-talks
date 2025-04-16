import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In:', formData);
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container d-flex justify-content-center align-items-center py-5"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <div className="card p-4 shadow-lg" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="text-center mb-4">Sign In to SignKit</h2>
        <p className="text-center text-muted mb-4">Access your account securely.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
        <p className="text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p className="text-center">
          New to SignKit? <Link to="/sign-up">Create an Account</Link>
        </p>
      </div>
    </motion.div>
  );
}

export default SignIn;