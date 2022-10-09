import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  // todoといってもすべて同じtodoだからエラー ==>> keyをつけてユニークに、区別させる
  return props.todos.map((todo) => 
    <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo}/>
  );
};

export default TodoList;