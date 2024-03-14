import { useState } from "react"
import { Button } from "antd";

export function ListItemAdder(props: {
  readonly onClick : (string) => void; 
}) {
  const {onClick} = props;
  const [userInput, setUserInput] = useState("");
  
  return <div>
    <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
    <Button type="primary" onClick={() => {
      //Passi l'input al padre
      onClick(userInput);
      //Svuoti il campo di input
      setUserInput("");      
      }}>Aggiungi task</Button>
  </div>
}