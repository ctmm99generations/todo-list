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
  
  const getTodos = () => {
    const todoCollectionRef = collection(db, 'todos');
    getDocs(todoCollectionRef).then((querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }

  useEffect(() => {
    getTodos()
  }, []);

  const postBtn = () => {
    if(!inputTodo) return;
    addDoc(collection(db, "todos"), {
      todo: inputTodo,
      active: false,
    })
    getTodos()
    setInputTodo('')
  }

  const completeTodo = async (id) => {
    const todoDocRef = doc(db, 'todos', id);
    await updateDoc(todoDocRef, {
      active: true,
    });
    getTodos()
  };

  const imcompleteTodo = async (id) => {
    const todoDocRef = doc(db, 'todos', id);
    await updateDoc(todoDocRef, {
      active: false,
    });
    getTodos()
  };

  const deleteTodo = async (id) => {
    const todoDocRef = doc(db, 'todos', id);
    await deleteDoc(todoDocRef);
    getTodos()
  };

  const todolists = todos.map((todo) => {
    return (
      <li key={todo.id} className="flex">
        <div className={todo.active ? "todo text-center align-middle" : "text-center align-middle"}>{todo.todo}</div>
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
          className="btn"
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
        className="form"
      />
      <Button
        name="送信"
        clickFunc={postBtn}
        className="btn"
      />
      <ul>
        {todolists}
      </ul>
    </>
  );
}

export default TodoList;
