const SectionCard = (props) => {
  return (
    <div className="card" onClick=''>
      <div className="img-wrapper">
        <img src={props.image} alt="game" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.sectionName}</h3>
        <p>Content</p>
      </div>
    </div>
  )
}

export default SectionCard