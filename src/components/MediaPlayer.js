import React from 'react'

export default function MediaPlayer() {
    return (
        <div>
            <audio controls="controls" autoPlay id="audio_player">
                <source src="../../assets/sounds/theme_song.mp3" type="audio/mpeg"/>
                <source src="../../assets/sounds/theme_song(ogg).ogg" type="audio/ogg"/>
                <p>Your browser does not support the audio element.</p>
            </audio>
        </div>
    )
}
