import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-ejemplos/MultipleCustomHooks'
import '../02-useEffect/effects.css'

export const ExampleRef = () => {

  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>Example Ref</h1>
      <hr/>

      { show && <MultipleCustomHooks />  }

      <button
        className="btn btn-primary mt-5"
        onClick={ () => {
          setShow( !show )
        } }
      >Show / Hide</button>

    </div>
  )
}
