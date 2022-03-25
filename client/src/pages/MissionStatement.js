import Landing from '../components/landing'
import Input from '../components/input'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MissionStatement = (props) => {
  return (
    <div>
      <Landing backgroundImage={props.backgroundImage} banner={props.banner} />
      <section className="input-section">
        <input
          className="form"
          type="text"
          name="name"
          placeholder="Name"
          value={props.name}
          onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="section"
          placeholder="Section"
          value={props.section}
          onChange={props.handleChange}
        />
        <input
          className="form"
          type="text"
          name="image"
          placeholder="Image"
          value={props.image}
          onChange={props.handleChange}
        />
        <button onClick={() => props.handleSubmit()}>Submit</button>
      </section>
    </div>
  )
}

export default MissionStatement
