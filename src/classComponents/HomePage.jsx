import React, { useContext } from 'react'
import ImageHeader from './ImageHeader';
import SearchInput from './SearchInput';
import { SearchContext } from '../context/SearchContext';
import { themeContext } from '../context/themeContext';
import ImageContainer from './ImageContainer';

const HomePage = () => {
    const {isLoading, data} = useContext(SearchContext)
    const { theme } = useContext( themeContext );

  return (
    <main className={`${theme}`}>

    <div className='bg-[#f5f5f5] text-black dark:bg-[#010101] dark:text-white '>
        <ImageHeader/>
      <SearchInput />
       {isLoading && <div className="loader"></div>}
       {!data || data.length === 0 && !isLoading && <h2 className='mt-24 text-6xl text-center mx-auto '>No Image Found</h2>}
        { data.length > 0 && !isLoading && <ImageContainer /> } 
    </div>
    </main>
  )
}

export default HomePage