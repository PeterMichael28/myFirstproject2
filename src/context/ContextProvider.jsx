import { createContext, useState } from "react";


export const GlobalContext = createContext()


// eslint-disable-next-line react/prop-types
const GlobalProvider = ({children}) => {

const [value, setValue] = useState(0)
console.log('context')

    return <GlobalContext.Provider value={{value, setValue}}>
        {children}
    </GlobalContext.Provider>
};

export default GlobalProvider;