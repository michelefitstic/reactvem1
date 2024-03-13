import { useState } from "react";
import Display from "./Display";

export default function Counter() {
  const [contatore, setContatore] = useState(0);
  console.log("App()", contatore);

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