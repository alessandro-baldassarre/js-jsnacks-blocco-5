/**
 * 
      A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

      Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */


const strings = [
   "ciao","MiaAo", "baU"
];

const rightStrings = strings.map(element => (element[0].toUpperCase() + element.toLowerCase().substring(1)));
   

console.log(rightStrings);