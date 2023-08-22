export default async function getApiData(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error('Hubo un problema con la solicitud de la API.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error; // Lanzamos el error nuevamente para que el llamador pueda manejarlo si es necesario
  }
}
