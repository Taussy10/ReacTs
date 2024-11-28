import { useContext } from 'react'
import { TryContext} from './Context'
const Try = () => {
    const getTryContext = useContext(TryContext)
    // you have to use useContext to the context 
  return (
    <div>{getTryContext}</div>
  )
}

export default Try