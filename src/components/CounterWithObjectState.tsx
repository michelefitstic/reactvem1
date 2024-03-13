import { useState } from "react";
import Display from "./Display";

//Crei un'interfaccia (tipo) che poi assegnerai al tuo stato
interface State {
  readonly value: number
};

export default function CounterWithObjectState() {
  //Dici che la const state è di tipo State definito sopra e che la sua proprietà value di default è 0
  const [state, setState] = useState<State>({value : 0});
  console.log(state)

  return <>
    <Display n={state.value} myColor = {"black"}/>
    <button onClick={() => {
      //Crei un nuovo oggetto di tipo State, assegni un valore alla proprietà value e lo setti come nuovo state
      //const newState : State = {value: state.value + 1} 
      //setState(newState);

      //Fai la stessa cosa di sopra ma con sintassi diversa
      //Crei newState uguale a state attuale, ma ne cambi la proprietà value
      const newState: State = {
        ...state,
        value: state.value + 1
      };
      setState(newState);

    }} >+</button>
    {state.value >= 5 && <h3>NAUR - Counter is equal to/greater than 5</h3>}
  </>
}