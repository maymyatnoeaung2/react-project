import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import CardSection from '../components/CardSection'

const MyCard = () => {
  return (
<>
<Container className="flex-grow">
<Breadcrumb currentPageTitle="My Card"/>
<CardSection/>
</Container>
</>
  )
}

export default MyCard