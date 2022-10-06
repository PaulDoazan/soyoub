import React from 'react'

export default function Translater(props) {
    const handleClick = (e) => {
        props.clickHandler(e.currentTarget.attributes.getNamedItem("data-tag").value);
    }

  return (
    <div className={`flags ${props.imgTop ? "flags-top" : "flags-bottom"}`}>
      <div className="chooseLang">
        <div>
          <span data-tag='en' id="en-lang" className={`${props.lg === "en" ? "selected" : ""} lang en-lang`} onClick={handleClick}>
            <svg viewBox="0 0 1000 500">
            <g
                id="g578"
                transform="scale(16.667)"
              >
              <rect
                  id="rect124"
                  style={{strokeWidth:'1pt',fill:'#000066'}}
                  height="30"
                  width="60"
                  y="0"
                  x="0"
              />
              <g
                  id="g584"
                >
                <path
                    id="path146"
                    style={{strokeWidth:'1pt',fill:'#ffffff'}}
                    d="m0 0v3.3541l53.292 26.646h6.708v-3.354l-53.292-26.646h-6.708zm60 0v3.354l-53.292 26.646h-6.708v-3.354l53.292-26.646h6.708z"
                />
                <path
                    id="path136"
                    style={{strokeWidth:'1pt',fill:'#ffffff'}}
                    d="m25 0v30h10v-30h-10zm-25 10v10h60v-10h-60z"
                />
                <path
                    id="path141"
                    style={{strokeWidth:'1pt',fill:'#cc0000'}}
                    d="m0 12v6h60v-6h-60zm27-12v30h6v-30h-6z"
                />
                <path
                    id="path150"
                    style={{strokeWidth:'1pt',fill:'#cc0000'}}
                    d="m0 30l20-10h4.472l-20 10h-4.472zm0-30l20 10h-4.472l-15.528-7.7639v-2.2361zm35.528 10l20-10h4.472l-20 10h-4.472zm24.472 20l-20-10h4.472l15.528 7.764v2.236z"
                />
              </g>
            </g>
          </svg>
          </span>
          <span data-tag='fr' id="fr-lang" className={`${props.lg === "fr" ? "selected" : ""} lang fr-lang`} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20"><rect width="30" height="20" fill="#ED2939"/><rect width="20" height="20" fill="#fff"/><rect width="10" height="20" fill="#002395"/></svg>
          </span>
          <span data-tag='co'id="co-lang" className={`${props.lg === "co" ? "selected" : ""} lang co-lang`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 60 40" fill="#fff">
              <title>Flag of the Comoros</title>
              <path d="m0 0h60v40H0z"/>
              <path fill="#ffd100" d="m0 0h60v10H0z"/>
              <path fill="#ef3340" d="m0 20h60v20H0z"/>
              <path fill="#003da5" d="m0 30h60v10H0z"/>
              <path fill="#009639" d="m30 20L0 40V0z"/>
              <path d="m12.519 9.809a8.25 8.25 0 0 0 0 16.382 8.5 8.5 0 1 1 0-16.382z"/>
              <g id="t">
                <path id="s" d="m12.519 10.75 1.029 3.166-2.693-1.957h3.329l-2.693 1.957z"/>
              </g>
            </svg>
          </span>
        </div>
      </div>
        {/* <span data-tag='en' onClick={handleClick} className={`lg-btn ${props.lg === "en" ? "selected" : ""} en-lang`}></span>
        <div data-tag='fr' onClick={handleClick} className={`lg-btn ${props.lg === "fr" ? "selected" : ""}`}>Fr</div>
        <div data-tag='co' onClick={handleClick} className={`lg-btn ${props.lg === "co" ? "selected" : ""}`}>Co</div> */}
    </div>
  )
}
