import React from "react"

function Form(props) {
  const {type, placeholder, onChange, value, className} = props

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
    </>
  );
}

export default Form;
