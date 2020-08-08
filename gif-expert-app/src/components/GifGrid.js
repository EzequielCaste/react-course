import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem'

export const GifGrid =  ({category}) => {

  useEffect( () => {
    getGifs();
  }, [])

  const [images, setImages] = useState([])

  const getGifs = async () => {

    const url = "https://api.giphy.com/v1/gifs/search?q=Seinfeld&limit=10&api_key=Y13YNSxyHCUX3xAYuPwAORkqaVmJhtz1";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })

    setImages(gifs);

  } 

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
              
          {
            images.map( img => (
              <GifGridItem 
              key={img.id} 
              {...img} /> 
            ))
          }      
      </div>
    </>
  )
}
