import React from 'react';
import defaultImg from "../../img/default-img.jpg";
import { Link } from 'react-router-dom';
import { useFavoritesContext } from '../contexts/favorites-context';

export default function PlanetCard({planet}) {
    const {store, actions } = useFavoritesContext();
    
    const planetImageUrl = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;

    const isPlanetInFavorites = store.planets.some(
        (favPlanet) => favPlanet.uid === planet.uid
      );
    
    const handleToggleFavorite = () => {
    if (isPlanetInFavorites) {
        actions.removePlanetFavorite(planet.uid);
    } else {
        actions.addPlanetFavorite(planet);
    }
    };

    return (

            <div className="card bg-dark shadow m-2" style={{width: "13rem"}}>
                <figure className="card-img-top d-flex overflow-hidden border-bottom border-warning m-0" style={{height: "14rem"}}>
                <img
                    src={planetImageUrl}
                    className="w-100"
                    alt={`Image of ${planet.name}`}
                    onError={(e) => {
                        e.target.src = defaultImg; // Imagen predeterminada en caso de error
                    }}
                    style={{ objectFit: "cover" }}
                />
                </figure>
                <div className="card-body">
                    <h6 className="card-title text-white text-uppercase fw-bold mb-4">{planet.name}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="btn p-0 m-0" onClick={handleToggleFavorite}><i className={`text-warning fs-5 fa-heart ${isPlanetInFavorites ? "fa-solid" : "fa-regular"}`}></i></p>
                        <Link to={`/planets/${planet.uid}`} className="btn btn-outline-warning">See More</Link>
                    </div>
                </div>
            </div>
    )
}
