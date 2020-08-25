import React, { useContext } from 'react'
import { types } from '../../types/types'
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({ history }) => {
  
  const { dispatch } = useContext(AuthContext);

  const handleClick = (user) => { 

    const lastPath = localStorage.getItem('lastPath') || "/"

    dispatch({
      type: types.login,
      payload: {     
        name: "Ezequiel"
      }
    });

    history.replace(lastPath)

    
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>

      <button
        className="btn btn-primary"
        onClick={ handleClick }
      
      >

      Login
      </button>
    </div>
  )
}
