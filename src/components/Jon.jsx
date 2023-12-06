
import { useState, useEffect } from "react"

export default function Jon() {
    const [num, setNum] = useState(0)
    const [ data, setData ] = useState()
    const [queryValue, setQueryValue] = useState('')
    const [params, setParams] = useState('')


    const fetchNews = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${params}&from=2023-11-14&to=2023-11-10&sortBy=popularity&apiKey=bdd267be640042fcbd908f838e9c16f4`)
        
        const data = await res.json()
        setData(data.articles)

    }
    
    useEffect( () => {
       
        if(params) {
          
            fetchNews()
        }
    }, [params])

const handleSearch = () => {
    setParams(queryValue)
}
    
    return (
        <div>
            <h1 className='text-2xl  justify-center item-center flex pb-10 font-bold  '>{num}</h1>

            <div className=" border-0 rounded-md gap-6 flex flex-wrap">

               <button onClick={() => setNum(num+1)}>click</button>

                <div className='flex max-w-[300px] items-center h-[40px] border border-blue-500 rounded-md overflow-hidden p-2'>
                    <input placeholder='Search here...' id='search' className='w-full h-full flex-1 border-none outline-none' value={ queryValue } onChange={(e) => setQueryValue(e.target.value) } />
                    <button className='bg-blue-500 text-white h-full flex items-center justify-center text-sm rounded-md border-none ' onClick={handleSearch}>Search</button>
                </div>


            {data && data.map((dat, i) => (
                <div key={dat?.author + i}>{ dat.author }</div>
            ))}
        </div>
        </div>

    )
}