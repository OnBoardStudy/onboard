import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'

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

const TestimonialList = props => {
  return (
    <div className="content site-width">
      <h2>
        <FormattedMessage id="testimonials"/>
      </h2>
      <div className="testimonial">
        {/*<Helmet>*/}
        {/*  <link rel="stylesheet" href="https://unpkg.com/swiper@6.0.4/swiper-bundle.min.css"/>*/}
        {/*</Helmet>*/}
        <div className="slider-testimonial">
          <div className="swiper-testimonial">
            <div className="swiper-wrapper">
              {props.testimonials.map(testimonial =>
                <Slide key={testimonial.node.id} testimonial={testimonial.node}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialList
