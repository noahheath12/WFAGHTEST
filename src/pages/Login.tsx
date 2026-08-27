import { useState } from 'react'
import './Login.css'

function Login() {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    // TODO: Implement authentication logic
    console.log('Form submitted', { email, password })
  }

  return (
    <div className="page-container login-page">
      <div className="login-wrapper">
        <div className="login-container">
          <h1>{isLogin ? 'Login' : 'Create Account'}</h1>
          <p className="login-subtitle">
            {isLogin
              ? 'Access your Wallace Foundation account'
              : 'Join The Wallace Foundation community'
            }
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-link">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="cta-button submit-btn">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="form-divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              Continue with Google
            </button>
            <button className="social-btn facebook">
              Continue with Facebook
            </button>
          </div>

          <p className="toggle-form">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-btn"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>

        <div className="login-benefits">
          <h2>Member Benefits</h2>
          <ul>
            <li>
              <span className="benefit-icon">✓</span>
              Track your donations and impact
            </li>
            <li>
              <span className="benefit-icon">✓</span>
              Early access to event tickets
            </li>
            <li>
              <span className="benefit-icon">✓</span>
              Exclusive member updates
            </li>
            <li>
              <span className="benefit-icon">✓</span>
              Volunteer opportunity notifications
            </li>
            <li>
              <span className="benefit-icon">✓</span>
              Access to member-only resources
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login
