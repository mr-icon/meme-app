import React, {useState} from "react";
import jokesData from "./jokesData";


function Form() {
    const [memeImage, setMemeImage] = useState("")
    function getImage() {
        const meme = jokesData.data.memes
        const randomNumber = Math.floor(Math.random() * meme.length)
        setMemeImage(meme[randomNumber].url)
       
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input" />
                <input type="text" placeholder="Down Text" className="form-input"/>
                <button onClick={getImage} className="form-button">Get a new meme image</button>
            </div>
            <img src={memeImage} className="meme-image" />
        </main>
    )
}

export default Form;