import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useCharactersContext } from '../contexts/characters-context';
import loadingImg from "../../img/loading.gif";
import defaultImg from "../../img/default-img.jpg";
import { Link } from 'react-router-dom';


export default function CharacterDetail() {
  const { store, actions} = useCharactersContext();

  const params = useParams();
  
  const characterImageUrl = `https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`;

  useEffect(() => {
    actions.setCharacterDetails(params.id);

  }, []);

  return (
    <>
      {/* LOADING */}
      {
          Object.keys(store.characterDetails).length === 0 && 
              <div className="container-fluid d-flex flex-column align-items-center w-100 p-4">
                  <figure className='d-flex mb-3' style={{width: "150px"}}>
                      <img src={loadingImg} alt="" className='w-100'/>
                  </figure>
                  <p className='text-white fs-5'>Loading...</p>
              </div>
      }

      {/* CHARACTER DETAIL */}
      {
        Object.keys(store.characterDetails).length > 0 &&
          
        <div className="d-flex flex-column align-items-center w-100 p-4">
          {/* Container */}
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-evenly bg-dark p-4 my-4 w-100 rounded-1" style={{maxWidth: "800px"}}>

            {/* Image */}
            <figure className='d-flex w-100 border border-3 border-sw-black rounded-1 overflow-hidden shadow' style={{maxWidth: "300px"}}>
              <img
                    src={characterImageUrl}
                    className="w-100"
                    alt={`Portrait of ${store.characterDetails.name}`}
                    onError={(e) => {
                        e.target.src = defaultImg; // Imagen predeterminada en caso de error
                    }}
                    style={{ objectFit: "cover" }}
              />
            </figure>

            {/* Name and Films */}
            <div className="d-flex flex-column align-items-center">
              <h1 className='text-white text-uppercase text-center lh-lg fs-3 fw-bold py-2 px-4 border-top border-bottom border-warning mb-5'>  {store.characterDetails.name}
              </h1>
              <ul className='text-white-50 fs-5 p-0 text-center'>
                <li className='mb-1'><span className='fw-bold fst-italic'>Height: </span>{store.characterDetails.height}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Mass: </span>{store.characterDetails.mass}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Hair Color: </span>{store.characterDetails.hair_color}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Skin Color: </span>{store.characterDetails.skin_color}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Eye Color: </span>{store.characterDetails.eye_color}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Birth Year: </span>{store.characterDetails.birth_year}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Gender: </span>{store.characterDetails.gender}</li>  
              </ul>
            </div>
          </div>

          <Link to={'/characters'} className='btn btn-outline-warning mt-2 mb-4'>Go to Characters List</Link>
        </div>
      } 
    </>
  )
}
