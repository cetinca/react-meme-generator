import React from "react"

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function Meme() {
    const [memesData, setMemesData] = React.useState([])
    const [url, setUrl] = React.useState("")
    const [texts, setTexts] = React.useState({ topText: "", bottomText: "" })


    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemesData(data.data.memes)
            setUrl(getRandomItem(data.data.memes).url)

        }
        getMemes()

        return () => {
            // clean-up function
        }
    }, [])

    function handleUrl(event) {
        setUrl(getRandomItem(memesData).url)
        event.preventDefault()
    }

    function handleTexts(event) {
        const { name, value } = event.target
        setTexts(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    return (
        <div className="meme">
            <form className="meme-form">
                <div className="meme-form--inputs">
                    <input type="text" className="meme-form--inputs-top" placeholder="Shut Up!" name="topText" value={texts.topText} onChange={handleTexts}></input>
                    <input type="text" className="meme-form--inputs-bottom" placeholder="Take my money!" name="bottomText" value={texts.value} onChange={handleTexts}></input>
                </div>
                <button onClick={handleUrl} type="submit" className="meme-form--submit">Get a new meme image</button>
            </form>
            <div className="image-container">
                <img className="image-container--image" src={url} alt="meme image"></img>
                <p className="image-container--top-text">{texts.topText}</p>
                <p className="image-container--bottom-text">{texts.bottomText}</p>
            </div>
        </div>
    )
}

export default Meme