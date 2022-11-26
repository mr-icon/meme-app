import React from "react";
import jokesData from './components/jokesData'


function Form() {
    let url
    function getImage() {
        const joke = jokesData.data.memes
        const randomNumber = Math.floor(Math.random() * joke.length)
        // url = joke[randomNumber].url
    }
    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input" />
                <input type="text" placeholder="Down Text" className="form-input"/>
                <button onClick={getImage} className="form-button">Get a new meme image</button>
            </div>
        </main>
    )
}

export default Form;