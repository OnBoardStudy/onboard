import React from 'react';
import {Helmet} from "react-helmet";
// import Swiper JS
import Swiper from 'swiper';
import styles from "./testimonials.module.css";
// import Swiper styles
// import 'swiper/swiper-bundle.css';
// import 'https://unpkg.com/swiper@6.0.2/swiper-bundle.min.css';
// @import url('https://unpkg.com/swiper@6.0.2/swiper-bundle.min.css');

let testimonials = null;

const InitTestimonials = () => {
  testimonials = new Swiper(".swiper-testimonial", {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
  });
}

const Slide = props => <div className="swiper-slide">
  <div className="box">
    <div className="part-img">
      <img src={props.testimonial.profile.file.url}
           alt="avatar"/>
    </div>
    <div className="part-text">
      <p>
        {props.testimonial.testimonial.testimonial} <b>{props.testimonial.author}</b>
      </p>
    </div>
  </div>
</div>

const Testimonials = props => (
  <div className="testimonial">
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/swiper@6.0.4/swiper-bundle.min.css"/>
    </Helmet>
    <div className="slider-testimonial">
      <div ref={el => InitTestimonials()} className="swiper-testimonial">
        <div className="swiper-wrapper">
          {props.testimonials.map(testimonial => <Slide key={testimonial.node.id} testimonial={testimonial.node}/>)}
        </div>
      </div>

      {props.testimonials.length > 1 && <div onClick={e => testimonials.slidePrev()} className="swiper-button swiper-button-prev"/>}
      {props.testimonials.length > 1 && <div onClick={e => testimonials.slideNext()} className="swiper-button swiper-button-next"/>}
    </div>
  </div>
)

export default Testimonials
