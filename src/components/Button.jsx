function Button(props) {
  const { name, clickFunc } = props

  return <button onClick={clickFunc}>{name}</button>;
}

export default Button;
