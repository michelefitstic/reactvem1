import React, { useState } from 'react';
import styles from './App.module.scss';
import logo from "./assets/logo512.png";
import Display from './components/Display';
import Counter from './components/Counter';
import { TextComponent } from './components/TextComponent';
import CounterWithObjectState from './components/CounterWithObjectState';
import { MyCustomInput } from './components/MyCustomInput';
import { PersonInput } from './components/PersonInput';
import { Persona } from './components/PersonInput';
import { MiddleComponent } from './components/MiddleComponent';


//App si ridisegna perchè cambi il suo state contatore, Display si ridisegna perchè cambia una delle sue props
export default function App() {
  const [childText, setChildText] = useState("");
  const [childPersona, setChildPersona] = useState<Persona>({nome: "", cognome: ""})

  return <>    
    <div>App</div>
    {/*I due Counter sotto sono due istanze diverse, quindi i loro contatori cambiano separatamente*/}
    
    {/*<Counter />
    <Counter />
    <CounterWithObjectState />
    <TextComponent />
    */}
    {/*come props onChange gli passi il corpo di una funzione*/}
    <MyCustomInput label={"Nome"} required={true} onChange={text => {
      //text è il valore che ti restituisce MyCustomInput (equivale all'e.target.value del campo di input)
      console.log(text);
      setChildText(text)
    }}/>

    <MyCustomInput label={"Cognome"}required={false} onChange={(text => console.log(text))}/>
    <div>Testo in App.tsx: {childText}</div>

    <PersonInput salvaPersona={(persona) => {      
      setChildPersona(persona);
      console.log(persona);
    }}/>

    <h1>{childPersona.nome} {childPersona.cognome}</h1>

    <br></br>
    
    {/* Il corpo della funzione viene eseguito qua (da dentro App) perchè è lui a passarlo come parametro*/}
    <MiddleComponent onChange={text => {
      console.log("App from MiddleComponent", text)
    }}/>
  </>
}

//Di export default ce ne può essere solo uno
/*export default function App() {
  return (
    <React.Fragment> equivale a <></>
    <React.Fragment> 
      <div className={styles.title}>
        <img src={logo} alt="logo" />
        <div>Fitstic React 2024</div>      
      </div>
      <CyclicRenderingComponent />
      <MyComponent />
    </React.Fragment>
  );
}*/

//I nomi dei componenti devono sempre avere iniziale maiuscola
export function MyComponent() {
  function sum(n1 : number, n2 : number) : number {
    return n1 + n2;
  }
  //Oppure puoi fare così const sum = (n1: number, n2: number) => n1 + n2;

  let num: number = 5;
  let str : String = "gagniss everdeen";
  let bool: boolean = true;

  //Rendering condizionale con variabile di appoggio
  let val: JSX.Element;
  if (bool) {
    val = <div>bool è True - variabile d'appoggio</div>
  } else 
  {
    val = <div>bool è False - variabile d'appoggio</div>
  }

  return (
  <div>
    <h2>Component</h2>
    <div>num: {num}</div>
    <div>str: {str}</div>
    <div>bool: {bool} - I booleani non vengono visualizzati</div>
    {/*val è la variabile di appoggio definita sopra*/}
    {val}

    {/*Sotto rendering condizionale con operatore ternario*/}
    {bool === true ? <div>Bool true - Ternario</div> : <div>Bool false - Ternario</div>}

    {/*Sotto rendering condizionale con && logico*/}
    {bool === true && <div>Il Bool è true -- && logico</div>}

    {/*Richiami la funzione sum dentro un div*/}
    <div>Risultato somma: {sum(3,4)}</div>
  </div>);
}

export function CyclicRenderingComponent() {
  let array : number[] = [2,4,6,7];
  //Puoi mettere il risultato in una var e usare quella sotto --> let arrayDiJsx = array.map(item => <div>Num: {item}</div>)

  return <>
    <h4>Rendering ciclico</h4>
    {/*Con il map ti crei un array nuovo e lo renderizzi nel div*/}
    <div>{array.map((item, index) => <div key={index}>Num {index}: {item}</div>)}</div>
  </>
}