import React from 'react'

import { IOfferCard } from '@/interface'

import Button from '@/components/Button'

const OfferCard: React.FC<IOfferCard> = ({
  title,
  subtitle,
  description,
  button,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <h2 className={`font-bold text-sm text-left  ${subtitle.style}`}>
        {subtitle.label}
      </h2>
      <h1 className={`font-bold text-6xl pt-3 w-[500px] ${title.style}`}>
        {title.label}
      </h1>
      <p
        className={`text-darkGray2 font-normal text-[1rem] my-5 ${description.style}`}
      >
        {description.label}
      </p>
      <Button label={button.label} className={`${button.style}`} />
    </div>
  )
}

export default OfferCard
