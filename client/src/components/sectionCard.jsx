const SectionCard = () => {
  return (
    <div className="card" onClick=''>
      <div className="img-wrapper">
        <img src='https://pm1.narvii.com/7115/ed037afd6a9c1c8c93e4bf8048e34603fe02ed11r1-1024-671v2_hq.jpg' alt="game" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>Section Name</h3>
        <p>Content</p>
      </div>
    </div>
  )
}

export default SectionCard