import React from 'react'
import PropTypes from 'prop-types'

const imageHolder = ({image}) => {
  return(
    <div className='image-holder bg-light'>
      <img src="" alt="Image"/>
    </div>
  )
}

function TransparentCard({header,cardBody, colors={bg:"bg-white",header:"",bodyText:"text-secondary"}, image}) {
    return (
      <div className={"mb-4 " + colors.bg+" shadow rounded mx-1"}>
        <div className={"container mx-auto pt-4"}>
          <h2 className={"d-flex justify-content-center "+ colors.header}>
            {header}
          </h2>
          <div className="card-body d-flex">
            <div className='col-md-6'>
              {image ? imageHolder(image) : null}
            </div>
            <div className={image ? 'col-md-6' : ''}>
            <p className={"card-text "+ colors.bodyText}>{cardBody.body}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TransparentCard
