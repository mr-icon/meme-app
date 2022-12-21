import React, {useState, useEffect} from "react";


function Form() {

    const [meme, setMeme] = useState({
        topText: "",
        BottomText: "",
        randomImage: ""
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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