import React from 'react'

import { HeroSection } from '@/pages/HomePage/HeroSection'
import { CollectionSection } from '@/pages/HomePage/CollectionSection'
import { SpecialSection } from '@/pages/HomePage/SpecialSection'
import { HotSection } from '@/pages/HomePage/HotSection'

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CollectionSection />
      <HotSection />
      <SpecialSection />
    </main>
  )
}
