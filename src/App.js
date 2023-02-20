import React, { useState } from "react";


const App = () => {
  const [todoText, setTodoText] = useState("");

  const inputTask = document.querySelector('#inputTask');
  const taskList = document.querySelector('#taskList');

  // インプットフォームの状態を管理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const addTasks = (task) => { 
    // alert("addTasks:"+task);
    const listItem = document.createElement('li'); // listItemというHTML要素を生成
    const showItem = taskList.appendChild(listItem); // taskListにlistItemを追加
    showItem.innerHTML = task; // textcontentでもいける
  
    // タスクに削除ボタンを付与
    const doneButton = document.createElement('button'); // doneButtonを生成
    doneButton.innerHTML = 'Done'; // ButtonにDoneと表示
    listItem.appendChild(doneButton); // ButtonをlistItemに追加
    // doneButtonが押されたら
    doneButton.addEventListener('click', evt => {
      evt.preventDefault(); 
      doneTasks(doneButton); // 関数の呼び出し
    });

    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button'); // doneButtonを生成
    deleteButton.innerHTML = 'Delete'; // ButtonにDoneと表示
    listItem.appendChild(deleteButton); // ButtonをlistItemに追加
    // doneButtonが押されたら
    deleteButton.addEventListener('click', evt => {
      evt.preventDefault(); 
      deleteTasks(deleteButton); // 関数の呼び出し
    });
  };
  
  // 追加ボタンを押すとタスクがToDoリストに追加される
  const onClickAdd = () => {
    // console.log("onClickAdd:"+todoText);
    if (todoText === "") {
      alert("入力してください")
      return;
    }
    addTasks(todoText); // addTasksの関数を呼び出す
    inputTask.value = ''; // 入力欄を空欄にする
  };

  // 全削除ボタンを押すとタスクが全て消える
  const onClickDeleteAll = () => {
    taskList.innerHTML = '';
  };    


  // 完了ボタンを押したらtaskに取り消し線
  const doneTasks = (doneButton) => {
    const chosenTask = doneButton.closest('li');  // 親要素を取得
    chosenTask.style.textDecoration = "line-through"; //取り消し線
    // ボタンの親にclass名をつける→ボタンが押されたら親の前の要素（タスク）に取り消し線
    console.log("doneButton:");
  };

  // 削除ボタンを押したらtaskに取り消し線
  const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');  // 親要素を取得
    taskList.removeChild(chosenTask);
    console.log("deleteButton:");
  };

  return (
    <>
      <div id="todoapp">

       <h1>TodoList</h1>

       <form>
         <input 
          type="text" 
          id="inputTask" 
          value={todoText} 
          onChange={onChangeTodoText}/>
         <button 
          type="button" 
          id="addTaskBtn"
          // onClick={() => alert("inputTask:"+todoText)}
          onClick={onClickAdd}
          >
            Add Task
        </button>
      </form>

      <button 
        type="button" 
        id="deleteAllBtn"
        onClick={onClickDeleteAll}>
          Delete All Task
        </button>

      <div id="table">
        <h2>tasks</h2>
        <ul id="taskList" >
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;