import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {

  const heroesFiltered = heroes;

  const [ formValues, handleInputChange ] = useForm({
    query: ''
  });

  const { query } = formValues;


  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
  }

  return (
    <div>
      <h1>Search</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
        <h4>Search Form</h4>
        <hr/>

        <form onSubmit={ handleSearch }>
          <input 
            name="query"
            type="text"
            placeholder="Find your hero"
            className="form-control"  
            onChange={ handleInputChange }
            value={ query }
          />

          <button
            type="submit"
            className="btn btn-block m-1 btn-outline-primary"
          >
              Search...
          </button>
        </form>  
        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr/>

          {
            heroesFiltered.map( hero => {
              return <HeroCard 
                key={ hero.id}
                {...hero}
              />
            })


          }

        </div>
      </div>
    </div>
  )
}
