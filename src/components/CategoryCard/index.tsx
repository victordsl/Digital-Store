import React from 'react'

import { ICategoryCard } from '@/interface'

const CategoryCard: React.FC<ICategoryCard> = ({ title, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center bg-white rounded-full w-24 h-24">
        <Icon
          size={70}
          className="cursor-pointer text-lightGray hover:text-primary ease-in transition-all duration-300"
        />
      </div>
      <h2 className="text-darkGray2 font-bold text-[14px]">{title}</h2>
    </div>
  )
}

export default CategoryCard
