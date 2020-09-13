import React from 'react';
import {Helmet} from "react-helmet";
// import Swiper JS
import Swiper from 'swiper';
import { FormattedMessage } from 'react-intl'
import Link from 'gatsby-link'
import Img from 'gatsby-image/index'

const swiperParams = {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0
}

const Slide = props => <div className="swiper-slide">
  <div className="box">
    <div className="part-img">
      <img src={props.testimonial.profile.file.url}
           alt="avatar"/>
    </div>
    <div className="part-text">
      <p>
        {props.testimonial.testimonial.testimonial}
      </p>
      <span className="name">{props.testimonial.author}</span>
    </div>
  </div>
</div>

class Testimonials extends React.Component {

  componentDidMount() {
    this.testimonials = new Swiper(".swiper-testimonial", swiperParams);
    this.interval = setInterval(() => this.testimonials.slideNext(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.testimonials.destroy()
  }

  constructor(props) {
    super(props);
  }
  render() {
    return <div className="testimonial">
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/swiper@6.0.4/swiper-bundle.min.css"/>
      </Helmet>
      <div className="slider-testimonial">
        <div className="swiper-testimonial">
          <div className="swiper-wrapper">
            {this.props.testimonials.map(testimonial => <Slide key={testimonial.node.id} testimonial={testimonial.node}/>)}
          </div>
        </div>

        {this.props.testimonials.length > 1 && <div onClick={e => this.testimonials.slidePrev()} className="swiper-button swiper-button-prev"/>}
        {this.props.testimonials.length > 1 && <div onClick={e => this.testimonials.slideNext()} className="swiper-button swiper-button-next"/>}
      </div>
      <div className="btn-group">
        <Link to={`/${this.props.lang}/testimonials/`} className="btn btn-primary">
          <FormattedMessage id="allTestimonials" />
        </Link>
        {/*<a href="#" className="btn btn-primary">*/}
        {/*  <FormattedMessage id="allTestimonials" />*/}
        {/*</a>*/}
      </div>
    </div>
  }
}

export default Testimonials
