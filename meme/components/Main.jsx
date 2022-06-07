import React from "react";
import MemeData from "./MemeData";

export default function Main() {
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bhm.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(MemeData);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);
  function getImage() {
    // const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(allMemeImages.length * Math.random());
    const url = allMemeImages[randomNumber].url;

    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <div className="form">
      <div className="input">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
      </div>

      <button onClick={getImage}>Get a meme image</button>
      <div className="memeImage">
        <img src={meme.randomImage} width="360px" height="200px" />
        <h2 className="text-top top">{meme.topText}</h2>
        <h2 className="text-bottom bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
