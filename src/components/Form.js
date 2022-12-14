import React, {useState} from "react";
import jokesData from "./jokesData";


function Form() {

    const [meme, setMeme] = useState({
        topText: "",
        BottomText: "",
        randomImage: ""
    })

    function getImage() {
        const memeArray = jokesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" name="topText" placeholder="Top Text" onChange={handleChange} value={meme.topText} className="form-input" />
                <input type="text" name="bottomText" placeholder="Bottom Text" onChange={handleChange} value={meme.bottomText} className="form-input"/>
                <button onClick={getImage} className="form-button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                 <h2 className="meme-top">{meme.topText}</h2>
                 <h2 className="meme-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Form;