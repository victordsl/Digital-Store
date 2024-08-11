import axios from 'axios'
import { IProductCard } from '@/interface'

class Service {
  async products() {
    return await api.get('/products')
  }
  async product({ slug }: Pick<IProductCard, 'slug'>) {
    return await api.get(`/product/${slug}`)
  }
}

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
})

export default new Service()
