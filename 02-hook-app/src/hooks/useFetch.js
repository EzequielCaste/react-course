import React, { useState, useEffect, useRef } from 'react'


export const useFetch = ( url ) => {

  const [state, setState] = useState({ data: null, loading: true, error: null });

  const isMounted = useRef(true);

  useEffect( () => {

    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect( () => {
    setState({ loading: true, data: null, error: null })
    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        if( isMounted.current ){
          setState({
             loading: false,
             error: null,
             data: data
           })       
        } else {
          console.log("setstate no se llma")
        }        
      })
  }, [url]);

  return state;
}
