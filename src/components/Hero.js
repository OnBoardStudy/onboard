import React from 'react'
import Img from 'gatsby-image'

const Hero = props => {
  return (
    <div className="header">
      <div className="img">
        <Img sizes={props.data.heroImage.sizes} />
      </div>
      <div className="gradient" />
      <div className="hero site-width">
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: props.data.heroDescription.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  )
}

export default Hero
