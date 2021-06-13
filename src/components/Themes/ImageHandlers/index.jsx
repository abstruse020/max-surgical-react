import React from 'react'
import PropTypes from 'prop-types'

const ImageHolder = ({image}) => {
    return (
      <div className=''>
        <img src={image} alt="Image" style = {{maxWidth: '300px'}}/>
      </div>
    )
  }

export default ImageHolder
