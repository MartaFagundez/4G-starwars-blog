import { SET_CHARACTERS } from './action-types';

// Acciones a ejecutar sobre el array de personajes del store
export const setCharacters = characters => ({
  type: SET_CHARACTERS,
  payload: characters,
});