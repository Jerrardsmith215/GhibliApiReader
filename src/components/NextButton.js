import React from 'react'

function NextButton(props) {
    return (
        <div>
            <img alt="forward arrow" src="/assets/images/arrow.png" id="nextButton" onClick={props.clickHandler}></img>
        </div>
    )
}

export default NextButton

