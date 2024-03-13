import {Point} from "../lezione1";
import styles from "./Display.module.scss";

// {n : number} --> crei un'interfaccia in linea --> è un'interfaccia che ha come proprietà n di tipo number, non hai bisogno di dargli un nome
//props avrà quindi per forza una proprietà n e myColor e obj facoltativi perchè deve aderire all'interfaccia che hai dichiarato
export default function Display(props: {
    n : number,
    myColor?: string,
    obj? : Point
}) {
    //Controlli se la prop myColor è stata passata, altrimenti imposti la variabile a "red"
    ////const coloreDaUsare = myColor ?? "red";

    //Dici che la prop myColor di default vale "red", se gli passi un valore diverso viene impostato quello
    const { n, myColor = "red" } = props;
    return <div className={styles.display} style={{color : myColor}}>{n}</div>
}