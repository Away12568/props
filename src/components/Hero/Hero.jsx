import React from 'react'
import "./Hero.scss"


const Hero = ({name="скоро будет..." , img ="/soon.webp", } ) => {
  return (
    <>
    <div className="container">
      <div className="card">
         <img src={img} alt="" />
          <h1>{name}</h1>
          <p>52 g</p>

          <p>520$</p>
          <button>buy</button>
      </div>
      </div>
    </>
  )
}

export default Hero
