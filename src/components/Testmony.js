import React from 'react'

function Testmony({img,h2,p,svg,testim}) {
  return (
    <div className='testo-card'>
      <img src={img} alt="" />
      <div>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
      <div className="svgs">
        <span>{svg}</span>
        <span>{svg}</span>
        <span>{svg}</span>
        <span>{svg}</span>
        <span>{svg}</span>
      </div>
      <p className='p'>{testim}</p>
    </div>
  )
}

export default Testmony
