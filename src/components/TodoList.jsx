import { useState } from "react"
import '../assets/styles/index.css';

function Todo() {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [active, setActive] = useState(false)

  const onChangeInputTodo = (e) => setInputTodo(e.target.value)

  const postBtn = () => {
    if(!inputTodo) return;
    const newTodos = [...todos, inputTodo]
    setTodos(newTodos)
    setInputTodo('')
  }

  const completeBtn = () => {
    setActive(!active)
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
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span className={active ? "todo" : ""}>{todo}</span>
              <button onClick={completeBtn}>完了</button>
              <button onClick={() => deleteBtn(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Todo;
