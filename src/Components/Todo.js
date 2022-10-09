import Reactj from "react";

const Todo = (props) => {

  // チェックボックスを押したときに発火する関数
  const handleTodoCheckboxClick = () => {
    props.toggleTodo(props.todo.id) // todo.completedがfalse→trueに、true→falseになる
  };

  // 削除ボタンを押した時に発火する関数
  const handleTodoDeleteClick = () => {
    props.deleteTodo(props.todo.id)
  };

  

  return(
    <div>
      <label>
        <input type="checkbox" checked={props.todo.completed} readOnly onChange={handleTodoCheckboxClick}/>
      </label>
      { props.todo.completed ? <del>{props.todo.name}</del> : props.todo.name } {/* completedがtrueなら取り消し線 */}
      <button type="alert" onClick={handleTodoDeleteClick}>削除</button>
    </div>
  );
}

export default Todo;