import React from "react"
import { useState } from "react";
import Button from "./Button";

function Form() {
  const postBtn = () => {
    alert('送信')
  }

  return (
    <>
      <input
        type="text"
        placeholder="Todoを入力"
      />
      <Button
        name="送信"
        clickFunc={postBtn}
      />
    </>
  );
}

export default Form;
