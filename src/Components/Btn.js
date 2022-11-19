import React from "react";

const Btn = (props) =>{
  const {name,clickFunc,className} = props;
  return(
    <>
      <button onClick={clickFunc} className={className}>{name}</button>
    </>
  );
}

export default Btn;
