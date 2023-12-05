import React, { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto para el store
export const FavoritesContext = createContext(null);

// Estado inicial del store
const storeInitialState = {
  characters: [],
  planets: []
};

// =============== PROVEEDOR DEL CONTEXTO ================ //
export function FavoritesContextProvider({ children }) {
  // ================== STORE ================== //
  // Contiene los datos del Contexto.
  const [store, setStore] = useState(storeInitialState);

 
  // =============== ACTIONS ================= //
  // Contiene las funciones que modifican el store.
  const actions = {
    addCharacterFavorite: (character) => {
      setStore((prevState) => ({
        ...prevState,
        characters: [...prevState.characters, character],
      }));
    },

    removeCharacterFavorite: (characterId) => {
      setStore((prevState) => ({
        ...prevState,
        characters: prevState.characters.filter(
          (character) => character.uid !== characterId
        ),
      }));
    },

    addPlanetFavorite: (planet) => {
      setStore((prevState) => ({
        ...prevState,
        planets: [...prevState.planets, planet],
      }));
    },

    removePlanetFavorite: (planetId) => {
      setStore((prevState) => ({
        ...prevState,
        planets: prevState.planets.filter(
          (planet) => planet.uid !== planetId
        ),
      }));
    },
  };
  

  return (
    <FavoritesContext.Provider value={{ store, actions }}>
      {children}
    </FavoritesContext.Provider>
  );
};


// Hook personalizado para acceder al contexto
export function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesContext debe ser usado dentro de un FavoritesContextProvider');
  }
  return context;
};