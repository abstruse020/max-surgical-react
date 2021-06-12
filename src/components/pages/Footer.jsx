import React from 'react'
import PropTypes from 'prop-types'
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module

function socialMedia () {
  return(
  <div className="bg-light">
    <a className="btn btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-facebook-f"></i
    ></a>

  <a className="btn btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-twitter"></i
    ></a>

  <a className="btn btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-google"></i
    ></a>

  <a className="btn btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-instagram"></i
    ></a>

  <a className="btn btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-linkedin-in"></i
    ></a>

  <a className="btn btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-github"></i
    ></a>
</div>
  )
}
function socialMedia_option_2(){
  return(
    <div>
      <a href="" className="m-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="m-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="m-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="m-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="m-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="m-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  )
}

function Footer (){
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="justify-content-center my-auto">
          <span>Get connected with us on social networks:</span>
        </div>
        {socialMedia()}
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Max Surgical Equipments
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="https://storyset.com/idea" target="_blank">Idea illustrations by Storyset</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i className="fas fa-home me-3"></i>174 DH2 colony New Jankipuram<br/> Lucknow, UP</p>
              {
              // <p>
              //   <i className="fas fa-envelope"></i>
              //   <span>contact@maxsurgicalequipments.co.in</span>
              // </p>
              }
              <p>
                <i className="fas fa-envelope me-3"></i>
                <span>maxsurgicalequipments@gmail.com</span>
              </p>
              <p><i className="fas fa-phone me-3"></i> + 91 895 781 8808</p>
              {
              // <p><i className="fas fa-phone me-3"></i> + 91 895 781 8808</p>
              }
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Maxsurgicalequipments.co.in</a>
      </div>
    </footer>
  )
}

export default Footer
