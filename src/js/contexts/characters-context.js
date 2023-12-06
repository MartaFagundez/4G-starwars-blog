import React, { createContext, useContext, useEffect, useState } from 'react';

import { fetchCharacter, fetchCharacters } from "../../client-API/sw-api";


// Crear el contexto para el store
export const CharactersContext = createContext(null);

// Estado inicial del store
const storeInitialState = {
  characters: [],
  characterDetails: {},
  charactersPagination: {
    limit: 10,
    offset: 0,
    totalPages: 0,
    currentPage: 0,
    totalCharacters: 0
  },
  loading: {
      isLoadingCharacters: false,
      isLoadingCharacterDetails: false,

  },
  error: {
      errorMessage: ""
  }
};

// =============== PROVEEDOR DEL CONTEXTO ================ //
export function CharactersContextProvider({ children }) {
  // ================== STORE ================== //
  // Contiene los datos del Contexto.
  const [store, setStore] = useState(storeInitialState);

 
  // =============== ACTIONS ================= //
  // Contiene las funciones que modifican el store.
  const actions = {
    syncCharacterstList: () => {
      fetchCharacters()
        .then(data => {
          // Modifica la lista de personajes del store
          setStore({...store, characters: data});
        });
    },
    setCharacterDetails: (id) => {
      fetchCharacter(id)
        .then(data => {
          setStore({...store, characterDetails: data});
        });
    },
    clearCharacterDetails: () => {
      setStore((prevState) => ({
        ...prevState,
        characterDetails: {}
      }))
    }
  }


   // Sincronizar el estado global con los contactos de la API al montar el contexto
   useEffect(() => {
    actions.syncCharacterstList();

  }, []); 
  

  return (
    <CharactersContext.Provider value={{ store, actions }}>
      {children}
    </CharactersContext.Provider>
  );
};


// Hook personalizado para acceder al contexto
export function useCharactersContext() {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error('useCharactersContext debe ser usado dentro de un CharactersContextProvider');
  }
  return context;
};