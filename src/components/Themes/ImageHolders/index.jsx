import React from 'react'
import PropTypes from 'prop-types'

const ImageHolder = ({image, imgMaxWidth}) => {
    return (
      <div className=''>
        <img src={image} alt="Image" style = {{maxWidth: imgMaxWidth}}/>
      </div>
    )
  }

export default ImageHolder
