import React from 'react'
import PropTypes from 'prop-types'
import heroSectionImage from '../../Assets/heroSectionImage.svg'
import heroSectionImage2 from '../../Assets/heroSectionImage2.jpg'

const heroSection3 = () => {
  return(
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

const heroSection = () => {
  return(
      <div className='row no-gutters m-3 shadow rounded-lg'>
        <div className='col-md-6'>
          <img src={heroSectionImage} alt='No Image' className=''/>
        </div>
        <div className='col-md-6 primary-blue rounded-lg'>
          <div className='p-4 d-flex justify-content-center h-100'>
            <h1 className='header-text-on-blue m-auto'>
              We Care,<br/>
              We Create
            </h1>
          </div>
        </div>
    </div>
  )
}

const heroSection2 = () => {
  return(
    <div className='row no-gutters shadow rounded-lg m-3'>
      <div className='rounded-lg'>
        <img src={heroSectionImage2} alt='No Imgae' className='w-100 rounded-lg' />
      </div>
    </div>
  )
}


function Homepage(){
  return (
    <div>
      {heroSection()}
      {heroSection2()}
    </div>
  )
}

export default Homepage
