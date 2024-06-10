import Icons from "./components/Icons"
export default function Resume(){
    return(
        <section className="resumeContainer">
            <div className='capabilities'>
                <h1>Capabilities</h1>
                <Icons/>
            </div>
            <h1>Resume</h1>
            <a href="/Stranick, Thomas Resume.pdf">Download Resume</a>
            <embed className="resume" src="/Stranick, Thomas Resume.pdf" width="1000px" height="1300px" />
            <embed className="resume-mobile" src="/Stranick, Thomas Resume.pdf" width="400px" height="600px" />
        </section>
    )
}