import {NavLink} from "react-router-dom"
import { useState } from "react"

export default function Home(){
    const[toggleEnglish, setToggleEnglish] = useState(true);
    const[toggleChinese, setToggleChinese] = useState(false);
    const[toggleJapanese, setToggleJapanese] = useState(false);

    const toggleE = () => {
        setToggleEnglish(true)
        setToggleChinese(false)
        setToggleJapanese(false)
    }
    const toggleC = () => {
        setToggleEnglish(false)
        setToggleChinese(true)
        setToggleJapanese(false)
    }
    const toggleJ = () => {
        setToggleEnglish(false)
        setToggleChinese(false)
        setToggleJapanese(true)
    }

    return(
        <section className="home">
            <div className="profile">
                <img src="/images/Thomas_Stranick.jpg" alt="Thomas Image" />
                <div className="box"></div>
            </div>
            <div className="intro">
                {toggleEnglish && <div className="englishIntro">
                    <h1>Hi, welcome to my portfolio!</h1>
                    <h1>My name is Thomas Stranick and I am a student in the Rutgers Masters of Data Science progam.</h1>
                    <h1>I also recently completed the Rutgers Full Stack Web Development Bootcamp and am a graduate from Lafayette College with a major in Electrical and Computer Engineering.</h1>
                    <h1>Please take a look around my site and don't hesitate to reach out!</h1>
                </div>}
                {toggleChinese &&<div className="chineseIntro">
                    <h1>您好，欢迎你们来我的简历！</h1>
                    <h1>我的名字是Thomas Stranick, 现在我是学生在Rutgers Masters of Data Science program.</h1>
                    <h1>最近我还学完了Rutgers Full Stack Web Development Bootcamp 和在Lafayette 大学毕业了，有电脑工程学位。</h1>
                    <h1>请把我的网站看了看，别等联系！</h1>
                </div>}
                {toggleJapanese && <div className="japaneseIntro">
                    <h1>こんいちは。私のポートフォリオにようこそ！</h1>
                    <h1>私の名前はトマス・ストラニックです。今私はRutgers Masters of Data Scienseの大学院生です。</h1>
                    <h1>わたしはRutgers Full Stack Web Development Bootcamp 勉強しました。Lafayette 大学でコンピュータ工学専攻して卒業しました。</h1>
                    <h1>私のウェブサイトを見てくださ, 遠慮なく私には連絡ください。</h1>
                </div>}
                <NavLink to="/portfolio">Check out my Portfolio &#8594;</NavLink>
                <div className="language">
                    {(toggleChinese || toggleJapanese) && <button className="english" onClick={toggleE}>English</button>}
                    {(toggleEnglish || toggleJapanese) && <button className="chinese" onClick={toggleC}>中文</button>}
                    {(toggleEnglish || toggleChinese) && <button className="japanese" onClick={toggleJ}>日本語</button>}
                </div>
            </div>
            
        </section>
        
    )
}