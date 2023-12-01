import React, { useReducer, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {reducer} from "./reducer";
import { setCharacters } from "./actions";
import { fetchCharacters } from "../../client-API/sw-api";


// Crear el contexto para el store
const StarWarsContext = createContext({});

// Estado global inicial
const initialState = {
  characters: []
};

// Proveedor del store
const StarWarsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sincronizar el estado global con los contactos de la API al montar el componente
  useEffect(() => {
    syncCharacterstList();

  }, []); 


  // ============ MÉTODOS QUE DESPACHAN ACCIONES ============= //
  const syncCharacterstList = () => {
    fetchCharacters()
      .then(data => {
        // Despacha la acción al reducer
        dispatch(setCharacters(data));
    });
  };
  

  return (
    <StarWarsContext.Provider value={{ state, syncCharacterstList }}>
      {children}
    </StarWarsContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
const useStarWars = () => {
  const context = useContext(StarWarsContext);
  if (!context) {
    throw new Error('useContact debe ser usado dentro de un StarWarsProvider');
  }
  return context;
};

export { StarWarsProvider, useStarWars };