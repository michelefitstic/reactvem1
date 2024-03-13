import { useState } from "react";

export interface Persona {
  nome : string;
  cognome : string
}

export function PersonInput(props : {
  salvaPersona : (persona : Persona) => void
}) {
  //Estrai la funzione che ti è stata passata da App
  const {salvaPersona} = props;
  //const [persona, setPersona] = useState<Persona>({nome : "", cognome: ""});
  const [nome, setNome] = useState<string>("")
  const [cognome, setCognome] = useState<string>("")

  return <div>
    <p>Nome</p>
    <input type="text" onChange={e => setNome(e.target.value)}></input>
    {/* <input type="text" onChange={e => setPersona({...persona, nome: e.target.value})}></input> */}

    <p>Cognome</p>
    <input type="text" onChange={e => setCognome(e.target.value)}></input>
    {/* <input type="text" onChange={e => setPersona({...persona, cognome: e.target.value})}></input> */}

    <button onClick={() =>  {
     const newPersona: Persona = {
      nome: nome,
      cognome: cognome
    }
    //setPersona(newPersona);
    salvaPersona(newPersona);
    }}>Salva</button>
  </div>
}