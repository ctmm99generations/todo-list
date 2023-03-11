import { useState } from "react";
import { Button } from "./components/Button";
import { List } from "./components/List";

const TodoObject = {
  text: "",
  completeFlag: false
};

export const App = () => {
  //inputで入力しているテキストを取得
  const getInputTodoText = (event) => {
    setTodoObject({
      text: event.target.value,
      completeFlag: false
    });
  };

  //todo追加ボタン
  const addTodo = () => {
    if (todoObject.text === "") return;
    setTodoList([...todoList, todoObject]);
    setTodoObject(TodoObject);
  };

  //入力したtodo
  const [todoObject, setTodoObject] = useState(TodoObject);

  // todoリスト
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div>
        <input
          placeholder="Enter your todo"
          value={todoObject.text}
          onChange={getInputTodoText}
        />
        <Button value={"追加"} onClick={addTodo} />
      </div>
      <div>
        <List todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
};
