import {Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'
import Contact from '../Pages/Contact'
import Resume from '../Pages/Resume'

export default function Navigate(){
    return(
        <section>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/resume' element={<Resume/>}/>
            </Routes>
        </section>
        
    )
}