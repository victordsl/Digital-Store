import React from 'react'

import { IProductOptions } from '@/interface'

const ProductOptions: React.FC<IProductOptions> = ({
  label,
  children,
  className,
}) => {
  return (
    <div className="flex flex-col my-3">
      <h2 className="text-lightGray font-bold text-[14px]">{label}</h2>
      <div className={`flex my-2 ${className}`}>{children}</div>
    </div>
  )
}

export default ProductOptions
