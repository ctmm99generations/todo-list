function Button(props) {
  const { name, clickFunc, className } = props

  return <button onClick={clickFunc} className={className}>{name}</button>;
}

export default Button;
