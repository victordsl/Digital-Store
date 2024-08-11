import React from 'react'

import { IProductDetails } from '@/interface'

const ProductDetails: React.FC<IProductDetails> = ({ children, className }) => {
  return <section className={`${className}`}>{children}</section>
}

export default ProductDetails
