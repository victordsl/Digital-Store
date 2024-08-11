import React from 'react'
import { Link } from 'react-router-dom'

import { IProductListing } from '@/interface'

import ProductCard from '@/components/ProductCard'

const ProductListing: React.FC<IProductListing> = ({ products }) => {
  return products.map((product, index) => (
    <Link to={`/produto/${product.slug}`} key={index}>
      <ProductCard {...product} />
    </Link>
  ))
}

export default ProductListing
