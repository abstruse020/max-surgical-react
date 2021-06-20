import React, { Component } from 'react'
import ProductsCard from '../Themes/Cards/ProductsCard';
import missionLogo from '../../Assets/vision-liiustration.svg'

export default class Products extends Component {
  constructor(props) {
    super(props);
  }
  products() {
    return [
      {
        title: 'Product1',
        body: 'this is product1 body with very long description which will wrap automatically',
        overlayContents: 'this is overlay for prod1',
        image: missionLogo
      },
      {
        title: 'Product2',
        body: 'this is product2 body',
        overlayContents: 'this is overlay for prod2',
        image: missionLogo
      },
      {
        title: 'Product3',
        body: 'this is product3 body',
        overlayContents: 'this is overlay for prod3',
        image: missionLogo
      },
      {
        title: 'Product4',
        body: 'this is product4 body',
        overlayContents: 'this is overlay for prod4'
      },
      {
        title: 'Product5',
        body: 'this is product5 body',
        overlayContents: 'this is overlay for prod5',
        image: missionLogo
      },
      {
        title: 'no image product',
        body: 'this is body of no image product'
      }
    ]
  }
  render() {
    return (
      <section className="p-5">
        <div class="card-columns">
          {
            this.products().map( product =>
              <ProductsCard image={product.image} contents={product} />
            )
          }
        {//  <ProductsCard image={missionLogo} overlayContents={{heading: 'Headeer',body:'body card overlay'}}/>
        }
        <div class="card p-3">
            <blockquote class="blockquote mb-0 card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer">
                <small class="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <ProductsCard image={missionLogo} overlayContents={'this is just body of overlay'}/>
          <div class="card bg-primary text-white text-center p-3">
            <blockquote class="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
              <footer class="blockquote-footer">
                <small>
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img" src={missionLogo} alt="Card image"/>
          </div>
        </div>
      </section>
    );
  }
}
