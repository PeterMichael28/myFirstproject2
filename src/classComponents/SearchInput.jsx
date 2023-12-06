import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext';

const SearchInput = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchContext)
  console.log('sEARCH INPUT')
  return (
      <div className='max-w-md rounded-md overflow-hidden mx-auto border border-teal-500 mt-4'>
          <input type="text" placeholder='Search...' className='appearance-none bg-transparent border-none w-full text-gray-800 py-1 px-4 focus:outline-none' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
  )
}

export default SearchInput