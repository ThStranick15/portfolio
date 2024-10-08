import {NavLink} from "react-router-dom"

export default function Home(){
    return(
        <section className="home">
            <div className="profile">
                <img src="/images/Thomas_Stranick.jpg" alt="Thomas Image" />
                <div className="box"></div>
            </div>
            <div className="intro">
                <h1>Hi, welcome to my portfolio!</h1>
                <h1>My name is Thomas Stranick and I am a Software Developer.</h1>
                <h1>I recently completed the Rutgers Full Stack Web Development Bootcamp and am a graduate from Lafayette College with a major in Electrical and Computer Engineering.</h1>
                <h1>Please take a look around my site and don't hesitate to reach out!</h1>
                <NavLink to="/portfolio">Check out my Portfolio &#8594;</NavLink>
            </div>
            
        </section>
        
    )
}