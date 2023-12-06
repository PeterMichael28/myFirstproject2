/* eslint-disable react/prop-types */
import { createContext } from "react";
import {useState, useEffect} from 'react'

export const SearchContext = createContext({});



const SearchContextProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const res = await fetch(`https://pixabay.com/api/?key=40965269-d6cee237b09ec2796d6eaf9e5&q=${searchTerm}&image_type=photo`)

            const responseData =  await res.json();
            setData(responseData.hits)
            setIsLoading(false)
        } 
        const timeout = setTimeout(() => {

            if(searchTerm) {
    
                fetchData()
            }

        }, 500)


        return () => clearTimeout(timeout)
    }, [searchTerm])


    return <SearchContext.Provider value={{searchTerm, setSearchTerm, data, isLoading}}>
        {children}
    </SearchContext.Provider>
}


export default SearchContextProvider;