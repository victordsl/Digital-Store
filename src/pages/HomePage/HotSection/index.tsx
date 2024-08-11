import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useProductsContext } from '@/context/useProductContext'
import { IProductCard } from '@/interface'

import Service from '@/service'

import Section from '@/components/Section'
import ProductCard from '@/components/ProductCard'

export const HotSection = () => {
  const { products, setProducts } = useProductsContext()
  const [hotProducts, setHotProducts] = useState<IProductCard[]>([])

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await Service.products()
        setProducts(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    getProducts()
  }, [setProducts])

  useEffect(() => {
    if (products && products.length > 0) {
      const filteredProducts = products
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
      setHotProducts(filteredProducts)
    }
  }, [products])

  return (
    <div className="flex items-center justify-center px-24 py-10 md:px-32">
      <Section
        title="Produtos em alta"
        titleAlign="text-left"
        className="grid grid-cols-4 gap-5"
        button={true}
        href="/produtos"
      >
        {hotProducts.length > 0 &&
          hotProducts.map((product, index) => (
            <Link to={`/produto/${product.slug}`} key={index}>
              <ProductCard
                type={product.type}
                name={product.name}
                session={product.session}
                price={product.price}
                discount={product.discount}
                image={product.image}
              />
            </Link>
          ))}
      </Section>
    </div>
  )
}
