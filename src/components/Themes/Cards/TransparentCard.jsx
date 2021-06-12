import React from 'react'
import PropTypes from 'prop-types'
import ImageHolder from '../ImageHandlers/index.jsx'

function TransparentCard({header,cardBody, colors={bg:"bg-white",header:"",bodyText:"text-secondary"}, image, imagePosition=1}) {
  console.log(image)
    return (
      <div className={"mb-4 " + colors.bg+" shadow rounded mx-1"}>
        <div className={"container mx-auto pt-4"}>
          <h2 className={"d-flex justify-content-center "+ colors.header}>
            <u>{header}</u>
          </h2>
          <div className="card-body d-flex row">
            <div className={image && imagePosition==1 ? 'col-md-6':''}>
              {image && imagePosition==1 ? <ImageHolder image={image} /> : null}
            </div>
            <div className={(image ? 'col-md-6' : '') + ' '}>
            <p className={"card-text text-justify "+ colors.bodyText}>{cardBody.body}</p>
            </div>
            <div className={image && imagePosition==2 ? 'col-md-6':''}>
              {image && imagePosition==2 ? <ImageHolder image={image} /> : null}
            </div>
          </div>
        </div>
      </div>
    )
}

export default TransparentCard
