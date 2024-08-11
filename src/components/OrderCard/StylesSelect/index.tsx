import { StylesConfig } from 'react-select'
import { ISelectOrder } from '@/interface'

export const StylesSelect: StylesConfig<ISelectOrder['options'][number], true> =
  {
    option: (base, state) => ({
      ...base,
      cursor: 'pointer',
      backgroundColor: state.isDisabled
        ? undefined
        : state.isSelected
          ? '#C92071' // Cor de fundo para item selecionado
          : state.isFocused
            ? '#C920714F' // Cor de fundo ao passar o mouse
            : undefined,
      color: state.isSelected
        ? '#FFFFFF' // Texto branco para item selecionado
        : '#C92071',
    }),

    // Item selecionado
    singleValue: (base) => ({
      ...base,
      cursor: 'pointer',
      color: '#474747',
      '&:hover': {
        color: '#C92071',
      },
    }),

    // "Select..."
    placeholder: (base) => ({
      ...base,
      cursor: 'pointer',
      color: '#474747',
      '&:hover': {
        color: '#C92071',
      },
    }),

    // Button de drop dos itens
    dropdownIndicator: (base) => ({
      ...base,
      cursor: 'pointer',
      color: '#474747',
      '&:hover': {
        color: '#C92071',
      },
    }),

    // Button de "X" do select
    clearIndicator: (base) => ({
      ...base,
      cursor: 'pointer',
      color: '#474747',
      '&:hover': {
        color: '#C92071',
      },
    }),

    // Container do select
    control: (base) => ({
      ...base,
      cursor: 'pointer',
      borderColor: '#474747',
      '&:hover': {
        borderColor: '#C92071',
      },
    }),
  }
