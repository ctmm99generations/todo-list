import { useState, useEffect } from "react";
import { collection, addDoc, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import Button from "./Button";
import Form from "./Form";
import "../index.css";


function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState('');
  const changeInputTodo = (e) => setInputTodo(e.target.value)

  const btnStyle = "border-black border border-solid ml-8 px-6 py-2"

  useEffect(() => {
    const todoCollectionRef = collection(db, 'todos');
    getDocs(todoCollectionRef).then((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const postBtn = () => {
    if(!inputTodo) return;
    addDoc(collection(db, "todos"), {
      todo: inputTodo,
      active: false,
    })
    setInputTodo('')
  }

  const completeTodo = async (id) => {
    const todoDocumentRef = doc(db, 'todos', id);
    await updateDoc(todoDocumentRef, {
      active: true,
    });
  };

  const deleteTodo = async (id) => {
    const todoDocumentRef = doc(db, 'todos', id);
    console.log(todoDocumentRef);
    await deleteDoc(todoDocumentRef);
  };

  const todolists = todos.map((todo) => {
    return (
      <li key={todo.id} className="flex">
        <div className={todo.active ? "todo" : ""}>{todo.todo}</div>
        { 
          todo.active === true ? (
            <Button
              name='未完了'
              clickFunc={() => imcompleteTodo(todo.id)}
              className="btn"
            />
          ) : (
            <Button
              name='完了'
              clickFunc={() => completeTodo(todo.id)}
              className="btn"
            />
          )
        }
        <Button
          name='削除'
          clickFunc={() => deleteTodo(todo.id)}
          className={btnStyle}
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
        className="m-4 w-1/4 px-6 py-2 border-black border border-solid"
      />
      <Button
        name="送信"
        clickFunc={postBtn}
        className={btnStyle}
      />
      <ul>
        {todolists}
      </ul>
    </>
  );
}

export default TodoList;
