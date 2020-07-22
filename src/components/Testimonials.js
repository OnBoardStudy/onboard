import React from 'react'
// import Swiper JS
import Swiper from 'swiper';

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
