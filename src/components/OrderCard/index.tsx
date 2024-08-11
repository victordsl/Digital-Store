import React from 'react'
import Select from 'react-select'
import { motion } from 'framer-motion'

import { ProductOrder } from '@/enum'
import { useProductsContext } from '@/context/useProductContext'

import { StylesSelect } from '@/components/OrderCard/StylesSelect'

const OrderCard: React.FC = () => {
  const { setOrder } = useProductsContext()

  const handleSelectChange = (option: any) => {
    setOrder([option])
  }

  const options = [
    { label: ProductOrder.RELEVANT, value: ProductOrder.RELEVANT },
    { label: ProductOrder.LOWPRICE, value: ProductOrder.LOWPRICE },
    { label: ProductOrder.HIGHPRICE, value: ProductOrder.HIGHPRICE },
  ]

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="cursor-pointer relative z-20"
    >
      <Select
        defaultValue={options[0]}
        options={options}
        onChange={handleSelectChange}
        formatOptionLabel={(option) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>Ordenar Por:</span>
            <span style={{ fontWeight: 'normal' }}>{option.label}</span>
          </div>
        )}
        isClearable={true}
        isSearchable={false}
        styles={StylesSelect}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'darkGray2',
          },
        })}
        className="w-80"
      />
    </motion.div>
  )
}

export default OrderCard
