import React, { useState } from 'react'
import Translater from './Translater'

export default function TranslatedPicture(props) {
    const [lang, setLang] = useState(props.imgTop ? 'en' : 'co');
    const handleClick = (arg) => {
        setLang(arg);
    }

    return (
        <div className='picture-container'>
            <img className={`${props.lg === "fr" ? "selected" : ""} speaking image-1`} src={`${props.imgSrc}.png`}></img>
            <img className={`${lang === "en" ? "visible" : ""} speaking image-2`} src={`${props.imgSrc}-en.png`}></img>
            <img className={`${lang === "fr" ? "visible" : ""} speaking image-2`} src={`${props.imgSrc}-fr.png`}></img>
            <img className={`${lang === "co" ? "visible" : ""} speaking image-2`} src={`${props.imgSrc}-co.png`}></img>
            <Translater clickHandler={(arg)=>{handleClick(arg)}} className="translater" lg={lang} imgTop={props.imgTop}/>
        </div>
    )
}
