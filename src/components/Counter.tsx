import { useEffect, useState } from "react";
import Display from "./Display";

export default function Counter(props : {
  readonly initialValue? : number;
}) {
  const {initialValue = 0} = props;
  
  const [contatore, setContatore] = useState(initialValue);

  //Vuole due argomenti: l'effetto (una funzione che vuoi eseguire quando qualcosa cambia) e delle deps (se uno dei valori in questa lista cambia, la funzione passata si attiva)
  //In questo caso quando cambia initialValue la funzione viene eseguita --> se initialValue vale 20 e tu gli assegni di nuovo il valore 20, la funzione non viene richiamata
  //Se in useEffect metti il return di una funzione, viene eseguita prima questa e poi lo useEffect in sè
  useEffect(() => {
    console.log("useEffect in azione - evento di mount di Counter", initialValue);
    setContatore(initialValue);
    return () => {
      console.log("return dello useEffect - evento di unmount", initialValue);
    }
  }, [initialValue]);

  return <>
    <Display n={contatore} myColor = {"black"}/>
    <button onClick={() => {
      //Quello che segue setContatore viene eseguito comunque, solo dopo aver eseguito queste istruzioni viene ridisegnata App e Display
      //senza arrow function tu assegni un valore a contatore
      setContatore(contatore + 1);
      //con la arrow function prende il valore attuale, al primo giro ottieni 3 perchè il valore di contatore viene settato a 1 e a quel valore attuale aggiungi 2
      //setContatore(contatore => contatore + 2);
      console.log(contatore)
    }} >+</button>
    <button onClick={() => {
      setContatore(contatore - 1)
    }}>-</button>
    {contatore >= 5 && <h3>NAUR - Counter is equal to/greater than 5</h3>}
  </>
}