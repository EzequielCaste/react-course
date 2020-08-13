import React, { useState, useEffect } from 'react'


export const useFetch = ( url ) => {

  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect( () => {

    setState({ loading: true, data: null, error: null })
    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        setState({
          loading: false,
          error: null,
          data: data
        })
      })
  }, [url]);

  return state;
}
