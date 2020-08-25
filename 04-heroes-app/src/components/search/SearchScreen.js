import React, { useMemo } from 'react';
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  
  const [ formValues, handleInputChange ] = useForm({
    query: q
  });
  
  const { query } = formValues;
  
  const heroesFiltered = useMemo(() => getHeroesByName(q), [ q ]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ query }`)
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
            (q === '')
            && <div className="alert alert-info">
                  Search a Hero
               </div>
          }
          {
            ( q !== '' && heroesFiltered.length === 0 )
            && <div className="alert alert-danger">
                  No Hero matches your search { q }
               </div>
          }

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
