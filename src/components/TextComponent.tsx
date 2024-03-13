import { useState } from "react"

export function TextComponent() {
  const [text, setText] = useState<string>("micmoc");
  const [password, setPassword] = useState<string>("");

  return <>
    <div>Text Component</div>
    <div> Username
        <input type="text" value={text} onChange={(e) => {
        setText(e.target.value); //se commenti questa riga il valore sarà sempre quello della var text perchè lo passi come value, tu assegni un valore che non può più essere cambiato
      }}/>
      <button onClick={() => setText("")}>Pulisci</button>
    </div>    

    <div> Password
        <input type="text" onChange={(e) => {
        setPassword(e.target.value);
      }}/>
    <button onClick={() => setPassword("")}>Pulisci</button>
    </div>
    
    <div style={{fontSize : "20px"}}>Username: {text}</div>
    <div style={{fontSize : "20px"}}>Password: {password}</div>    
  </>
}

/*export function TextComponent() {
  const [userText, setUserText] = useState("");
  return <>
    <div>TextComponent</div>
    <input type="text" name="" id="" onChange={(e) => setUserText(e.target.value)}/>
    <p>Testo inserito: {userText}</p>
  </>
}*/