import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Raymond', 'Seinfeld', 'The Office']);

  // const handleAdd = () => {  
  //  //setCategories([...categories,'New Girl'])
  //  setCategories( prev => [...prev, "New Girl"])
  // }
  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

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