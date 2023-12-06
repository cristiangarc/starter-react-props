const Button = (props) => {
  return (
    <button style={{backgroundColor: props.color}}>{props.name}</button>
  )
}

export default Button;