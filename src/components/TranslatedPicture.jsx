import React, { useState } from 'react'
import Translater from './Translater'

export default function TranslatedPicture(props) {
    const [lang, setLang] = useState(props.imgTop ? 'en' : 'co');
    const handleClick = (arg) => {
        setLang(arg);
    }

    return (
        <div className='picture-container'>
            <img className="speaking" src={`${props.imgSrc}-${lang}.png`}></img>
            <Translater clickHandler={(arg)=>{handleClick(arg)}} className="translater" lg={lang} imgTop={props.imgTop}/>
        </div>
    )
}
