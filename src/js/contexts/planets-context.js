import React, { createContext, useContext, useEffect, useState } from 'react';

import { fetchPlanets, fetchPlanet } from "../../client-API/sw-api";


// Crear el contexto para el store
export const PlanetsContext = createContext(null);

// Estado inicial del store
const storeInitialState = {
  planets: [],
  planetDetails: {},
  planetsPagination: {
    limit: 10,
    offset: 0,
    totalPages: 0,
    currentPage: 0,
    totalPlanets: 0
  },
  loading: {
      isLoadingPlanets: false,
      isLoadingPlanetDetails: false,

  },
  error: {
      errorMessage: ""
  }
};

// =============== PROVEEDOR DEL CONTEXTO ================ //
export function PlanetsContextProvider({ children }) {
  // ================== STORE ================== //
  // Contiene los datos del Contexto.
  const [store, setStore] = useState(storeInitialState);

 
  // =============== ACTIONS ================= //
  // Contiene las funciones que modifican el store.
  const actions = {
    syncPlanetstList: () => {
      fetchPlanets()
        .then(data => {
          // Modifica la lista de planetas del store
          setStore({...store, planets: data});
      });
    },
    setPlanetDetails: (id) => {
      fetchPlanet(id)
        .then(data => {
          setStore({...store, planetDetails: data});
        });
    }
  }


   // Sincronizar el estado global con los contactos de la API al montar el contexto
   useEffect(() => {
    actions.syncPlanetstList();

  }, []); 
  

  return (
    <PlanetsContext.Provider value={{ store, actions }}>
      {children}
    </PlanetsContext.Provider>
  );
};


// Hook personalizado para acceder al contexto
export function usePlanetsContext() {
  const context = useContext(PlanetsContext);
  if (!context) {
    throw new Error('usePlanetsContext debe ser usado dentro de un PlanetsContextProvider');
  }
  return context;
};