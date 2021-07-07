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
      },
      {
        image: missionLogo,
        overlayContents: 'this has only image'
      },
      {
        footer: 'This is the footer',
        body: 'Body for only footer'
      },
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
        </div>
      </section>
    );
  }
}
