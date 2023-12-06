
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './classComponents/HomePage';
import AboutPage from './classComponents/AboutPage';
import ContactPage from './classComponents/ContactPage';
import ImageHeader from './classComponents/ImageHeader';

 


function App() {

 
    return (

        <BrowserRouter>
                <ImageHeader />
            <Routes>
                <Route path='/myFirstproject2' element={<HomePage /> } />
                <Route path='/myFirstproject2/about' element={<AboutPage /> } />
                <Route path='/myFirstproject2/contact' element={<ContactPage />} />
        </Routes>
        
        </BrowserRouter>
    )

}

export default App;



