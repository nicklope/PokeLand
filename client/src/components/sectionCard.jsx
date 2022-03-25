

const SectionCard = (props) => {



  return (
    <div className="card" onClick={props.onclick}>
      <div className="img-wrapper">
        <img src={props.image} alt="game" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.sectionName}</h3>
        
      </div>
    </div>
  )
}

export default SectionCard