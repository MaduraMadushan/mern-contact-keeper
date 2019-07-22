import React, { Fragment, useContext } from 'react'
import ContactContext from './../../context/contact/contactContext'
import PropTypes from 'prop-types'
import ContactItems from './contactItems'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts } = contactContext
  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItems key={contact.id} contact={contact} />
      ))}
    </Fragment>
  )
}

Contacts.propTypes = {}

export default Contacts
