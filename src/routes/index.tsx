import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage'
import { ProductListingPage } from '@/pages/ProductListingPage'

import Layout from '@/components/Layout'
import NotFoundPage from '@/components/NotFound/Page'

import { ProductViewPage } from '@/pages/ProductViewPage'

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/produtos"
        element={
          <Layout>
            <ProductListingPage />
          </Layout>
        }
      />
      <Route
        path="/produto/:slug"
        element={
          <Layout>
            <ProductViewPage />
          </Layout>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export { AppRoutes }
