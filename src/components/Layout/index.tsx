import React from 'react'

import { ILayout } from '@/interface'

import ProductProvider from '@/context/useProductContext'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ProductProvider>
      <div className="flex flex-col min-h-screen bg-white2">
        <Header />
        {children}
        <Footer />
      </div>
    </ProductProvider>
  )
}

export default Layout
