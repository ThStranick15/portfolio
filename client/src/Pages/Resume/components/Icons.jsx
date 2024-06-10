import {Html5Original, Css3Original, JavascriptOriginal, JqueryOriginal, BootstrapOriginal, TailwindcssOriginal, PostgresqlOriginal, ReactOriginal, ReactrouterOriginal, MongodbOriginal, MongooseOriginal, ExpressOriginal, NodejsOriginalWordmark, WebpackOriginal, NpmOriginalWordmark, JavaOriginalWordmark, VitejsOriginal, GraphqlPlain, SassOriginal, HandlebarsLine, HandlebarsOriginal} from 'devicons-react'
import { useEffect, useState } from 'react';

export default function Icons(){
    const [index, setIndex] = useState(0)

    function rotate(){
        setTimeout(()=>{
            if(index<19){
                setIndex(index + 1)
            }else{
                setIndex(0)
            }
            
        },"1000")
    }

    useEffect(()=>{
        rotate()
        console.log(index)
    },[index])

    return(
        <>
        <div className='icons-mobile'>
            {index >= 0 && index<=3 && <Html5Original size="50px"/>}
            {index >= 1 && index <=4 && <Css3Original size="50px"/>}
            {index >= 2 && index <=5 &&<JavascriptOriginal size="50px"/>}
            {index >= 3 && index <=6 &&<JqueryOriginal size="50px"/>}
            {index >= 4 && index <=7 &&<BootstrapOriginal size="50px"/>}
            {index >= 5 && index <=8 &&<TailwindcssOriginal size="50px"/>}
            {index >= 6 && index <=9 &&<HandlebarsOriginal size="50px"/>}
            {index >= 7 && index <=10 &&<PostgresqlOriginal size="50px"/>}
            {index >= 8 && index <=11 &&<ExpressOriginal size="50px"/>}
            {index >= 9 && index <=12 &&<NodejsOriginalWordmark size="50px"/>}
            {index >= 10 && index <=13 &&<ReactOriginal size="50px"/>}
            {index >= 11 && index <=14 &&<ReactrouterOriginal size="50px"/>}
            {index >= 12 && index <=15 &&<MongodbOriginal size="50px"/>}
            {index >= 13 && index <=16 &&<MongooseOriginal size="50px"/>}
            {index >= 14 && index <=17 &&<GraphqlPlain size="50px"/>}
            {index >= 15 && index <=18 &&<SassOriginal size="50px"/>}
            {index >= 16 && index <=19 &&<WebpackOriginal size="50px"/>}
            {(index >= 17 || index <=0) &&<NpmOriginalWordmark size="50px"/>}
            {(index >= 18 || index <=1) &&<VitejsOriginal size="50px"/>}
            {(index >= 19 || index <=2) &&<JavaOriginalWordmark size="50px"/>}
        </div>
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
        </>
    
    )
}