import { useState } from "react"
import '../assets/styles/index.css';

function Todolist() {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([{
    todo: "ヨンウン",
    active: false
  }])

  const onChangeInputTodo = (e) => setInputTodo(e.target.value)

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

  return (
    <>
      <h1>Todoアプリ</h1>
      <label>
        <input type="text" placeholder="Todoを入力" value={inputTodo} onChange={onChangeInputTodo} />
        <button onClick={postBtn}>送信</button>
      </label>
      <p>Todoリスト</p>
      <ul>
        {todos.map((moji, index) => {
          return (
            <li key={index}>
              <span className={moji.active ? "todo" : ""}>{moji.todo}</span>
              <button onClick={() => completeBtn(index)}>完了</button>
              <button onClick={() => deleteBtn(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Todolist;
