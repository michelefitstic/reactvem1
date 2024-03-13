import { useState } from "react";


//Le props che passi devono avere un proprietà required, che una volta passata non può più essere cambiata (readonly)
export function MyCustomInput(props : {
  readonly label? : string;
  readonly required : boolean;
  //Il parametro di ingresso è quello che vuoi restituire a chi ti passa la funzione, è come nell'onChange --> (e) è quello che ti interessa e quello che contiene le informazioni
  //Dato che il valore da restituire è già nei parametri di ingresso, non hai bisogno di fare un return
  //Callback da ricevere in input - serve per passare al genitore un contenuto informativo
  readonly onChange : (text : string) => void;
}) {
  const { required, label, onChange } = props;
  const [text, setText] = useState<string>("");

  return <>
      <div>
        <div>
          {/*Metti l'asterisco di fianco al label solo se require è true */}
          {label} {required === true && <span>*</span>}
          <input type="text" value={text} onChange={(e) => {
            setText(e.target.value)

            //Invocazione della callback - passa al genitore il nuovo valore dell'input
            onChange(e.target.value)}        
        }/>
        </div>
        {text.length === 0 && required === true && <div>Campo obbligatorio</div>}
      </div>
  </>
}