import React from 'react'
import Link from 'gatsby-link'

const Hero = props => {
  return (
    <div className="header">
      <div className="hero site-width">
        <h2>{props.data.heroTitle}</h2>
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: props.data.heroDescription.childMarkdownRemark.html,
          }}
        />
        <Link
          to={props.data.heroButtonLink}
          key={props.data.heroButtonLink}
        >
          <button className="button">
            {props.data.heroButtonText}
            <i className="fa fa-angle-right" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
