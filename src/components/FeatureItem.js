import React from 'react'
// import { Features } from './Features'

function FeatureItem({icon,head,p,next}) {
  return (
    <div className='features-card'>
      <span>{icon}</span>
      <h1>{head}</h1>
      <p>{p}</p>
      <span className='more'>{next}</span>
    </div>
  )
}

export default FeatureItem
