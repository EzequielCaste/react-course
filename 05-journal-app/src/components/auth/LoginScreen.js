import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    email: 'eze@gmail.com',
    password: 123456
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password) )
  }

  return (
    <div>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={ handleLogin }>

        <input 
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
        <input 
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          value={ password }
          onChange={ handleInputChange }
        />

        <button 
          type="submit"
          className="btn btn-primary btn-block"
        >
          Login
        </button>

     

        <div className="auth__social-networks">
          <p>
            Login with Social Networks
          </p>            
            <div className="google-btn">
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          
        </div>

      <Link className="link" to="/auth/register">

        Create new account
      </Link>

      </form>
    </div>
  )
}
