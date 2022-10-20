import { useState } from "react";
import Button from "./Button";

function TodoList() {
  const [todos, setTodos] = useState(['todo1', 'todo2']);

  const completeBtn = (index) => {
    alert(`${index}番目のがtodoが完了しました`)
  }

  const deleteBtn = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const todolists = todos.map((todo, index) => {
    return (
      <li key={index}>
        <span>{todo}</span>
        <Button name='完了' clickFunc={() => completeBtn(index)} />
        <Button name='削除' clickFunc={() => deleteBtn(index)} />
      </li>
    )
  })

  return (
    <>
      <ul>
        {todolists}
      </ul>
    </>
  );
}

export default TodoList;
