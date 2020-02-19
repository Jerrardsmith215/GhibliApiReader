import React from 'react'

function PrevButton(props) {
    return (
        <div>
            <img alt="previous arrow" src="/assets/images/arrow.png" id="prevButton" onClick={props.clickHandler}></img>
        </div>
    )
}

export default PrevButton

