import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'

const Box = props => <div className="box">
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

const TestimonialList = props => {
  return (
    <div className="content site-width">
      <h2>
        <FormattedMessage id="testimonials"/>
      </h2>
      <div className="testimonial testimonial-list">
        {/*<Helmet>*/}
        {/*  <link rel="stylesheet" href="https://unpkg.com/swiper@6.0.4/swiper-bundle.min.css"/>*/}
        {/*</Helmet>*/}
        <div className="boxes">
          {props.testimonials.map(testimonial =>
            <Box key={testimonial.node.id} testimonial={testimonial.node}/>)}
        </div>
      </div>
    </div>
  )
}

export default TestimonialList
