import React from 'react'
import { FormattedMessage } from 'react-intl'

const ContactFormSection = props => {
  return (
    <div className="content site-width">
      <div className="form-box">
        <div>
          <h2>{props.data.contactSectionTitle}</h2>
          <span
            dangerouslySetInnerHTML={{
              __html: props.data.contactSectionText.childMarkdownRemark.html,
            }}
          />
        </div>
        <form id="contact">
          <label htmlFor="name">
            <FormattedMessage id="name" />
          </label>
          <FormattedMessage id="namePlaceholder">
            {text => (
              <input type="text" name="name" id="name" placeholder={text} />
            )}
          </FormattedMessage>

          <label htmlFor="email">
            <FormattedMessage id="email" />
          </label>
          <FormattedMessage id="emailPlaceholder">
            {text => (
              <input type="text" name="email" id="email" placeholder={text} />
            )}
          </FormattedMessage>

          <label htmlFor="text">
            <FormattedMessage id="message" />
          </label>
          <FormattedMessage id="messagePlaceholder">
            {text => <textarea name="text" id="text" placeholder={text} />}
          </FormattedMessage>

          <FormattedMessage id="send">
            {text => <input type="submit" value={text} />}
          </FormattedMessage>
        </form>
      </div>
    </div>
  )
}

export default ContactFormSection