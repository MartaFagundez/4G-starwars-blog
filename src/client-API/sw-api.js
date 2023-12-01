// Obtener todos los personajes de la api
export const fetchCharacters = async () => {
  try {
    const response = await fetch('https://www.swapi.tech/api/people');
    if (!response.ok) {
      throw new Error('Error al obtener los personajes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};


// Obtener un personaje de la api
export const fetchCharacter = async characterId => {
  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${characterId}`);

    if (!response.ok) {
      throw new Error('Error al obtener los datos del personaje');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching character:', error);
  }
};