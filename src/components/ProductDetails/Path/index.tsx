import React from 'react'
import { Link } from 'react-router-dom'

import { IPath } from '@/interface'

const Path: React.FC<IPath> = ({ items }) => {
  return (
    <nav className="flex text-darkGray2">
      <ol className="flex items-center font-normal">
        {items.map((item, index) => (
          <li key={index} className="relative flex items-center group">
            {item.path ? (
              <Link to={item.path} className="px-1 hover:font-bold">
                {item.label}
              </Link>
            ) : (
              <span className="px-1">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-1">&#47;</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Path
