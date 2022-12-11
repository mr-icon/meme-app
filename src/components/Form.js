import React, {useState} from "react";
import jokesData from "./jokesData";


function Form() {
    // const [memeImage, setMemeImage] = useState("")

    const [meme, setMeme] = useState({
        topText: "",
        BottomText: "",
        randomImage: ""
    })

    const [allMemeImage, setAllMemeImage] = useState(jokesData)
    function getImage() {
        const meme = jokesData.data.memes
        const randomNumber = Math.floor(Math.random() * meme.length)
        const url = meme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
       
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input" />
                <input type="text" placeholder="Bottom Text" className="form-input"/>
                <button onClick={getImage} className="form-button">Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme-image" />
        </main>
    )
}

export default Form;