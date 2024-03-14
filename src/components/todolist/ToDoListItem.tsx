import {Button} from "antd";

export function ToDoListItem(props: {
  readonly task: string,
  readonly index: number,
  readonly onClick: (number) => void
}) {
  const {task, index, onClick} = props;

  return <div style={{border: "1px solid black"}}>
    {task}
    <button onClick={() => onClick(index)}> X </button>
  </div>
}