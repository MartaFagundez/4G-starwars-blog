import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { usePlanetsContext } from '../contexts/planets-context';
import loadingImg from "../../img/loading.gif";
import defaultImg from "../../img/default-img.jpg";
import { Link } from 'react-router-dom';


export default function PlanetDetail() {
  const { store, actions} = usePlanetsContext();

  const params = useParams();
  
  const planetImageUrl = `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`;

  useEffect(() => {
    actions.setPlanetDetails(params.id);

  }, []);

  return (
    <>
      {/* LOADING */}
      {
          Object.keys(store.planetDetails).length === 0 && 
              <div className="container-fluid d-flex flex-column align-items-center w-100 p-4">
                  <figure className='d-flex mb-3' style={{width: "150px"}}>
                      <img src={loadingImg} alt="" className='w-100'/>
                  </figure>
                  <p className='text-white fs-5'>Loading...</p>
              </div>
      }

      {/* CHARACTER DETAIL */}
      {
        Object.keys(store.planetDetails).length > 0 &&
          
        <div className="d-flex flex-column align-items-center w-100 p-4">
          {/* Container */}
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-evenly bg-dark p-4 my-4 w-100 rounded-1" style={{maxWidth: "800px"}}>

            {/* Image */}
            <figure className='d-flex w-100 border border-3 border-sw-black rounded-1 overflow-hidden shadow' style={{maxWidth: "300px"}}>
            <img
                    src={planetImageUrl}
                    className="w-100"
                    alt={`${store.planetDetails.name}`}
                    onError={(e) => {
                        e.target.src = defaultImg; // Imagen predeterminada en caso de error
                    }}
                    style={{ objectFit: "cover" }}
              />
            </figure>

            {/* Name and Films */}
            <div className="d-flex flex-column align-items-center">
              <h1 className='text-white text-uppercase text-center lh-lg fs-3 fw-bold py-2 px-4 border-top border-bottom border-warning mb-5'>  {store.planetDetails.name}
              </h1>
              <ul className='text-white-50 fs-5 p-0 text-center'>
                <li className='mb-1'><span className='fw-bold fst-italic'>Climate: </span>{store.planetDetails.climate || "Unknow"}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Terrain: </span>{store.planetDetails.terrain || "Unknow"}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Diameter: </span>{store.planetDetails.diameter || "Unknow"}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Rotation Period: </span>{store.planetDetails.rotation_period || "Unknow"}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Orbital Period: </span>{store.planetDetails.orbital_period || "Unknow"}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Gravity: </span>{store.planetDetails.gravity || "Unknow"}</li>
                <li className='mb-1'><span className='fw-bold fst-italic'>Population: </span>{store.planetDetails.population || "Unknow"}</li>  
              </ul>
            </div>
          </div>

          <Link to={'/planets'} className='btn btn-outline-warning mt-2 mb-4'>Go to Planets List</Link>
        </div>
      } 
    </>
  )
}