// Tipos de acciones
import { SET_CHARACTERS } from "./action-types";


// Reducer para gestionar el estado global
export const reducer = (state, action) => {
    switch (action.type) {
      case SET_CHARACTERS:
        return { characters: action.payload };
      default:
        return state;
    }
};