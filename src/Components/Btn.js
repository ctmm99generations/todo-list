import React from "react";

const Btn = (props) =>{
  const {name,clickFunc} = props;
  return(
    <>
      <button onClick={clickFunc}>{name}</button>
    </>
  );
}

export default Btn;
