export default function getFirstThreeWords(str) {
  // Paso 1: Separa la cadena en palabras
  const wordsArray = str.split(' ');
  
  // Paso 2: Extrae las primeras tres palabras
  const firstThreeWordsArray = wordsArray.slice(0, 7);
  
  // Paso 3: Une las tres palabras en una cadena
  const result = firstThreeWordsArray.join(' ');

  return result;
}
