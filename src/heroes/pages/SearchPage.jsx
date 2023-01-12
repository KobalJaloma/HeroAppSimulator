
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks'
import { getHerosByName } from '../helpers'
import { HeroCard } from '../components'
import queryString from 'query-string'

export const SearchPage = () => {
  const find = false;

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search)
  
  const heroes = getHerosByName(q);
  
  const { onInputChange, searchText} = useForm({
    searchText: ''
  });

  const showError = (q.length != 0) && (heroes.length === 0);

  const onSearchSummit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return; 
    
    navigate(`?q=${ searchText.toLowerCase().trim() }`);
    
  }


  return (
    <>
      <div className="col mt-3">

        <div className="col-5">
          <h4>Searching</h4>
          <hr/>

          <form className="form-" onSubmit={ onSearchSummit }>
            <input
              type='text'
              className="form-control mb-2"
              placeholder='Find Hero'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />

            <button
              className="btn btn-primary"

            >
              Search
            </button>

          </form>
        </div>

        <div className="row mt-4">
          <div className="alert alert-danger" style={{display: !showError ? 'none' : ''}}>
            <b>There's a not results:  { q }</b>
          </div>
            {
              heroes.map(hero => (
                <div className="col-md-4">
                  <HeroCard 
                    key={hero.id}
                    {...hero}
                  />
                </div>
              ))
            }
   
        </div>

      </div>
    </>
  )
}
