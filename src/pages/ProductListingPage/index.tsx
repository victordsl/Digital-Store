import React, { useEffect, useMemo } from 'react'

import { useProductsContext } from '@/context/useProductContext'
import { ProductOrder } from '@/enum'
import { IProductCard } from '@/interface'
import { DiscountPrice } from '@/utils/Price/DiscountPrice'

import Service from '@/service'

import FilterCard from '@/components/FilterCard'
import OrderCard from '@/components/OrderCard'
import ProductListing from '@/components/ProductListing'
import NotFoundProduct from '@/components/NotFound/Product'

export const ProductListingPage = () => {
  const { products, setProducts, search, filters, order } = useProductsContext()

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

  const data = useMemo(() => {
    const filterProducts = products.filter(
      (product: IProductCard) =>
        (filters.session.length === 0 ||
          filters.session.includes(product.session)) &&
        (filters.category.length === 0 ||
          filters.category.includes(product.category)) &&
        (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
        (filters.gender.length === 0 ||
          filters.gender.includes(product.gender)) &&
        (product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.type.toLowerCase().includes(search.toLowerCase())),
    )

    filterProducts.sort((a, b) => {
      const priceA = DiscountPrice(a.price, a.discount)
      const priceB = DiscountPrice(b.price, b.discount)

      switch (order[0]?.value) {
        case ProductOrder.LOWPRICE:
          return priceA - priceB
        case ProductOrder.HIGHPRICE:
          return priceB - priceA
        default:
          return 0
      }
    })

    return filterProducts
  }, [products, search, filters, order])

  const isSearch = search.trim().length > 0
  const isProduct = data.length > 0

  return (
    <section className="flex flex-col items-center justify-center px-24 md:px-32">
      <div className="flex items-center justify-center w-full h-full my-10">
        {isSearch && (
          <h2 className="text-darkGray2 text-[1rem] w-full">
            <span className="font-bold">
              Resultados para &quot;{search}&quot; -
            </span>
            <span className="font-normal">
              {' '}
              {data.length} {data.length !== 1 ? 'produtos' : 'produto'}
            </span>
          </h2>
        )}
        <div className="flex justify-end w-full">
          {isProduct && <OrderCard />}
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex w-full h-full justify-between">
          <div className="flex justify-center">
            <FilterCard />
          </div>
          <div className="flex flex-col w-full">
            <div
              className={`${
                isProduct
                  ? 'flex flex-wrap items-center justify-end gap-5 w-full'
                  : 'flex flex-grow items-center justify-center w-full h-full'
              }`}
            >
              {isProduct ? (
                <ProductListing products={data} />
              ) : (
                <NotFoundProduct />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
