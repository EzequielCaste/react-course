import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: 'Victor',
    email: 'vic@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if ( isFormValid() ) {
      console.log("Formulario Valido");
    }


  }

  const isFormValid = () => {   

    if ( name.trim().length === 0) {
      console.log("Name is required");
      return false
    } else if ( !validator.isEmail(email) ) {
      console.log('Email is not valid');
      return false
    } else if ( password !== password2 || password.length < 5) {
      console.log('Password should be at least 6 character and match');
      return false
    }

    return true;
  }



  return (
    <div>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={ handleRegister }>

      <div className="auth__alert-error">Hola</div>

      <input 
          value={name}
          onChange={ handleInputChange }
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input 
          value={email}
          onChange={ handleInputChange }
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input 
          value={password}
          onChange={ handleInputChange }
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input         
          value={password2}
          onChange={ handleInputChange }
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />

        <button 
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>

     

       
      <Link className="link" to="/auth/login">
        Already registered?
      </Link>

      </form>
    </div>
  )
}
