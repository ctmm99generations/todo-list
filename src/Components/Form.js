import React,{useRef} from "react";

// useRefで子コンポーネントに渡したい場合は、React.forwardRefを使用
const Form = React.forwardRef((props,ref) => {
  const {type, className} = props;
  return(
    <>
      <input type={type} ref={ref} className={className} /> {/* inputタグに入力した値をrefで取得 */}
    </>
  );
})

export default Form;
