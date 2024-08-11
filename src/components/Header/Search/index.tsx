import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LuSearch } from 'react-icons/lu'

import { useProductsContext } from '@/context/useProductContext'

const Search: React.FC = () => {
  const { setSearch } = useProductsContext()
  const [localQuery, setLocalQuery] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const filterQuery = queryParams.get('filter') || ''
    setLocalQuery(filterQuery)
    setSearch(filterQuery)
  }, [location.search, setSearch])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/produtos?filter=${encodeURIComponent(localQuery)}`)
    setSearch(localQuery)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e as unknown as React.FormEvent)
    }
  }

  return (
    <form onSubmit={handleSearchSubmit} className="relative w-full md:flex-1">
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={localQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        className="font-normal text-[1rem] p-2 pl-5 w-full h-[60px] outline-none rounded-[8px] text-darkGray2 bg-lightGray3 md:flex-1"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 p-2"
      >
        <LuSearch size={20} className="text-darkGray3" />
      </button>
    </form>
  )
}

export default Search
