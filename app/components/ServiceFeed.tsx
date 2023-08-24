import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceFeed = () => {
  return (
    <div className="feed flex items-center justify-between mx-10 gap-20">
      <ServiceCard/>
      <ServiceCard/>
      </div>
  )
}

export default ServiceFeed