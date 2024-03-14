import { useState } from "react";
import { ListItemAdder } from "./ListItemAdder";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList() {
  const [taskList, setTaskList] = useState<string[]>([]);

  function removeListItem(index : number) {
    //Copi la lista corrente
    const newTaskList = [...taskList];
    //Rimuovi l'elemento dalla lista copiata
    newTaskList.splice(index, 1)
    //Setti la lista a quella con l'elemento rimosso
    setTaskList(newTaskList);
    console.log(newTaskList);
  }

  return <>
    <h1>To Do List</h1>
      <ListItemAdder onClick={(newTask) => {
        const newTaskList = taskList.concat(newTask);
        setTaskList(newTaskList);
        console.log(newTaskList);
        }}/>

      <div>
        {taskList.map((e, index) => <ToDoListItem key={index} task={e} index={index} onClick={(index) => removeListItem(index)}/>)}
      </div>

      <button onClick={() => setTaskList([])}>Svuota lista</button>
  </>
  
}