import React from "react";
import Btn from "./Btn";

const Content = (props) => {
  const {content,toggleContent,deleteContent} = props;
  // チェックボックスを押したときに発火する関数
  const handleTodoCheckboxClick = () => {
    toggleContent(content.id) // content.completedがfalse→trueに、true→falseになる
  };

  // 削除ボタンを押した時に発火する関数
  const handleTodoDeleteClick = () => {
    deleteContent(content.id)
  };

  return(
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={content.completed} readOnly 
          onChange={handleTodoCheckboxClick} 
          className="w-4 h-4 mx-3 bg-gray-100 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
      </label>
      { content.completed ? <del>{content.name}</del> : content.name }
      <Btn 
        name="削除" 
        clickFunc={handleTodoDeleteClick} 
        className="w-14 h-8 mx-2 my-1 text-red-900 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white" 
      />
    </div>
  );
}
export default Content;
