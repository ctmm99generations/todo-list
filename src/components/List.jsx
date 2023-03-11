import { Button } from "./Button";

export const List = (props) => {
  //todo削除ボタン
  const deleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); // splice(何番目を, 何個消すか);
    setTodoList([...newTodoList]); //App.jsからpropsで渡ってきたsetTodoList()
  };

  //todo完了ボタン
  const completeTodo = (index) => {
    const newTodoList = [...todoList];
    const selectTodoObject = newTodoList[index]; //完了ボタンを押したTodoオブジェクト
    newTodoList[index].completeFlag = !selectTodoObject.completeFlag;
    setTodoList(newTodoList);
  };

  const { todoList, setTodoList } = props;

  return (
    <ul>
      {todoList.map((todoObject, index) => {
        return (
          <div key={index}>
            {/* trueなら ? ○ : ✕ */}
            {/* 全体を{}で囲っていれば、{todoText}は必要ない。 */}
            {/* <del>などのタグでさらに囲っている→→→{todoText}とする必要がある */}
            {todoObject.completeFlag ? (<del>{todoObject.text}</del>) : (todoObject.text)}

            {/* onClick={deleteTodo(index)}だと、ここで関数が実行されてしまう */}
            {/* ▶▶▶ ()=>deleteTodo(index)とし、新しく関数を生成する形にする */}
            <Button value={"完了"} onClick={() => completeTodo(index)} />
            <Button value={"削除"} onClick={() => deleteTodo(index)} />
          </div>
        );
      })}
    </ul>
  );
};
