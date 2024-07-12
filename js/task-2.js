'use strict';

function makeArray(firstArray, secondArray, maxLength) {
  const arrayConnection = firstArray.concat(secondArray)
  if (arrayConnection.length > maxLength) {
    const message = arrayConnection.slice(0, maxLength);
    return message;
  } else {
    return arrayConnection;
  }
}

console .log (makeArray( [ "Mango" , "Poly" ] , [ "Ajax" , "Chelsea" ] , 3 )); // [ "Mango" , "Poly" , "Ajax" ] 
console .log (makeArray( [ "Mango" , "Poly" , "Houston" ] , [ "Ajax" , "Chelsea" ] , 4 )); // [ "Mango" , "Poly" , "Houston" , " Ajax" ] 
console .log (makeArray( [ "Mango" ] , [ " Ajax" , "Chelsea" , "Poly" , "Houston" ] )); // [ "Mango" , "Ajax" , "Chelsea" ] 
console .log (makeArray( [ "Earth" , "Jupiter" ] , [ "Neptune" , "Uranus" ] , 2 )); // [ "Earth" , "Jupiter" ] 
console .log (makeArray( [ "Earth" , "Jupiter" ] , [ "Neptune" , "Uranus" ] , 4 )); // [ "Earth " , "Jupiter" , "Neptune" , "Uranus" ] 
console .log (makeArray( [ " Earth" , "Jupiter" ] , [ "Neptune" , "Uranus" , "Venus" ] , 0 )); // []
