import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import SearchContextProvider from './context/SearchContext';
import ThemeContextProvider from './context/themeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
<SearchContextProvider>
    <ThemeContextProvider>
    <App />
    </ThemeContextProvider>        
</SearchContextProvider>

)
