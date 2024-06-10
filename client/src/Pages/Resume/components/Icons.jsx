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
            {(index >= 0 && index<=3) &&  <i className="devicon-html5-plain colored"></i>}
            {(index >= 1 && index <=4) && <i class="devicon-css3-plain colored"></i>}
            {(index >= 2 && index <=5) && <i class="devicon-javascript-plain colored"></i>}
            {(index >= 3 && index <=6) && <i class="devicon-jquery-plain colored"></i>}
            {(index >= 4 && index <=7) && <i class="devicon-bootstrap-plain colored"></i>}
            {(index >= 5 && index <=8) && <i class="devicon-tailwindcss-original colored"></i>}
            {(index >= 6 && index <=9) && <i class="devicon-handlebars-original colored"></i>}
            {(index >= 7 && index <=10) && <i class="devicon-postgresql-plain colored"></i>}
            {(index >= 8 && index <=11) && <i class="devicon-express-original colored"></i>}
            {(index >= 9 && index <=12) && <i class="devicon-nodejs-plain colored"></i>}
            {(index >= 10 && index <=13) && <i class="devicon-react-original colored"></i>}
            {(index >= 11 && index <=14) && <i class="devicon-reactrouter-plain colored"></i>}
            {(index >= 12 && index <=15) && <i class="devicon-mongodb-plain colored"></i>}
            {(index >= 13 && index <=16) && <i class="devicon-mongoose-original colored"></i>}
            {(index >= 14 && index <=17) && <i class="devicon-graphql-plain colored"></i>}
            {(index >= 15 && index <=18) && <i class="devicon-sass-original colored"></i>}
            {(index >= 16 && index <=19) && <i class="devicon-webpack-plain colored"></i>}
            {(index >= 17 || index <=0) && <i class="devicon-npm-original-wordmark colored"></i>}
            {(index >= 18 || index <=1) && <i class="devicon-vitejs-plain colored"></i>}
            {(index >= 19 || index <=2) && <i class="devicon-java-plain colored"></i>}
        </div>
        <div className='icons'>
            <i className="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-jquery-plain colored"></i>
            <i class="devicon-bootstrap-plain colored"></i>
            <i class="devicon-tailwindcss-original colored"></i>
            <i class="devicon-handlebars-original colored"></i>
            <i class="devicon-postgresql-plain colored"></i>
            <i class="devicon-express-original colored"></i>
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-reactrouter-plain colored"></i>
            <i class="devicon-mongodb-plain colored"></i>
            <i class="devicon-mongoose-original colored"></i>
            <i class="devicon-graphql-plain colored"></i>
            <i class="devicon-sass-original colored"></i>
            <i class="devicon-webpack-plain colored"></i>
            <i class="devicon-npm-original-wordmark colored"></i>
            <i class="devicon-vitejs-plain colored"></i>
            <i class="devicon-java-plain colored"></i>
        </div>
        </>
    
    )
}