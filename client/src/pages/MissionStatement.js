import Landing from '../components/landing'
import Input from '../components/input'

const MissionStatement = () => {
  return (
    <div>
      <Landing />
      <section class="input-section">
        <Input placeholder="Name" />
        <Input placeholder="Section" />
        <Input placeholder="Image" />
        <button>Submit</button>
      </section>
    </div>
  )
}

export default MissionStatement
