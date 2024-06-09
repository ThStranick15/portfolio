import {Html5Original, Css3Original, JavascriptOriginal, JqueryOriginal, BootstrapOriginal, TailwindcssOriginal, PostgresqlOriginal, ReactOriginal, ReactrouterOriginal, MongodbOriginal, MongooseOriginal, ExpressOriginal, NodejsOriginalWordmark, WebpackOriginal, NpmOriginalWordmark, JavaOriginalWordmark, VitejsOriginal, GraphqlPlain, SassOriginal, HandlebarsLine, HandlebarsOriginal} from 'devicons-react'
export default function Resume(){
    return(
        <section className="resumeContainer">
            <div className='capabilities'>
                <h1>Capabilities</h1>
                <div className='icons'>
                    <Html5Original size="50px"/>
                    <Css3Original size="50px"/>
                    <JavascriptOriginal size="50px"/>
                    <JqueryOriginal size="50px"/>
                    <BootstrapOriginal size="50px"/>
                    <TailwindcssOriginal size="50px"/>
                    <HandlebarsOriginal size="50px"/>
                    <PostgresqlOriginal size="50px"/>
                    <ExpressOriginal size="50px"/>
                    <NodejsOriginalWordmark size="50px"/>
                    <ReactOriginal size="50px"/>
                    <ReactrouterOriginal size="50px"/>
                    <MongodbOriginal size="50px"/>
                    <MongooseOriginal size="50px"/>
                    <GraphqlPlain size="50px"/>
                    <SassOriginal size="50px"/>
                    <WebpackOriginal size="50px"/>
                    <NpmOriginalWordmark size="50px"/>
                    <VitejsOriginal size="50px"/>
                    <JavaOriginalWordmark size="50px"/>
                </div>
            </div>
            <h1>Resume</h1>
            <a href="/Stranick, Thomas Resume.pdf">Download Resume</a>
            <embed src="/Stranick, Thomas Resume.pdf" width="1000px" height="1300px" />
        </section>
        
    )
}