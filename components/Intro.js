import React from 'react'
import './intro.css';
import img1 from './images/intro20.jpg'
import img2 from './images/intrto100.jpg'
import img3 from './images/intro30.jpg'
import img4 from './images/57165.png'
import vid1 from './videos/holaamigo.mp4'
import {
  Link
} from "react-router-dom";
export default function Intro() {
  localStorage.clear
  localStorage.setItem('dataKey', JSON.stringify('Player'));
  const handleKeyDown = (event) => {
    let inp = document.body.getElementsByClassName("textinp")[0]
    if (event.keyCode === 13) {
      let k = inp.value
      inp.value = null
      localStorage.setItem('dataKey', JSON.stringify(k));
      let alert = document.body.getElementsByClassName('alert')[0]
      alert.classList.add("opc1")
      alert.classList.remove("opc2")
      setTimeout(()=>{
        alert.classList.remove("opc1")
        alert.classList.add("opc2")
      },1000)
    }
  };
  function demn() {
    let inst = document.getElementById("carouselExample")
    let text = document.body.getElementsByClassName("form-control")[0]
    let baapu = document.body.getElementsByClassName("baapu")[0]
    let player = document.body.getElementsByClassName("Playerid")[0]
    let inst1 = document.body.getElementsByClassName("instructions")[0]
    inst1.classList.remove("green")
    inst1.classList.add("opacity1")
    player.classList.remove("white")
    player.classList.add("opacity1")
    text.classList.add("opacity1")
    baapu.classList.add("opacity")
    inst.classList.remove("hatja")
    inst.classList.add("animatedc")
  }
  function wapsi() {
    let inst = document.getElementById("carouselExample")
    let text = document.body.getElementsByClassName("form-control")[0]
    let baapu = document.body.getElementsByClassName("baapu")[0]
    let player = document.body.getElementsByClassName("Playerid")[0]
    let inst1 = document.body.getElementsByClassName("instructions")[0]
    player.classList.add("white")
    inst1.classList.add("green")
    text.classList.remove("opacity1")
    baapu.classList.remove("opacity")
    inst.classList.remove("animatedc")
    inst.classList.add("hatja")
  }
  return (
    <>
      <div className="parent">
        <div className="alert opc2">
          <p className='para'>Success:</p> Name added succesfully
        </div>
      </div>
      <div className="video">
        <video src={vid1} autoPlay loop muted />
      </div>
      <div className='baapu'>
        <div className='Playerid white mx-4 my-4'>
          <p>
            ENTER YOUR NAME
          </p>
          <input className="form-control textinp" aria-describedby="emailHelp" text="ravi" onKeyDown={handleKeyDown} />
        </div>
        <div className='play text-center'>
          <div className='introtext'>
            Click Play to Play
          </div>
          <Link to="/game"><button type="button" className="hulla btn btn-primary">Play</button></Link>
        </div>
        <div className='instructions green mx-4' onClick={demn}>
          Instructions
        </div>
      </div>
      <div id="carouselExample" className="carousel slide hatja">
        <div className="cross" onClick={wapsi}>
          <img src={img4} alt="" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="d-block w-50 container" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-50 container" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-50 container" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}
