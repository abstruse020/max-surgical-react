import React, { Component } from 'react'
import ImageHolder from '../ImageHandlers/index.jsx'
import './ProductsCard.css'
class ProductsCard extends Component {
  constructor(props) {
    super(props);
    this.image = props.image;
    this.overlayHeading = this.props.contents?.overlayContents?.heading;
    this.overlayBody = this.props.contents?.overlayContents?.body || this.props.contents?.overlayContents;
    this.title = this.props.contents?.title;
    this.body = this.props.contents?.body;
    this.footer = this.props.contents?.footer;
  }
  render() {
    return (
      <div className={'card products-card-container'}>
        {
          this.image &&
          <div>
            <img className="card-img" src={this.image} alt=""/>
            <div className="card-img-overlay products-card-overlay">
              <h5 className="card-title">{this.overlayHeading}</h5>
              <p className="card-text">{this.overlayBody}</p>
            </div>
          </div>
        }
        <div className="card-body">
          <h5 className="card-title">{this.title}</h5>
          <p className="card-text">{this.body}</p>
          <p className="card-text"><small class="text-muted">{this.footer}</small></p>
        </div>
      </div>
    );
  }
}
export default ProductsCard
