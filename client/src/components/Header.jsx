import {NavLink} from "react-router-dom"
export default function Header(){
    return(
        <header>
            <h1>Thomas Stranick</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    )
}