import React, { Component } from 'react'
import './nav.css';
import { Link } from 'react-router-dom' //importing Link from the installed package
class Navbar extends Component {
  state = { clicked: false }
  handleClick = () => { this.setState({ clicked: !this.state.clicked }) }
  // making the initial state of bar-icon false
  render() {
    return (
      <>
        <nav>
          {/* <a href="Home.js"><img src="/assets/nav.png" className='img1'/></a> */}
          <li><Link to='/'><img src="/assets/nav.png" className='img1' style={{ marginBottom: "2rem" }} /></Link></li>
          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/shoping'>Shop</Link></li>
              <li><Link to='/designer'>Design</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/log'><img src="/assets/acc.png" className='img2' /></Link></li>
              <li><Link to='/cart'><img src="/assets/shopping.png" className='img2' /></Link></li>

            </ul>

          </div>

          <div id="mobile" onClick={this.handleClick}>
            {/* calling the function handleClick from above */}

            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

          </div>
        </nav>
      </>
    )
  }
}

export default Navbar