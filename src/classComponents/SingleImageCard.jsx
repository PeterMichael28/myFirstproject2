/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { themeContext } from '../context/themeContext';

const SingleImageCard = ({data}) => {
     console.log("single image card")

     const { theme, setTheme } = useContext( themeContext );

    const handleMode = () => {
        if ( theme === 'light' ) return setTheme( 'dark' );
        setTheme( 'light' );

    }
  return (
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <img src={ data?.webformatURL } alt={ data?.user} className='w-full max-h-[250px]'/>

          <div className='py-3 px-5'>
              <p className='font-bold text-purple-500 text-xl mb-2'>
                  Photo by {data?.user}
              </p>

              <ul>

              <li>
                      <strong>Likes: </strong>
                      {data?.likes}
                  </li>
                  <li>
                      <strong>Views: </strong>
                      {data?.views}
                  </li>



                  <li>
                      <strong>Downloads: </strong>
                      {data?.downloads}
                  </li>
{/* 
                  <li onClick={handleMode} className='bg-black/80 text-white p-3 rounded-md text-sm cursor-pointer dark:bg-[#f5f5f5] dark:text-black'>Toggle Mode</li> */}
              </ul>
          </div>
    </div>
  )
}

export default SingleImageCard