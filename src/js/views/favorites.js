import React from 'react';
import { useFavoritesContext } from '../contexts/favorites-context';
import CharactersList from '../component/characters-list';
import PlanetsList from "../component/planets-list";

export default function Favorites() {
    const {store} = useFavoritesContext();

  return (
    <div className="container-fluid d-flex flex-column w-100 text-white-50 p-4" style={{maxWidth: "1400px"}} >
        <h1 className='text-white text-uppercase lh-lg fs-4 fw-bold mb-3'>Favorites</h1>
        {
            (store.characters.length === 0 && store.planets.length === 0) && 
            <p>You don't have favorite items for now.</p>
        }
        {
            store.characters.length > 0 && 
            <>
                <h2 className='text-warning text-uppercase lh-lg fs-5 mb-3'>Characters</h2>
                <CharactersList characters={store.characters} />
            </>
        }
        {
            store.planets.length > 0 && 
            <>
                <h2 className='text-warning text-uppercase lh-lg fs-5 mb-3'>Planets</h2>
                <PlanetsList planets={store.planets} />
            </>
        }
    </div>
  )
}
