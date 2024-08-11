import React, { useEffect, useState } from 'react'

import { IBuyBox } from '@/interface'
import { DiscountPrice } from '@/utils/Price/DiscountPrice'
import { FormatPrice } from '@/utils/Price/FormatPrice'

import Button from '@/components/Button'
import ProductOptions from '@/components/ProductOptions'

const BuyBox: React.FC<IBuyBox> = ({
  name,
  price,
  discount,
  description,
  session,
  category,
  brand,
  gender,
  size,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  useEffect(() => {
    setSelectedSize(null)
  }, [name])

  const handleSize = (size: string) => {
    setSelectedSize(size)
  }

  const sizes = size.split(', ')

  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-[2rem] font-bold text-darkGray w-3/4">{name}</h1>
      <h2 className="text-[1rem] font-medium text-darkGray3 my-3">
        {category} &#124; {brand} &#124; {session} &#124; {gender}
      </h2>
      <div className="flex items-center text-[1.2rem]">
        {discount ? (
          <div className="flex items-center justify-center">
            <span className="text-darkGray font-bold w-16 h-10 pr-32">
              {FormatPrice(DiscountPrice(price, discount))}
            </span>
            <span className="text-lightGray line-through font-normal w-16 h-10">
              {FormatPrice(price)}
            </span>
          </div>
        ) : (
          <span className="text-darkGray font-bold w-16 h-10">
            {FormatPrice(price)}
          </span>
        )}
      </div>
      <ProductOptions label="Descrição do produto">
        <p className="flex text-sm text-darkGray2">{description}</p>
      </ProductOptions>
      <ProductOptions label="Tamanho" className="gap-2">
        {sizes?.map((size) => (
          <button
            key={size}
            onClick={() => handleSize(size)}
            className={`flex items-center justify-center border border-lightGray2 rounded w-12 h-12 cursor-pointer text-darkGray2 text-[1rem] font-bold ease-in transition-all duration-300 ${
              selectedSize === size
                ? 'bg-primary text-white border-none'
                : 'hover:bg-primary hover:text-white hover:border-none'
            }`}
          >
            {size}
          </button>
        ))}
      </ProductOptions>

      <Button
        label="Comprar"
        className="bg-warning font-bold w-52 h-12 text-white text-[1.2rem]"
      />
    </div>
  )
}

export default BuyBox
