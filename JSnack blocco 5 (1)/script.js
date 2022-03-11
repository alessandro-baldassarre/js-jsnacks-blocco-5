/**
      Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
      Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

      Generare casualmente le statistiche di gioco, secondo queste regole:

      A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

      B - la media punti fatti per partita deve essere compresa tra 0 e 50
      
      C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */


const player = {

   codPlayer : "",
   firstName : "Steph",
   LastName : "Curry",
   mediaPoints : "",
   perc3Points : ""
};


player.codPlayer = randomChar(3)+randomNumber(3);

player.mediaPoints = Math.floor(Math.random() * 50) + "pts";

player.perc3Points = Math.floor(Math.random() * 50) + "%";


function randomChar(length) {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
   }
   return result;
}

function randomNumber(length) {
   let result           = '';
   let characters       = '0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
   }
   return result;
}

console.table(player);


