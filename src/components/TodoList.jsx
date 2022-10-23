import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import "../index.css";


function TodoList() {
  const [todos, setTodos] = useState([{
    todo: "",
    active: false
  }])
  const [inputTodo, setInputTodo] = useState('');
  const changeInputTodo = (e) => setInputTodo(e.target.value)

  const postBtn = () => {
    if(!inputTodo) return;
    const todoText = {todo: inputTodo, active: false}
    const newTodos = [...todos, todoText]
    setTodos(newTodos)
    setInputTodo('')
  }

  const completeBtn = (index) => {
    const newTodos = [...todos]
    if (newTodos[index].active === false) {
      newTodos[index].active = true
    } else {
      newTodos[index].active = false
    }
    setTodos(newTodos)
  }

  const deleteBtn = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const todolists = todos.map((moji, index) => {
    return (
      <li key={index}>
        <span className={moji.active ? "todo" : ""}>{moji.todo}</span>
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
