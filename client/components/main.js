import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props
  console.log('children', children)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">Essential Oils Help!</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="dropdown">
                <button className="dropbtn nav-link">Products</button>
                <div className="dropdown-content">
                  <Link to="/singleoils" className='nav-link-dark'>Single oils</Link>
                  <Link to='/proprietary' className='nav-link-dark'>Proprietary blends</Link>
                  <Link to='/onguard' className='nav-link-dark'>dōTERRA On Guard® Products</Link>
                  <Link to='/onguard' className='nav-link-dark'>dōTERRA Breathe® Products</Link>
                  <Link to='/onguard' className='nav-link-dark'>Deep Blue® Products</Link>
                  <Link to='/onguard' className='nav-link-dark'>DigestZen® Products</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link js-scroll-trigger">About</a>
            </li>
            <li className="nav-item">
              <a href="/team" className="nav-link js-scroll-trigger">Team</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link js-scroll-trigger">Contact</a>
            </li>
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <Link to='/home'>Home</Link>
              <a href='#' onClick={handleClick}>Logout</a>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
            </div>
        }
        <li>
        {isLoggedIn ? <a href={`/cart/`}><span className='fa fa-shopping-cart fa-3x'></span></a> : <a href={`/cart`}><span className='fa fa-shopping-cart fa-3x'></span></a>}
      </li>
    </ul>
  </div>
</div>
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
