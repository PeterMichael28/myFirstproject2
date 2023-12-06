import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';
import { themeContext } from '../context/themeContext';
import {Link} from 'react-router-dom'
const ImageHeader = () => {
  
  const {searchTerm} = useContext(SearchContext)
  const { theme, setTheme } = useContext( themeContext );

  const handleMode = () => {
    if ( theme === 'light' ) return setTheme( 'dark' )
    setTheme('light')
  
  }
  return (
      <header className='w-full h-[60px] py-2 px-8 container mx-auto shadow-lg flex justify-between items-center'>
          <h2 className='text-slate-700 text-2xl font-bold'>Logo</h2>

          <nav>
              <ul className='flex items-center justify-center text-black dark:text-white gap-x-7'>
                  <li>{searchTerm}</li>
          <li> <Link to='/'>Home </Link> </li>
          <li> <Link to='/about'>About </Link> </li>
          <li> <Link to='/contact'>Contact </Link> </li>
  
          <li onClick={handleMode} className='bg-black/80 text-white p-3 rounded-md text-sm cursor-pointer dark:bg-[#f5f5f5] dark:text-black'>Toggle Mode</li>
              </ul>
          </nav>

     
    </header>
  )
}

export default ImageHeader