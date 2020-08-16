import React, { useLayoutEffect, useState, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './layout.css'

export const Layout = () => {

  const { counter, increment } = useCounter(1); 

  const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
  
  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize( pTag.current.getBoundingClientRect() )
  }, [quote]);

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr/>

      <blockquote className="blockquote text-right">
        <p 
          className="mb-0"
          ref={ pTag }
        >
          { quote }
        </p>
        
      </blockquote>

      <pre>
        { JSON.stringify(boxSize) }
      </pre>
    
      <button 
        className="btn btn-primary"
        onClick={ increment }
      >
        Next Quote
      </button>     

      
    </div>
  )
}
