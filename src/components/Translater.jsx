import React from 'react'

export default function Translater(props) {
    const handleClick = (e) => {
        props.clickHandler(e.target.attributes.getNamedItem("data-tag").value);
    }

  return (
    <div className={`flags ${props.imgTop ? "flags-top" : "flags-bottom"}`}>
        <div data-tag='en' onClick={handleClick} className={`lg-btn ${props.lg === "en" ? "selected" : ""}`}>En</div>
        <div data-tag='fr' onClick={handleClick} className={`lg-btn ${props.lg === "fr" ? "selected" : ""}`}>Fr</div>
        <div data-tag='co' onClick={handleClick} className={`lg-btn ${props.lg === "co" ? "selected" : ""}`}>Co</div>
    </div>
  )
}
