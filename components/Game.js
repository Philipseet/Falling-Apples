import React from 'react'
import './Game.css';
import { useState } from 'react'
import img from './images/img1.png'
import { useNavigate } from 'react-router-dom';

export default function Game() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0)
  const asd = () => {
    let start = document.body.getElementsByClassName("amigo")[0]
    let sc = document.body.getElementsByClassName("score")[0]
    sc.classList.remove("opc")
    let imgm = document.body.getElementsByClassName("imgmove")[0]
    imgm.removeAttribute("hidden")
    imgm.classList.remove("opc")
    start.classList.remove("bgb");
    start.classList.add("bgv");
    let btn = document.getElementById("jjt")
    btn.style.opacity = 0;
    let apple = document.getElementById("hola")
    let apple1 = document.getElementById("hola1")
    let bomb = document.getElementById("bomb")
    setTimeout(() => {
      btn.setAttribute("hidden", "true")
    })
    let ktpr = setInterval(() => {
      let v = screen.width - 50
      let p = Math.floor(Math.random() * v) + 50;
      apple.style.left = `${p}px`;
      apple.style.animation = `applemovement linear normal`
      apple.style.animationDuration = "3000ms"
      apple.removeAttribute("hidden")
      setTimeout(() => {
        apple.style.animation = "none"
        apple.setAttribute("hidden", "true")
      }, 2999);
    }, 4000)
    let imp = setTimeout(() => {
      clearInterval(ktpr)
      let id2 = setInterval(() => {
        let v = screen.width - 50
        let p = Math.floor(Math.random() * v) + 50;
        apple.style.left = `${p}px`;
        apple.style.animation = `applemovement linear normal`
        apple.style.animationDuration = "1500ms"
        apple.removeAttribute("hidden")
        setTimeout(() => {
          apple.style.animation = "none"
          apple.setAttribute("hidden", "true")
        }, 1499);
      }, 2000)
      let n1 = setInterval(() => {
        let v = screen.width - 50
        let p = Math.floor(Math.random() * v) + 50;
        bomb.style.left = `${p}px`;
        bomb.style.animation = `applemovement linear normal`
        bomb.style.animationDuration = "2000ms"
        bomb.removeAttribute("hidden")
        setTimeout(() => {
          bomb.style.animation = "none"
          bomb.setAttribute("hidden", "true")
        }, 1999);
      }, 6000)
      let timerId = setInterval(() => {
        let bucket = document.body.getElementsByClassName("imgmove")[0]
        let j = parseInt(window.getComputedStyle(bucket).getPropertyValue("top"))
        let p = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"))
        let apple = document.getElementById("hola")
        let k = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"))
        let l = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"))
        if (k > j + 30 && k < j + 50)
          if (l > p && l < p + 80) {
            apple.style.animation = "none"
            apple.setAttribute("hidden", "true")
            clearInterval(n1)
            clearInterval(timerId)
            alert(`you lost lol/n your score is ${score}`)
          }
      }, 10)
    }, 15000)
    let wild = setTimeout(() => {
      let id3 = setInterval(() => {
        let v = screen.width - 50
        let p = Math.floor(Math.random() * v) + 50;
        apple1.style.left = `${p}px`;
        apple1.style.animation = `applemovement linear normal`
        apple1.style.animationDuration = "1500ms"
        apple1.removeAttribute("hidden")
        setTimeout(() => {
          apple1.style.animation = "none"
          apple1.setAttribute("hidden", "true")
        }, 1500);
      }, 1750)
    }, 30300)
    let Timed = setInterval(() => {
      let bucket = document.body.getElementsByClassName("imgmove")[0]
      let j = parseInt(window.getComputedStyle(bucket).getPropertyValue("top"))
      let p = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"))
      let apple = document.getElementById("hola")
      let k = parseInt(window.getComputedStyle(apple).getPropertyValue("top"))
      let l = parseInt(window.getComputedStyle(apple).getPropertyValue("left"))
      let bgh = document.body.getElementsByClassName("amigo")[0]
      let height = bgh.offsetHeight
      if (k > j + 30 && k < j + 50)
        if (l > p && l < p + 80) {
          setScore(prevScore => prevScore + 1)
          apple.style.animation = "none"
          apple.setAttribute("hidden", "true")
          console.log(score)
        }
      if (k > height-20) {
        apple.style.animation = "none"
        apple.setAttribute("hidden", "true")
        let end = document.body.getElementsByClassName("End")[0]
        let player = document.body.getElementsByClassName("playername")[0]
        let a = localStorage.getItem('dataKey')
        let b = document.body.getElementsByClassName("sc")[0].innerHTML
        player.innerHTML = `Hey ${a} your score is ${b}`
        end.removeAttribute("hidden")
        clearInterval(Timed1)
        clearInterval(timerId)
        clearTimeout(Timed)
        clearInterval(ktpr)
        clearInterval(imp)
      }
      console.log(k);
      console.log(height)
    }, 10)
    let Timed1 = setInterval(() => {
      let bucket = document.body.getElementsByClassName("imgmove")[0]
      let j = parseInt(window.getComputedStyle(bucket).getPropertyValue("top"))
      let p = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"))
      let apple = document.getElementById("hola")
      let k = parseInt(window.getComputedStyle(apple1).getPropertyValue("top"))
      let l = parseInt(window.getComputedStyle(apple1).getPropertyValue("left"))
      let bgh = document.body.getElementsByClassName("amigo")[0]
      let height = bgh.offsetHeight
      if (k > j + 30 && k < j + 50)
        if (l > p && l < p + 80) {
          setScore(prevScore => prevScore + 1)
          apple1.style.animation = "none"
          apple1.setAttribute("hidden", "true")
          console.log(score)
        }
      if (k > height-20) {
        apple.style.animation = "none"
        apple.setAttribute("hidden", "true")
        let end = document.body.getElementsByClassName("End")[0]
        let player = document.body.getElementsByClassName("playername")[0]
        let a = localStorage.getItem('dataKey')
        let b = document.body.getElementsByClassName("sc")[0].innerHTML
        player.innerHTML = `Hey ${a} your score is ${b}`
        end.removeAttribute("hidden")
        clearInterval(timerId)
        clearInterval(Timed1)
        clearTimeout(Timed)
        clearInterval(ktpr)
        clearInterval(imp)      
      }
    }, 10)
    let timerId = setInterval(() => {
      let bucket = document.body.getElementsByClassName("imgmove")[0]
      let j = parseInt(window.getComputedStyle(bucket).getPropertyValue("top"))
      let p = parseInt(window.getComputedStyle(bucket).getPropertyValue("left"))
      let apple = document.getElementById("hola")
      let k = parseInt(window.getComputedStyle(bomb).getPropertyValue("top"))
      let l = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"))
      
      if (k > j + 30 && k < j + 50)
        if (l > p && l < p + 80) {
          apple.style.animation = "none"
          apple.setAttribute("hidden", "true")
          let end = document.body.getElementsByClassName("End")[0]
          let player = document.body.getElementsByClassName("playername")[0]
          let a = localStorage.getItem('dataKey')
          let b = document.body.getElementsByClassName("sc")[0].innerHTML
          player.innerHTML = `Hey ${a} your score is ${b}`
          end.removeAttribute("hidden")
          clearInterval(timerId)
          clearInterval(Timed1)
          clearTimeout(Timed)
          clearInterval(ktpr)
          clearInterval(imp)
        }
    }, 10)
  }
  function handleclick(){
    var cursor = document.body.getElementsByClassName("imgmove")[0]
    document.addEventListener("mousemove",function(e){
      var x = e.clientX
      var y = e.clientY
      cursor.style.top = y+"px"
      cursor.style.left = x+"px"
    })
  }
  return (
    <>
      <div className='End' hidden>
        <h2 className='gameover'>Game Over</h2>
        <p className='playername'></p>
        <h3 className='getbetter'>Get Better</h3>
        <button className='btn btn-danger endbtn' onClick={() => navigate("/")}>Home </button>
      </div>
      <div className='amigo bgb'>
        <div className="cover">
          <button type="button" className="btn btn-primary" id='jjt' onClick={asd}>Start Game</button>
        </div>
        <div className="score opc">
          Your Score = <p className='sc'>{score}</p>
        </div>
        <div className="go">
          <div className="imgmove opc" onClick={handleclick} hidden>
            <img src={img} alt="" id='dh' />
          </div>
        </div>
        <img src="https://clipart-library.com/img/1565435.png" alt="" height={"30px"} hidden id='hola' />
        <img src="https://clipart-library.com/img/1565435.png" alt="" height={"30px"} hidden id='hola1' />z
        <img src="https://pngimg.com/d/bomb_PNG1.png" alt="" id='bomb' height={"35px"} hidden />
      </div>
    </>
  )
}
