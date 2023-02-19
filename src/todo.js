// // import React from "react";

// // クラス名からHTML要素を取得
// // idで取得する→可読性が上がる
// // querySelector→classでもidでもいける、最近の主流
// const inputTask = document.querySelector('#inputTask');
// const addTaskBtn = document.querySelector('#addTaskBtn');
// const deleteAllBtn = document.querySelector('#deleteAllBtn');
// const taskList = document.querySelector('#taskList');

// const addTasks = (task) => { 
//   const listItem = document.createElement('li'); // listItemというHTML要素を生成
//   const showItem = taskList.appendChild(listItem); // taskListにlistItemを追加
//   showItem.innerHTML = task; // textcontentでもいける

//   // タスクに削除ボタンを付与
//   const doneButton = document.createElement('button'); // doneButtonを生成
//   doneButton.innerHTML = 'Done'; // ButtonにDoneと表示
//   listItem.appendChild(doneButton); // ButtonをlistItemに追加

//   // doneButtonが押されたら
//   doneButton.addEventListener('click', evt => {
//     evt.preventDefault(); 
//     doneTasks(doneButton); // 関数の呼び出し
//   });
// };

// // 完了ボタンを押したらtaskに取り消し線
// const doneTasks = (doneButton) => {
//   const chosenTask = doneButton.closest('li');  // 親要素を取得
//   //taskList.removeChild(chosenTask);
//   chosenTask.style.textDecoration = "line-through"; //取り消し線
//   // ボタンの親にclass名をつける→ボタンが押されたら親の前の要素（タスク）に取り消し線
// };

//  // addTaskのボタンが押されたら  
//  addTaskBtn.addEventListener('click', evt => {
//     console.log("addTaskButtonClick");
//     evt.preventDefault(); // formのデフォの動作をしない
//     const task = inputTask.value; // 入力欄に書かれているもの
//     addTasks(task); // addTasksの関数を呼び出す
//     inputTask.value = ''; // 入力欄を空欄にする
//   });

//   // deTaskのボタンが押されたらtaskを全部消す  
//   deleteAllBtn.addEventListener('click', evt => {
//     // console.log("deleteTaskButton");
//     // console.log(taskList);
//     taskList.innerHTML = '';
//     // taskList.removeChild(taskList);
//     // taskList = [];
//     // console.log(taskList);
//     // taskList.splice(0);
//   });    
  
  