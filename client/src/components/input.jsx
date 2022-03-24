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
      </form>
  )
}

export default Input