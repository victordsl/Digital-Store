import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { INavigation } from '@/interface'

const Navigation: React.FC<INavigation> = ({
  title,
  page,
  onClick,
  className,
}) => {
  const location = useLocation()

  return (
    <nav className="flex pt-10 gap-2 text-[1rem] text-darkGray2 font-normal">
      <Link
        to={page}
        onClick={onClick}
        className={`
            relative group hover:hover:text-primary duration-300 ease-in
            ${location.pathname === page ? 'font-bold text-primary' : 'font-normal'} 
            ${className}  
          `}
      >
        <ul>
          <li>{title}</li>
        </ul>
        <span
          className={`
              h-[2px] inline-block bg-primary
              absolute left-0 -bottom-0.5
              group-hover:w-full transition-[width] ease duration-300
              ${location.pathname === page ? 'w-full' : 'w-0'}
            `}
        >
          &nbsp;
        </span>
      </Link>
    </nav>
  )
}

export default Navigation
