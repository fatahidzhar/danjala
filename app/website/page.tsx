import HeroWebsiteComponents from '@/components/HeroWebsiteComponents'
import NavigationComponents from '@/components/NavigationComponents'
import ServiceWebsiteComponents from '@/components/ServiceWebsiteComponents'
import ContentWebsiteComponents from '@/components/client/ContentWebsiteComponents'
import React from 'react'

const Website = () => {
  return (
    <div>
      <NavigationComponents />
      <HeroWebsiteComponents />
      <ServiceWebsiteComponents />
      <ContentWebsiteComponents />
    </div>
  )
}

export default Website