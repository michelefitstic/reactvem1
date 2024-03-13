
export {}

console.log("Prova");

//Tipi primitivi
const i:number = 0;
let str:string = "ciao";
str = "world";
let bool:boolean = true;

let array:number[] = [1,2,3,4];
let arraymisto = [1,2,"ciao",true];

//Gli enum sono dei tipi che ti inventi
enum WeekDays {MONDAY, TUESDAY, WEDNESDAY};
let myDay : WeekDays = WeekDays.MONDAY;
let dayArray: WeekDays[] = [WeekDays.MONDAY, WeekDays.TUESDAY, WeekDays.WEDNESDAY];

//Operazioni con gli array
console.log(array);
array.push(5);
console.log("array", array);
//concat non modifica l'array di partenza ma ne restituisce uno nuovo che è il mix di quello di partenza + le cose aggiunte
let nuovoArray = array.concat(6);
console.log("nuovoArray", nuovoArray);

//Questa modifica è consentita anche se arrayImmutabile è const, perchè tu NON stai assegnando un nuovo valore con =
const arrayImmutabile = [1,2,3];
arrayImmutabile.push(4);

//Strutture dati e oggetti
//Con interface crei un tipo personalizzato Point
export interface Point {
  readonly x: number;
  readonly y: number;
};
//Crei un variabile di tipo Point, dopo averla creato i valori di x e y possono essere assegnati solo in creazione e dopo non più modificati
const mioPunto : Point = {
  x: 5,
  y: 6
};
//Senza readonly questo sarebbe possibile --> mioPunto.x = 7;

//Crei un tipo Point3d che eredita da Point e aggiunge un'altra proprietà
interface Point3d extends Point {
  z: number;
}
const mioPunto3d : Point3d = {
  x: 5,
  y: 6,
  z: 7
}

//Funzioni
//Il tipo dei parametri passati va specificato OBBLIGATORIAMENTE
//Definendo una funzione con function la funzione è disponibile ovunque all'interno del codice, non solo dopo che l'hai definita
function sum(n1:number, n2:number) : number {
  return n1 + n2;
}

//Crei l'interfaccia di una funzione - definisci che parametri DEVE avere la funzione e che tipo restituisce
interface Sum {
  (n1: number, n2:number): number
}

//Così crei una variabile costante che contiene una funzione
//sum2 la puoi richiamare dopo averla definita, al contrario della funzione sum sopra
//sum2 è di tipo Sum implementato sopra, quindi DEVE avere come parametri 2 numeri e ritornare un numero, il corpo della funzione in sè può variare basta che i parametri e il tipo restituito siano conformi all'interface
const sum2 : Sum = (n1, n2) => {
  return n1 + n2;
}

//Crei un'interfaccia che come property ha somma, che è di tipo Sum
interface PuntoConFunzione {
  readonly x: number;
  readonly y: number;
  readonly somma : Sum;
}

//Crei un oggetto di tipo PuntoConFunzione 
//In somma puoi mettere la variabile sum2 perchè è di tipo Sum oppure mettere una funzione che rispetti l'interfaccia Sum
let mioPuntoConFunzione : PuntoConFunzione = {
  x: 1,
  y: 2,
  somma :  sum2 //Oppure puoi mettere (n1:number, n2:number) => {return n1 + n2;} 
}
console.log(mioPuntoConFunzione);
console.log(mioPuntoConFunzione.somma(1,2));

//Destructuring - per salvare in una variabile alcune proprietà di mioPunto3d
const {x, y} = mioPunto3d;
console.log("x: ", x);

//Gli oggetti lavorano per riferimento --> se cambi il valore di mioPunto3d cambia il valore di mioPunto3d2 e viceversa
//Se fai const mioPunto3d2: Point3d = mioPunto3d, se modifichi uno dei due cambia anche l'altro e viceversa
//Se fai come sotto mioPunto3d2 prende tutte le proprietà di mioPunto3d e le mette in un nuovo oggetto
const mioPunto3d2: Point3d = {...mioPunto3d};
console.log("Punti iniziali")
console.log(mioPunto3d);
console.log(mioPunto3d2);
mioPunto3d.z = 150; //se cambi mioPunto3d modifichi solo lui, non anche mioPunto3d2
console.log(mioPunto3d);
console.log(mioPunto3d2);

//Funzioni classiche della programmazione funzionale
//map
const arr1: number[] = [1,2,3];
console.log("Before map", arr1);
const arrayMap = arr1.map(e => (e%2) === 0);
console.log("After map", arrayMap);

//filter - inserisce un elemento nel nuovo array solo se la condizione restituisce true
const arr2 = [1,2,3,4];
console.log("Before map", arr2);
const arrayMap2 = arr2.filter(e => (e%2) === 0);
console.log("After map", arrayMap2);

//Così esegui quello che segue ? solo se arrProva è diverso da null
//Se non è null ti dà il risultato della funzione map, altrimenti ti restituisce un array vuoto [] (ovvero quello che segue ??)
const arrProva: number[] = null as any;
const risultato = arrProva?.map(item => item*2) ?? [];