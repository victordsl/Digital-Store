import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ILogo } from '@/interface'

const Logo: React.FC<ILogo> = ({ image, description, className }) => {
  const navigate = useNavigate()

  const handleScrollHome = () => {
    navigate('/', { replace: true })
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }

  return (
    <a className="flex gap-2 cursor-pointer" onClick={handleScrollHome}>
      <img src={image} alt={description} className={`${className}`} />
    </a>
  )
}

export default Logo
