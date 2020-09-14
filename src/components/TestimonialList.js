import React from 'react'
import { FormattedMessage } from 'react-intl'
import Testimonial from './Testimonial'

const TestimonialList = props => {
  return (
    <div className="content site-width">
      <h2>
        <FormattedMessage id="testimonials"/>
      </h2>
      <div className="testimonial testimonial-list">
        <div className="boxes">
          {props.testimonials.map(testimonial =>
            <Testimonial key={testimonial.node.id} testimonial={testimonial.node} />)}
        </div>
      </div>
    </div>
  )
}

export default TestimonialList
