import React from 'react'
import PropTypes from 'prop-types'

const ImageHolder = ({image}) => {
  console.log(image)
    return (
      <div className=''>
        <img src={image} alt="Image"/>
      </div>
    )
  }

export default ImageHolder
