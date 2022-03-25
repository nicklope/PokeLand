
const Landing = (props) => {
  return (
      <div className="pokemon-content">
        <section className="image-container">
          <img src={props.backgroundImage} />
          <section className="details">
            <img src={props.banner} alt='welcome to pokeland'/>
        </section>
        </section>

      </div>
  )
}

export default Landing