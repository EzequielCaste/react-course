import React, {useState} from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Raymond', 'Seinfeld', 'The Office']);

  const handleAdd = () => {   

   //setCategories([...categories,'New Girl'])
   setCategories( prev => [...prev, "New Girl"])


  }
  return(
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>
        Agregar
      </button>

      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>


    </>
  )
}