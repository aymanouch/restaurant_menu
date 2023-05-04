import React from 'react'
import './home.css';
function Home() {
  return (
    <div className="Home" id="home">
      <div className="box-container_homeimg">
          <div className="title_big-restaurant-name">
            <h1>Restaurant Name</h1>
            <p>for nice experience visit us</p>
          </div>
          <div className="container-btn">
             <a href="/menu">menu</a>
          </div>
        </div>
    </div>
  )
}

export default Home;