import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { GifGridItem } from './GifGridItem'
//import { getGifs } from '../helpers/getGifs'

export const GifGrid =  ({category}) => {

  const { data, loading } = useFetchGifs();

  
  // const [images, setImages] = useState([])

  // useEffect( () => {
  //   getGifs(category)
  //     .then( setImages ) // same as img => setImages( img )
  // }, [category])
  

  return (
    <>
      <h3>{category}</h3>
      { loading ? "Cargando" : "Datos cargados"}
      {/* <div className="card-grid">
              
          {
            images.map( img => (
              <GifGridItem 
              key={img.id} 
              {...img} /> 
            ))
          }      
      </div> */}
    </>
  )
}
