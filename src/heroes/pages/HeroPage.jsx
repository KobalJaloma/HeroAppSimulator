
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {

  const navigate = useNavigate();

  const { id } = useParams();
  const hero = useMemo(() => getHeroById( id )); 
  
  
  if ( !hero ) {
    return <Navigate to={'/marvel'}/>
  }

  const onNavigateBack = () => {

    if(hero.publisher === 'Marvel Comics') {
      navigate('/marvel'); 
      
    }
    else {
      navigate('/dc'); 
    }
  }
  
  
  return (
    <div className="row mt-5">
        <div className="col-4">
          <img
            src={`/heroes/${ id }.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h1>{hero.superhero}</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
            <li className="list-group-item"><b>First appearence: </b>{hero.first_appearance}</li>
          </ul>

          <h3 className="mt-3"> Characters</h3>
          <p>{hero.characters}</p>

          <button 
            className="btn btn-outline-secondary"
            onClick={ onNavigateBack }
          >
            Regresar
          </button>
        </div>
    </div>
  )
}
