import TrollFace from '../assets/Troll-Face.svg'

function Header () {
    return (
        <div className="header">
            <img src={TrollFace} className='header--image'></img>            
            <p className='header--text'>Meme Generator</p>            
        </div>
    )
}

export default Header