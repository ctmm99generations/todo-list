import React from "react";
import Content from "./Content";

const List = (props) => {
  const { contents,toggleContent,deleteContent } = props;
  // todoといってもすべて同じtodoだからエラー ==>> keyをつけてユニークに、区別させる
  return contents.map((value) =>
    <Content
      content={value}
      key={value.id}
      toggleContent={toggleContent}
      deleteContent={deleteContent}
    />
    // component
  );
};
export default List;
