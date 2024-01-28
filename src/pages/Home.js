import React from 'react'
import bgimg from '../video/bg.mp4'
import {Features} from '../components/helpers'
import FeatureItem from '../components/FeatureItem'
import { apps_good_about } from '../components/helpers'
import { downloads } from '../components/helpers'
import Download from '../components/Download'
import { why_us } from '../components/helpers'
import Whyus from '../components/Whyus'

function Home() {
  return (
    <div className='body' id='home'>
      <div className="video">
        <video autoPlay muted loop>
          <source src={bgimg} />
        </video>
      </div>
      <div className="intro">
        <div className="intro-words">
              <div className='offer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144" height="144">
                  <path d="M4,24c0,11.028,8.972,20,20,20s20-8.972,20-20S35.028,4,24,4S4,12.972,4,24z M29.061,24.561l-8,8 C20.768,32.854,20.384,33,20,33s-0.768-0.146-1.061-0.439c-0.586-0.586-0.586-1.535,0-2.121l6.939-6.939l-6.939-6.939 c-0.586-0.586-0.586-1.535,0-2.121s1.535-0.586,2.121,0l8,8C29.646,23.025,29.646,23.975,29.061,24.561z" />
                </svg>
                <h3>offer is going on till friday ,$1.99/mo</h3>
              </div>
              <div className='words'>
                <h1>world no.1 app for online training</h1>
                <p>Use your data to access your favorite content from our growing roster of premier publishers.</p>
                <div className='videoplayer'>
                  <a href="">download - it is free</a>
                  <div className='playerbtn-cont'>      
                    <div className='playerbtn'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="384" height="384">
                          <path d="M18.109,10.336l-9-6C8.775,4.113,8.388,4,8,4C7.676,4,7.352,4.078,7.056,4.237C6.406,4.585,6,5.262,6,6v12c0,0.738,0.406,1.415,1.056,1.763C7.352,19.922,7.676,20,8,20c0.388,0,0.775-0.113,1.11-0.336l9-6C18.666,13.293,19,12.669,19,12S18.666,10.707,18.109,10.336z" />
                      </svg>
                    </div>
                    <a href="">play video</a>
                  </div>
                </div>
              </div>
              <div className="rate">
                <h1>a+ rating</h1>
                <p>avg rating 4.8 makes world most best apps</p>
              </div>
        </div>
        <div className="intro-imgs">
          <img src={require('../img/App-Landing-Hero-iPhone-1.webp')} alt="" />
          <div className='card-cont'>
            <div className="card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="480" height="480">
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,17.414l-4.707-4.707 l1.414-1.414L10,14.586l7.293-7.293l1.414,1.414L10,17.414z" />
              </svg>
                <p>Save up to 50% in Yearly plan.</p>
            </div>
            <img src={require('../img/App-Landing-Hero-iPhone-2.webp')} alt="" />
          </div>
        </div>
      </div>
      <div className="features" id='features'>
        <div className="features-words">
          <h1>Our Application Features.</h1>
          <p>With Vault, you can earn points by completing simple steps and using those points to gain subscription-free access to premium articles. Your feed is updated daily with fresh news stories.</p>
        </div>
        <div className="features-card-cont">
          {Features.map((featureItem,key)=>{
            return <FeatureItem key={key}  icon={featureItem.featuresvg} head={featureItem.header} p={featureItem.paragr} next={featureItem.more}/>
          })}
        </div>
      </div>
      <div className="app">
        <div className="img-cont">
          <img src={require('../img/App-Landing-Apps-Image.webp')} alt=""  className='app-landing-1'/>
          <img src={require('../img/App-Landing-Apps-Card.webp')} alt="" className='app-landing-2'/>
        </div>
        <div className="apps-words">
          <h1>grows your business by using our apps</h1>
          <p>We're freely supercharging everyone with the tools, products, and education to look and act like a rockstar.</p>
          <div className="good-about">
            {apps_good_about.map((app_good,key)=>{
              return <div className='good-about-des'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="480" height="480">
                  <path d="M20.292969 5.2929688L9 16.585938L4.7070312 12.292969L3.2929688 13.707031L9 19.414062L21.707031 6.7070312L20.292969 5.2929688 z" />
                </svg>
                <p>{app_good.good_about}</p>
              </div>
            })}
          </div>
          <div className="download">
            { downloads.map((download,key)=>{
              return <Download key={key} svg={download.appsvg} p={download.p} h2={download.h2} />
            })
            }
          </div> 
        </div>
      </div>
      <div className="why-us" >
        <div className="why-choose">
          <h3>over <span>150.000+ clients</span></h3>
          <h1>Why you choose Vault apps?</h1>
          <p>We provide you with a great baseline for designing and building for mobile.</p>
        </div>
        <div className="why-card-cont">
          { why_us.map((why_card,key)=>{
            return <Whyus key={key} whysvg={why_card.whysvg} h1={why_card.h1} />
          }) }
        </div>
      </div>
      <div className="key-features">
        <h2>features</h2>
        <h1>Features Check the key features of our apps</h1>
        <img src={require('../img/App-Landing-Features-BG.webp')} alt="" />
      </div>
    </div>
  )
}

export default Home
