
/**
 *
 *
      Crea un array composto da 12 automobili.
      Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

      Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

      Infine stampa separatamente i 3 array.

 *
 */


const cars = [
   {
      marca: "opel",
      modello: "astra",
      alimentazione: "benzina"
   },
   {
      marca: "mercedes",
      modello: "classe a",
      alimentazione: "diesel"
   },
   {
      marca: "fiat",
      modello: "panda",
      alimentazione: "gpl"
   },
   {
      marca: "tesla",
      modello: "model s",
      alimentazione: "elettrico"
   },
   {
      marca: "opel",
      modello: "zafira",
      alimentazione: "gpl"
   },
   {
      marca: "mercedes",
      modello: "classe b",
      alimentazione: "diesel"
   },
   {
      marca: "fiat",
      modello: "tipo",
      alimentazione: "benzina"
   },
   {
      marca: "tesla",
      modello: "model a",
      alimentazione: "elettrico"
   },
   {
      marca: "opel",
      modello: "vectra",
      alimentazione: "metano"
   },
   {
      marca: "mercedes",
      modello: "classe g",
      alimentazione: "elettrico"
   },
   {
      marca: "fiat",
      modello: "uno",
      alimentazione: "gpl"
   },
   {
      marca: "tesla",
      modello: "model b",
      alimentazione: "elettrico"
   },
];


const benzinaCars = cars.filter(element => {
   if(element.alimentazione == "benzina"){
      return true;
   }
}
);

const dieselCars = cars.filter(element => {
   if(element.alimentazione == "diesel"){
      return true;
   }
}
);


const allCars = cars.filter((car)=>{
   if (car.alimentazione != "diesel" && car.alimentazione != "benzina"){
      return true;
   }
   
})

console.table(dieselCars);
console.table(benzinaCars);
console.table(allCars);