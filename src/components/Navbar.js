import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const renderColor1 = () => {
    document.body.style.backgroundColor = '#421216'
    props.showColor('danger')
  }

  const renderColor2 = () => {
    document.body.style.backgroundColor = '#584816'
    props.showColor('warning')
  }

  const renderColor3 = () => {
    document.body.style.backgroundColor = '#0b3421'
    props.showColor('success')
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.aboutText}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className="btn-group mx-3" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger" onClick={props.mode==='dark'&&renderColor1}></button>
          <button type="button" className="btn btn-warning" onClick={props.mode==='dark'&&renderColor2}></button>
          <button type="button" className="btn btn-success" onClick={props.mode==='dark'&&renderColor3}></button>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string, 
    aboutText: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Title',
    aboutText: 'About here'
};
