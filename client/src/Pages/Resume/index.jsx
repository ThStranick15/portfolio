import Icons from "./components/Icons"
import DataIcons from "./components/DataIcons"
export default function Resume(){
    return(
        <section className="resumeContainer">
            <div className='capabilitiesData'>
                <h1>Data Science Capabilities</h1>
                <DataIcons/>
            </div>
            <div className='capabilities'>
                <h1>Web Dev Capabilities</h1>
                <Icons/>
            </div>
            <h1>Resume</h1>
            <a href="/Stranick, Thomas Resume.pdf">Download Resume</a>
            <embed className="resume" src="/Stranick, Thomas Resume.pdf" width="1000px" height="1300px" />
            <embed className="resume-mobile" src="/Stranick, Thomas Resume.pdf" width="400px" height="600px" />
        </section>
    )
}