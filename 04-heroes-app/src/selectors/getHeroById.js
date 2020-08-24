import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroById = ( heroId ) => {
  
  return heroes.find( hero => hero.id === heroId );

}
