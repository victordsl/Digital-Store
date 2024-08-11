import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useProductsContext } from '@/context/useProductContext'
import { IProductCard } from '@/interface'
import { Timeout } from '@/utils/Timeout'

import Service from '@/service'

import ProductDetails from '@/components/ProductDetails'
import ProductCard from '@/components/ProductCard'
import Section from '@/components/Section'
import Path from '@/components/ProductDetails/Path'
import Gallery from '@/components/Gallery'
import BuyBox from '@/components/BuyBox'
import NotFoundProduct from '@/components/NotFound/Product'

export const ProductViewPage = () => {
  const { slug } = useParams()
  const { products, setProducts, setProductDetails, productDetails } =
    useProductsContext()
  const [relatedProducts, setRelatedProducts] = useState<IProductCard[]>([])

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await Service.product({ slug })
        setProductDetails(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    getProduct()
  }, [slug, setProductDetails])

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
    if (productDetails && products.length > 0) {
      const filteredProducts = products
        .filter((product) => product.brand === productDetails.brand)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
      setRelatedProducts(filteredProducts)
    }
  }, [productDetails, products])

  useEffect(() => {
    return Timeout()
  })

  const paths = [
    { label: 'Home', path: '/' },
    { label: 'Produtos', path: '/produtos' },
    {
      label: productDetails?.type,
      path: `/produtos?filter=${productDetails?.type}`,
    },
    {
      label: productDetails?.brand,
      path: `/produtos?filter=${productDetails?.brand}`,
    },
    { label: productDetails?.name },
  ]

  return (
    <ProductDetails className="flex items-center justify-center px-24 md:px-32">
      <div className="flex flex-col items-center">
        <div className="py-7 w-full">
          {productDetails ? <Path items={paths} /> : null}
        </div>
        <div
          className={`${productDetails ? 'flex gap-10 w-full' : 'flex flex-col gap-10 w-full'}`}
        >
          <div className="w-full md:max-w-md">
            {productDetails && <Gallery image={productDetails.image} />}
          </div>
          <div className="w-full md:max-w-2xl">
            {productDetails ? (
              <BuyBox
                name={productDetails.name}
                price={productDetails.price}
                discount={productDetails.discount}
                description={productDetails.description}
                session={productDetails.session}
                category={productDetails.category}
                brand={productDetails.brand}
                gender={productDetails.gender}
                size={productDetails.size}
              />
            ) : (
              <NotFoundProduct />
            )}
          </div>
        </div>
        {productDetails ? (
          <Section
            title="Produtos Relacionados"
            titleAlign="text-left"
            className="flex gap-5 "
            button={true}
            href={`/produtos?filter=${productDetails?.brand}`}
          >
            {relatedProducts.length > 0 &&
              relatedProducts.map((product, index) => (
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
        ) : null}
      </div>
    </ProductDetails>
  )
}
