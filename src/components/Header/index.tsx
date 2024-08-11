import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LuShoppingCart } from 'react-icons/lu'

import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Search from '@/components/Header/Search'
import Navigation from '@/components/Header/Navigation'

import logoHeader from '@/assets/logo-header.svg'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/entrar', { replace: true })
  }

  const handleSignUp = () => {
    navigate('/cadastre-se', { replace: true })
  }

  return (
    <header className="bg-white shadow-md px-24 py-10 gap-8 justify-around md:px-32">
      <section className="flex mx-auto items-center gap-10">
        <div className="flex flex-1 items-center justify-center gap-8">
          <Logo
            image={logoHeader}
            description="Logo"
            className="h-[44px] w-[253px]"
          />
          <Search />
        </div>
        <div className="flex items-center justify-center gap-8 p-2 w-auto h-[60px]">
          <Button
            label="Cadastre-se"
            className="bg-none font-normal w-28 h-10 text-darkGray2 text-[1rem] hover:text-primary ease-in transition-all duration-300"
            onClick={handleSignUp}
          />
          <Button
            label="Entrar"
            className="bg-primary font-bold w-28 h-10 text-white text-[1rem] hover:bg-tertiary ease-in transition-all duration-300"
            onClick={handleSignIn}
          />
          <LuShoppingCart
            size={20}
            className="cursor-pointer text-primary hover:text-tertiary ease-in transition-all duration-300"
          />
        </div>
      </section>
      <section className="flex">
        <Navigation title="Home" page="/" className="mr-4" />
        <Navigation title="Produtos" page="/produtos" className="mx-4" />
        <Navigation title="Categorias" page="/categorias" className="mx-4" />
        <Navigation
          title="Meus Pedidos"
          page="/meus-pedidos"
          className="ml-4"
        />
      </section>
    </header>
  )
}

export default Header
