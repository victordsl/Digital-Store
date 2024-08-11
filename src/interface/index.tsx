import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { IconType } from 'react-icons'

import {
  ProductCategory,
  ProductGender,
  ProductSession,
  ProductBrand,
} from '@/enum'

export interface ILayout {
  children?: ReactNode
}

export interface ILogo {
  image: any
  description: string
  className?: string
}

export interface IBanner {
  image: any
}

export interface ISection {
  title: string
  titleAlign: 'text-center' | 'text-left'
  className?: string
  children?: ReactNode
  button?: boolean
  href?: string
}

export interface INavigation {
  title: string
  page: string
  className?: string
  onClick?: () => void
}

export interface IButton {
  label: string
  onClick?: () => void
  className?: string
  icon?: IconType
}

export interface IItemFooter {
  title: string
  items: string[]
  className?: string
}

export interface IDiscount {
  discountOffer?: number
  className?: string
}

export interface IPopularCard {
  title: string
  discount: number
  image: {
    src: string
    alt: string
  }
}

export interface ICategoryCard {
  title: string
  icon: IconType
}

export interface IOfferCard {
  title: {
    label: string
    style: string
  }
  subtitle: {
    label: string
    style: string
  }
  button: {
    label: string
    style: string
  }
  description: {
    label: string
    style: string
  }
  className?: string
}

export interface IPath {
  items: {
    label?: any
    path?: any
  }[]
}

export interface IProductListing {
  products: IProductCard[]
}

export interface IProductDetails {
  children: ReactNode
  className: string
}

export interface IBuyBox {
  name: string
  price: number
  discount?: number
  description: string
  session: string
  category: string
  brand: string
  gender: string
  size: string
}

export interface IProductOptions {
  label: string
  children?: ReactNode
  className?: string
}

export interface IFilterGroup {
  title: string
  inputType: 'checkbox' | 'radio'
  options: {
    label: string
    value: string
  }[]
  onChange: (value: string | string[]) => void
}

export interface ISelectOrder {
  options: {
    label: string
    value: string
  }[]
}

export interface IProductCard {
  id?: number
  type: string
  name: string
  session: ProductSession
  category: ProductCategory
  brand: ProductBrand
  gender: ProductGender
  price: number
  discount?: number
  size: string
  image: string
  description: string
  slug?: string
}

export interface IProductContext {
  products: IProductCard[]
  setProducts: Dispatch<SetStateAction<IProductCard[]>>
  productDetails: IProductCard | null
  setProductDetails: Dispatch<SetStateAction<IProductCard | null>>
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  quantityTotal?: number
  setQuantityTotal?: Dispatch<SetStateAction<number>>
  filters: {
    session: ProductSession[]
    category: ProductCategory[]
    brand: ProductBrand[]
    gender: ProductGender[]
  }
  setFilters: Dispatch<SetStateAction<IProductContext['filters']>>
  order: ISelectOrder['options']
  setOrder: Dispatch<SetStateAction<ISelectOrder['options']>>
}

export interface IProductProvider {
  children: React.ReactNode
}
