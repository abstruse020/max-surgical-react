import React, { Component } from 'react';
import ProductsCard from '../Themes/Cards/ProductsCard';
import missionLogo from '../../Assets/vision-liiustration.svg';
import doctors_coat from '../../Assets/customized_doctors_coat.jpeg';
import disposable_beadsheets from '../../Assets/disposable_beadsheets_40gsm.jpeg';
import doctors_gown from '../../Assets/doctros_gown_40_gsm.jpeg';
import doctors_gown_2 from '../../Assets/doctros_gown_55_gsm.jpeg';
import latex_gloves from '../../Assets/latex_gloves_grade_a.jpeg';
import n95_mask from '../../Assets/n95_mask_6_layers.jpeg';
import nitrileGloves from '../../Assets/nitrile_gloves.jpeg';
import ppeKit from '../../Assets/ppe_kit_all_gsm.jpeg';

export default class Products extends Component {
  constructor(props) {
    super(props);
  }
  products() {
    return [
      {
        title: 'Doctor\'s Coat',
        body: 'Customized doctor\'s coat',
        overlayContents: 'Contact us for Bulk Purchase',
        image: doctors_coat
      },
      {
        title: 'Disposable Beadsheets',
        body: 'Disposable beadsheets for hospital beds',
        overlayContents: 'We have various color options',
        image: disposable_beadsheets
      },
      {
        title: 'Doctor\'s Gown',
        body: 'Doctors Gown of 40 gsm',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: doctors_gown
      },
      {
        title: 'Doctor\'s Gown',
        body: 'Doctors Gown non woven of 55 gsm disposable, customizable',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: doctors_gown_2
      },
      {
        title: 'Latex Gloves',
        body: 'Latex Gloves Grade A',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: latex_gloves
      },
      {
        title: 'N 95 Mask',
        body: '6 Layered N 95 Mask',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: n95_mask
      },
      {
        title: 'Nitrile Gloves',
        body: 'Blue colored Nitriled Gloves',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: nitrileGloves
      },
      {
        title: 'PPE Kit',
        body: 'All gsm ppe kit available (cover all PPE as well)',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: ppeKit
      },
      {
        title: '3 Ply Mask',
        body: 'Best quality 3 ply mask',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Sanitizer',
        body: '80% Alcohal',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Face Shield',
        body: 'Double laminated (200 micron available as well)',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Sanitizer Dispenser',
        body: 'Sensor based sanitizer dispenser 8L',
        overlayContents: 'Single piece available for sale',
        image: null
      },
      {
        title: 'Sanitizer Stand',
        body: 'Foot operated sanitizer stand',
        overlayContents: 'Single piece available for sale',
        image: null
      },
      {
        title: 'Disposable Towel',
        body: 'Small and Large disposable towels',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Beadsheets',
        body: 'With pillow cover Non Woven (84*84) 40 GSM',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Beadsheets',
        body: 'With pillow cover Woven (90*55) fine quality',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Shoe Cover',
        body: '20 GSM Shoe Cover',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Blankets',
        body: 'fine quality blankets',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Doctors Gown',
        body: 'Woven doctor\'s gown colors- Blue and Green',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Patient\'s Dress Male',
        body: 'Male patient\'s dress Blue Check',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
      },
      {
        title: 'Patient\'s Dress Female',
        body: 'Female patient\'s dress Pink Check',
        overlayContents: 'Contact Us for Bulk Purchase',
        image: null
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
