import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb'

import Button from '@/components/Button'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  const handleHomePage = () => {
    navigate('/', { replace: true })
  }

  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-1 bg-white2 min-h-screen">
      <TbError404 size={120} />
      <h1 className="text-4xl font-medium">Página não encontrada!</h1>
      <p className="text-xl font-light">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Button
        label="Voltar para a Home"
        className="bg-primary font-bold w-48 h-10 text-white hover:bg-tertiary ease-in transition-all duration-300"
        onClick={handleHomePage}
      ></Button>
    </section>
  )
}

export default NotFoundPage
