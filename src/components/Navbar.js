import React from 'react'
import Home from '../pages/Home';


function Navbar() { 
  return (
    <div className='navbar slows'>
        <img src={require('../img/Vault-Logo.webp')} alt="" />
      <div className="nav-links">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#apps">apps</a>
        <a href="#why-us">why us</a>
        <a href="">pricing</a>
        <a href="">feedback</a>
      </div>
      <div className="btn-cont">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="480" height="480">
                <path d="M15 3C10.398 3 5.6113281 4.0371094 5.6113281 4.0371094L5.6074219 4.0410156 A 2 2 0 0 0 4 6L4 12C4 22.398 14.021484 26.744141 14.021484 26.744141 A 2 2 0 0 0 15 27 A 2 2 0 0 0 15.974609 26.744141L15.978516 26.744141C15.979516 26.744141 26 22.398 26 12L26 6 A 2 2 0 0 0 24.388672 4.0371094C24.388672 4.0371094 19.602 3 15 3 z M 21 9C21.25575 9 21.511531 9.0974688 21.707031 9.2929688C22.098031 9.6839688 22.098031 10.316031 21.707031 10.707031L14.146484 18.267578C13.958484 18.455578 13.704453 18.560547 13.439453 18.560547C13.174453 18.560547 12.919422 18.455578 12.732422 18.267578L9.2792969 14.814453C8.8882969 14.423453 8.8882969 13.791391 9.2792969 13.400391C9.6702969 13.009391 10.302359 13.009391 10.693359 13.400391L13.439453 16.146484L20.292969 9.2929688C20.488469 9.0974688 20.74425 9 21 9 z" />
            </svg>
            login
        </h1>
        <button>dark mode</button>
      </div>
    </div>
  )
}
export default Navbar
