/* eslint-disable react/prop-types */


import { useContext } from 'react';
import SingleImageCard from './SingleImageCard';
import { SearchContext } from '../context/SearchContext';




const ImageContainer = () => {
  const {data} = useContext(SearchContext)
  console.log('image container', data)
  return (
      <div className='flex justify-center gap-6 flex-wrap mt-14'>
          
          { data?.map( dat => <SingleImageCard key={ dat?.id } data={ dat } />)}
    </div>
  )
}

export default ImageContainer