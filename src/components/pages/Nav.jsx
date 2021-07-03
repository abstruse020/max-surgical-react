import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import logoTop from '../../Assets/logo_top_v2.png'
import ImageHolder from '../Themes/ImageHolders/index.jsx'
function Nav (){
    return (
      <div className="shadow">
      <div className="row no-gutters">
          {/*<p className="d-flex justify-content-center w-100">
            <img src={logoTop} style={{maxWidth: '100px', maxHeight: '100px'}} className="col-md-6"/>
          </p>*/}
        <header className="col-md-6 py-3 m-0 d-flex justify-content-center row">
          <div className='d-flex'>
            <p className="d-flex justify-content-center w-100">
              <img id='logo_top' src={logoTop} style={{maxWidth: '120px', maxHeight: '100px'}}/>
            </p>
          </div>
          <div>
            <div>
              <span className='heading-text'>M</span>
              <span className='heading-text'>A</span>
              <span className='heading-text'>X&nbsp;</span>
              {/*</div>
              <div>*/}
              <span className='heading-text'>S</span>
              <span className='heading-text'>U</span>
              <span className='heading-text'>R</span>
              <span className='heading-text'>G</span>
              <span className='heading-text'>I</span>
              <span className='heading-text'>C</span>
              <span className='heading-text'>A</span>
              <span className='heading-text'>L&nbsp;</span>
            </div>
            <div>
            <span className='heading-text'>E</span>
            <span className='heading-text'>Q</span>
            <span className='heading-text'>U</span>
            <span className='heading-text'>I</span>
            <span className='heading-text'>P</span>
            <span className='heading-text'>M</span>
            <span className='heading-text'>E</span>
            <span className='heading-text'>N</span>
            <span className='heading-text'>T</span>
            <span className='heading-text'>S</span>
            </div>
          </div>
        </header>
        <div className="col-md-5  d-flex align-items-center justify-content-end">
          <div className=" ">
            <div className="px-3">
              <p className="d-flex justify-content-end">
                <i className="fas fa-phone m-1 header-text-on-white"></i> + 91 895 781 8808
              </p>
              <p className="d-flex justify-content-end">
                <i className="fas fa-envelope m-1 header-text-on-white"></i>
                <span className="">maxsurgicalequipments@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light px-1 primary-blue">
        <Link className="header-text-on-blue nav-link" to="."><i class="fas fa-home"></i>Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              // <li className="nav-item active">
              //   <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              // </li>
            }
            <li className="nav-item">
              <Link className="nav-link" to="about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="career">Career</Link>
            </li>
            {
              //<li className="nav-item dropdown">
            //   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //     Dropdown
            //   </a>
            //   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //     <a className="dropdown-item" href="#">Action</a>
            //     <a className="dropdown-item" href="#">Another action</a>
            //     <div className="dropdown-divider"></div>
            //     <a className="dropdown-item" href="#">Something else here</a>
            //   </div>
            // </li>
            }
            {
            // <li className="nav-item">
            //   <Link className="nav-link" to="/enquiry">Enquiry</Link>
            // </li>
            // <li className="nav-item">
            //   <a className="nav-link disabled" href="#">Disabled</a>
            // </li>
            }
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Nav
