import React from 'react'
import PropTypes from 'prop-types'
import Contacts from '../contacts/contacts'
import ContactForm from '../contacts/ContactForm'

const Home = () => {
  return (
    <div className='grid-2'>
      <div className=''>
        <ContactForm />{' '}
      </div>
      <div className=''>
        <Contacts />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
