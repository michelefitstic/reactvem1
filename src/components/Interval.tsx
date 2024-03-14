import { useEffect, useState } from "react"

export function Interval() {
  const [numero, setNumero] = useState(0);
  
  //setInterval restituisce un valore numerico, se lo passi a clearInterval si stoppa la funzione di setinterval
  useEffect(() => {
    const intervalRef = setInterval(() => {
      //Quando stampi numero, esso non si aggiorna perchè è una "foto" della situazione di partenza (quindi il valore è 0)
      console.log("interval", numero);
      setNumero(numero => numero + 1)
    }, 1000);
    //Quando questo componente scompare (unmount) fermi la funzione setInterval
    return () => {
      clearInterval(intervalRef);
    }
  }, [])

  return <div style={{fontSize: "50px"}}>{numero}</div>
}