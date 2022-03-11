/**
 *
 *
      Crea un array di oggetti che rappresentino delle persone.
      Ogni persona ha un nome, un cognome e un'età.
      
      Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const person = [
   {
      nome : "Tom",
      cognome : "Brady",
      "età" : 46 
   },
   {
      nome : "Trevor",
      cognome : "Lawrance",
      "età" : 23 
   },
   {
      nome : "Zach",
      cognome : "Wilson",
      "età" : 22 
   },
   {
      nome : "Martin",
      cognome : "King",
      "età" : 12 
   },
   {
      nome : "Luke",
      cognome : "Sale",
      "età" : 15 
   },
   {
      nome : "Jeff",
      cognome : "Bazeg",
      "età" : 51 
   },
   {
      nome : "Elon",
      cognome : "Chack",
      "età" : 11 
   },
   {
      nome : "Marvin",
      cognome : "Top",
      "età" : 31 
   },
]

const isDriver = person.map(element => {
   if (element.età >= 18){
      return `${element.nome} ${element.cognome} può guidare avendo un'età di ${element.età}`;
   }
   else
   {
      return `${element.nome} ${element.cognome} non può guidare avendo un'età di ${element.età}`;
   }
});

console.table (person);
console.log (isDriver);