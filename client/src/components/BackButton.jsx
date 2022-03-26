import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  
  
const navigate = useNavigate()

  const navHome = () => {
    navigate(`/`)
  }
  return (
    <div>
      <img
      className='backbutton'
      onClick={()=>navHome()}
      src="https://fontmeme.com/permalink/220326/d3697ee7638c37489540b534cc52d272.png"/>
    </div>
  )
}
export default BackButton