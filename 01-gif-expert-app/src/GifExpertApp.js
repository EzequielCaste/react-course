import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({ defaultCategories = []}) => {

  const [categories, setCategories] = useState( defaultCategories );

  return(
    <>
      <h2>Search Gifs</h2>
      <AddCategory setCategories={ setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid 
              category={category} 
              key={category}
              />
            )
          )
        }
      </ol>
    </>
  )
}