

//ESERCIZIO 1

//Input: anno corrente = 2021, anno di nascita = 1996
//Output: età = 25, anni mancanti = 75

let currentYear = new Date().getFullYear();
let annoDiNascita = 1996;

let age = currentYear - annoDiNascita;

console.log("età:" + age);

missingYears = (100 - age);

console.log("Anni mancanti" + missingYears);


//------------------------------------------------------


//ESERCIZIO 2

//Progettare l’oggetto canzoni che contiene delle proprietà: canzone1, canzone2, ecc… Queste proprietà a sua volta sono degli oggetti che hanno altre proprietà: titolo, nomeCantante e anno. Inserire poi alcuni dati a piacere e visualizzarli. Dopo fare inserire all’utente delle nuove canzoni attraverso il prompt dei comandi. Visualizzare il nuovo oggetto così costruito.

//Come prima cosa memorizziamo in una variabile il riferimento all’oggetto canzoni. All’interno specifichiamo le due proprietà canzone1 e canzone 2 che a loro volta sono degli oggetti con il titolo, il nome del cantante e l’anno di produzione.

//Dopo creiamo un’altra struttura analoga alla precedente, ma facciamo inserire i dati all’utente.

//Infine utilizziamo object.assign per aggiungere questi dati all’oggetto creato in precedenza.


var canzoni = {
    canzone1 : {
      titolo: 'Rockstar',
      nomeCantante: 'Danien & Theo',
      anno: '2016'
    },
    canzone2 : {
      titolo: 'BRNBQ',
      nomeCantante: 'Sfera Ebbasta',
      anno: '2015'
    }
  }
  console.log(canzoni);
  
  var canzoneAggiunta = {
    canzone3 : {
      titolo : prompt('Inserisci il titolo'),
      nomeCantante: prompt('Inserisci il nome del cantante'),
      anno: prompt('Inserisci l\'anno'),
    }
  }
  
  Object.assign(canzoni,canzoneAggiunta);
  console.log(canzoni);