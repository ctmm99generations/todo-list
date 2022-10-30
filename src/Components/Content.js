import React from "react";

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
        <input type="checkbox" checked={content.completed} readOnly onChange={handleTodoCheckboxClick}/>
      </label>
      { content.completed ? <del>{content.name}</del> : content.name } {/* completedがtrueなら取り消し線 */}
      <button type="alert" onClick={handleTodoDeleteClick}>削除</button>
    </div>
  );
}
export default Content;
