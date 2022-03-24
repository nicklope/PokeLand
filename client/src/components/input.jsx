const Input = (props) => {
  return (
    <form onSubmit="">
        <input
          type="text"
          name="search"
          value=""
          placeholder={props.placeholder}
          onChange=""
        ></input>
        <button type="submit"></button>
      </form>
  )
}

export default Input