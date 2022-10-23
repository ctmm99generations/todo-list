import { useState } from "react";
import Button from "./Button";
import Form from "./Form"


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  const completeBtn = (index) => {
    alert(`${index}番目のがtodoが完了しました`)
  }

  const deleteBtn = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const changeInputTodo = (e) => setInputTodo(e.target.value)

  const postBtn = () => {
    if(!inputTodo) return;
    const newTodos = [...todos, inputTodo]
    setTodos(newTodos)
    setInputTodo('')
  }

  const todolists = todos.map((todo, index) => {
    return (
      <li key={index}>
        {todo}
        <Button
          name='完了'
          clickFunc={() => completeBtn(index)}
        />
        <Button
          name='削除'
          clickFunc={() => deleteBtn(index)}
        />
      </li>
    )
  })

  return (
    <>
      <Form
        type="text"
        placeholder="Todoを入力"
        value={inputTodo}
        onChange={changeInputTodo}
      />
      <Button
        name="送信"
        clickFunc={postBtn}
      />
      <ul>
        {todolists}
      </ul>
    </>
  );
}

export default TodoList;
