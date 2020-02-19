import React from 'react'

function Header(props) {
    return (
        <div>
            <header>
                <img alt="Ghibli icon" src="../../assets/images/ghibli-icon-mobile.png" className="--mobile"></img>
                <img alt="Ghibli icon" src="../../assets/images/ghibli-icon.png" className="--large"></img>
                <h1>{props.title}</h1>
            </header>
        </div>
    )
}

export default Header;