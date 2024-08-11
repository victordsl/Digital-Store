import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

import Logo from '@/components/Logo'
import ItemFooter from '@/components/Footer/ItemFooter'

import logoFooter from '@/assets/logo-footer.svg'

const Footer: React.FC = () => {
  const Year = () => {
    return new Date().getFullYear()
  }

  return (
    <footer className="flex flex-col bg-darkGray px-24 pt-10 md:px-32">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 w-[400px]">
          <Logo image={logoFooter} description="Logo" />
          <p className="font-normal text-white text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-5 text-white">
            <a
              href="https://www.facebook.com/digitalcollegebr"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/digitalcollegebr/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/eaicollegers"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-28">
          <ItemFooter
            title="Informações"
            items={[
              'Sobre Drip Store',
              'Segurança',
              'Wishlist',
              'Blog',
              'Trabalhe conosco',
              'Meus Pedidos',
            ]}
          />
          <ItemFooter
            title="Categorias"
            items={['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis']}
          />
          <ItemFooter
            title="Contato"
            items={[
              'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',
              '(85) 3051-3411',
            ]}
            className="w-56"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 pt-10 pb-5">
        <span className="border border-darkGray3 border-solid w-full bottom-[128px]"></span>
        <p className="font-normal text-[13px] text-white">
          &copy; {Year()} Digital College
        </p>
      </div>
    </footer>
  )
}

export default Footer
