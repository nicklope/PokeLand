const PokemonCard = () => {
  return (
    <div className="card game-card" onClick=''>
    <div className="img-wrapper">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtF15gYANWliMO0_-ou9PAd-DKvvEYbmSRe6YAblKmCN_1_OTRSmAeK_NWRCjlpKOxee4&usqp=CAU' alt="poster" />
    </div>
    <div className="info-wrapper flex-col">
      <h3>Charzard</h3>
      <p>Content</p>
    </div>
  </div>
  )
}

export default PokemonCard