/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { GlobalContext } from '../context/ContextProvider';

const Card = ( ) => {

  const {value, setValue} = useContext(GlobalContext)

    console.log( 'Card Component' )
    console.log( value )

    
  const handleClick = () => {  
      setValue(value + 1)
    }

    
  return (
    <div onClick={handleClick}>Card { value }</div>
  )
}

export default Card