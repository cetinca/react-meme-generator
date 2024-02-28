import React from "react"
import getRandomMeme from "./MemesData"

function Meme() {
    const [item, setItem] = React.useState(getRandomMeme)
    const [topText, setTopText] = React.useState("")
    const [bottomText, setBottomText] = React.useState("")

    function handleItem(event) {
        setItem(getRandomMeme)
        event.preventDefault()
    }

    function handleTopText(event) {
        setTopText(event.target.value);
    };

    function handleBottomText(event) {
        setBottomText(event.target.value)
    }


    return (
        <div className="meme">
            <form className="meme-form">
                <div className="meme-form--inputs">
                    <input type="text" id="meme-form--inputs-top" placeholder="Shut Up!" value={topText} onChange={handleTopText}></input>
                    <input type="text" id="meme-form--inputs-bottom" placeholder="Take my money!" value={bottomText} onChange={handleBottomText}></input>
                </div>
                <button onClick={handleItem} type="submit" id="meme-form--submit">Get a new meme image</button>
            </form>
            <div className="image-container">
                <img className="image-container--image" src={item.url} alt="meme image"></img>
                <p className="image-container--top-text">{topText}</p>
                <p className="image-container--bottom-text">{bottomText}</p>
            </div>
        </div>
    )
}

export default Meme