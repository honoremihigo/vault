import React from 'react'

function Download({svg,p,h2}) {
  return (
    <div className='download-card'>
      <span>{svg}</span>
      <div className="download-word">
        <p>{p}</p>
        <h2>{h2}</h2>
      </div>
    </div>
  )
}

export default Download
