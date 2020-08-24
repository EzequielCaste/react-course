import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher( publisher );
  //console.log(heroes);
  return (
    <div className="card-columns">
      <ul>
        {
          heroes.map( hero => {
            return <HeroCard 
            key={ hero.id }
            {...hero }
            />           
            
          })
        }
      </ul>
    </div>
  )
}
