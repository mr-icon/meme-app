import React, { useState, useEffect } from "react";

function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    BottomText: "",
    randomImage: "",
  });
  const [imageHeight, setImageHeight] = useState(0)
  const [allMemes, setAllMemes] = useState([]);
  const populateMemes = (memes) => {
    setAllMemes(memes);
  };
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => populateMemes(data.data.memes));
  }, []);

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    const img = new Image();
    img.src = url;
    img.onload = () => {
        setImageHeight(img.height)
    };
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }));
  }
  const upperText = (meme) => {
    return (
      <h2 className="meme-top">
        {meme.topText}
      </h2>
    );
  };
  const bottomText = (meme) => {
    let textHeight = Math.floor(imageHeight * 0.5);
    return (
      <h2 className="meme-bottom" style={{ top: textHeight}}>
        {meme.bottomText}
      </h2>
    );
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          onChange={handleChange}
          value={meme.topText}
          className="form-input"
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          onChange={handleChange}
          value={meme.bottomText}
          className="form-input"
        />
        <button onClick={getImage} className="form-button">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        {upperText(meme)}
        {bottomText(meme)}
      </div>
    </main>
  );
}

export default Form;
