import React from 'react'
import PropTypes from 'prop-types'
import TransparentCard from '../Themes/Cards/TransparentCard'
import './AboutUs.css'
import missionLogo from '../../Assets/vision-liiustration.svg'
function AboutUs() {
  const aboutUs = {
    header: 'About Us',
    cardBody: {
      title:'',
      body: 'We are Dealer and Manufacturer of Medical Clothing Items and among the acknowledged suppliers of Healthcare products in Lucknow. This enterprise has made to offer top-notch and best-in-class products to their clients each time. Over time, it has made an indelible mark in the healthcare industry. One can choose from a diverse and comprehensive product range of surgical, medical, and virus protection kits. The products carry a high degree of precision, attributing a certain degree of reliability.'
    }
  }
  const ourMission = {
    header: 'Our Mission',
    cardBody: {
      title: '',
      body: 'To be socially responsible and responsive so that we may serve the suffering humanity in the best possible way everywhere in the world.'
    }
  }
  const visionBody = () => {
    return(
      <div>
        <ul>
          <li>To keep the prices of our quality products at affordable levels for the end users.</li>
          <li>To continue planning, in advance, to raise the level of our services in future.</li>
          <li>To be innovative constantly.To win the confidence of our clients based on mutual trust & higher business ethics.</li>
        </ul>
        Max Surgical Equipments, perhaps the fastest growing Indian company in its field, is a one-stop source of many hospital/medical/scientific/laboratory equipment, devices, and instruments. Having a glorious past, an excellent present and an extremely brilliant future await its performance, working with which brings not only profit but pleasure also. The secret of this success story is not far to seek. The company has a unique blend of highly experienced personnel and young & dynamic professionals, specializing in their respective fields. They strive hard to ensure to supply quality products at low rates and within the mutually settled delivery schedule, paying due attention to the requirements of packaging and packing. In order to maintain a unique identity of Max Surgical Equipments, we never try to compete with others, so nobody can compete with us.
      </div>
    )
  }
  const ourVision = {
    header: 'Our Vision',
    cardBody: {
      title: '',
      body: visionBody()
    }
  }
  const qualityPolicyBody = () => {
    return(
      <div>
        <div>
          The Max Surgical Equipments Quality Policy is summed up as follows: "The world expects results. Don't tell others about the labor pains. Show them the baby!" Thus we, do not brag about the quality of our products, but manufacture and sell practical and tested QUALITY MERCHANDISE. We never forget that "an ounce of performance is worth pounds of promises". We always seek to achieve the standards, expected of the best organizations in the world. Thus following are some of the Quality Certificates, possessed by us:
        </div>
        <ul>
          <li>CE</li>
          <li>ISO 9001</li>
          <li>ISO 13485:2016</li>
          <li>US FDA 510 (K)</li>
        </ul>
        <div>
          We realize it fully well that "providing 99% satisfaction means 10000 dissatisfied customers out of a million transactions". So, we try hard to achieve 100% satisfaction. Once the valued clients, worthy, wise, qualified and judicious executives/professionals touch and experience the products, they come back to us continuously, and there is no looking back for them. Achieving excellence of quality of our products for us is an unending path, without a final destination
        </div>
      </div>
    )
  }
  const qualityPolicy = {
    header: 'Quality Policy',
    cardBody: {
      title: 'Some Content?',
      body: qualityPolicyBody()
    }
  }
  const blueTheme = {
    bg: 'primary-blue',
    header: 'header-text-on-blue',
    bodyText: 'body-text-on-blue'
  }
  const whiteTheme = {
    bg: '',
    header: 'header-text-on-white',
    bodyText: 'body-text-on-white'
  }
  return (
    <section id="about_us_section" className="p-0 my-3 mx-2">
      <TransparentCard
        header={aboutUs.header}
        cardBody={aboutUs.cardBody}
        colors={whiteTheme}
        image={null}/>
      <TransparentCard
        header={ourMission.header}
        cardBody={ourMission.cardBody}
        colors={blueTheme}
        image={missionLogo}
        imagePosition={2}/>
      <TransparentCard
        header={ourVision.header}
        cardBody={ourVision.cardBody}
        colors={whiteTheme}/>
      <TransparentCard
        header={qualityPolicy.header}
        cardBody={qualityPolicy.cardBody}
        colors={blueTheme}/>
    </section>
  )
}

export default AboutUs
