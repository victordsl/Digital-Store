import { IProductCard } from '@/interface'
import {
  ProductCategory,
  ProductGender,
  ProductSession,
  ProductBrand,
} from '@/enum'

export const Products: IProductCard[] = [
  {
    id: 1,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.MALE,
    name: 'Nike Air Jordan 11 Retro "Space Jam"',
    price: 2199.99,
    discount: 20,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png',
    description:
      'Clássico tênis Nike Air Jordan, perfeito para um look casual e confortável.',
    slug: 'nike-air-jordan-11-retro-space-jam',
  },
  {
    id: 2,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.MALE,
    name: "Nike Air Jordan 11 Retro 'Win Like '96'",
    price: 1499.99,
    discount: 30,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png',
    description:
      'Tênis Nike Air Jordan 11 com design moderno, ideal para uso diário e casual.',
    slug: 'nike-air-jordan-11-retro-win-like-96',
  },
  {
    id: 3,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.MALE,
    name: "Nike Air Jordan 11 Retro 'Legend Blue'",
    price: 1499.99,
    discount: 30,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png',
    description:
      'Design elegante e conforto garantido com o Nike Air Jordan 11 Legend Blue.',
  },
  {
    id: 4,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.FEMALE,
    name: "Nike Air Jordan 11 Retro Low 'Pink Snakeskin'",
    price: 1499.99,
    discount: 30,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/021/357/907/original/478963_00.png.png',
    description:
      'Tênis estiloso com detalhe em pink snakeskin, ideal para um look diferenciado.',
  },
  {
    id: 5,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.MALE,
    name: "Nike Air Jordan 11 Retro Low 'Navy Snakeskin'",
    price: 1499.99,
    discount: 30,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/020/310/667/original/459705_00.png.png',
    description:
      'Combine conforto e estilo com o Nike Air Jordan 11 Navy Snakeskin.',
  },
  {
    id: 6,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.MALE,
    name: "Nike Air Jordan 11 Retro Low 'Light Bone Snakeskin'",
    price: 1499.99,
    discount: 30,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/021/219/116/original/CD6846_002.png.png',
    description:
      'Tênis leve e confortável com detalhe em snakeskin, perfeito para qualquer ocasião.',
  },
  {
    id: 7,
    type: 'Tênis',
    session: ProductSession.CHILD,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.UNISEX,
    name: "Nike Sneaker Politics x Air Jordan 1 Low 'Block Party's'",
    price: 5490.99,
    discount: 50,
    size: '30, 31, 32, 33, 34, 35',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/021/317/617/original/SP_AJ1_LOW_BP.png.png',
    description:
      'Design único e confortável, ideal para quem busca estilo e exclusividade.',
  },
  {
    id: 8,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.UNISEX,
    name: "Nike OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'",
    price: 5490.99,
    discount: 30,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png',
    description:
      'Colaboração exclusiva Nike OFF-WHITE, perfeito para um look sofisticado.',
  },
  {
    id: 9,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.UNISEX,
    name: "Nike Travis Scott x Air Jordan 4 Retro 'Cactus Jack'",
    price: 9999.99,
    discount: 30,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/012/478/518/original/365514_00.png.png',
    description:
      'Tênis icônico em colaboração com Travis Scott, ideal para colecionadores.',
  },
  {
    id: 10,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.MALE,
    name: "Nike Air Jordan 1 Retro High OG Spider Man 'Origin Story'",
    price: 1999.99,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/016/867/969/original/478648_00.png.png',
    description:
      'Inspire-se no Homem-Aranha com o Nike Air Jordan 1 Origin Story, super estiloso.',
  },
  {
    id: 11,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.FEMALE,
    name: "Nike Air Jordan 1 Retro High OG 'Turbo Green'",
    price: 2149.9,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/018/552/901/original/404758_00.png.png',
    description:
      'Tênis com design moderno e cores vibrantes, perfeito para um look casual.',
  },
  {
    id: 12,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.FEMALE,
    name: "Nike Air Jordan 1 Retro High OG 'Crimson Tint'",
    price: 1499.99,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/020/249/059/original/485842_00.png.png',
    description:
      'Tênis feminino com cores vibrantes, ideal para quem busca estilo e conforto.',
  },
  {
    id: 13,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.CASUAL,
    brand: ProductBrand.NIKE,
    gender: ProductGender.MALE,
    name: "Nike Air Jordan 1 Retro High SB 'Lakers'",
    price: 3640.9,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/020/270/533/original/CD6578_507.png.png',
    description:
      'Tênis inspirado nos Lakers, perfeito para fãs de basquete e colecionadores.',
  },
  {
    id: 14,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.SPORT,
    brand: ProductBrand.ADIDAS,
    gender: ProductGender.UNISEX,
    name: "Adidas Yeezy Boost 350 V2 'Black Non-Reflective'",
    price: 1399.99,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/020/624/696/original/FU9013.png.png',
    description:
      'Tênis Adidas Yeezy Boost, conforto e estilo em um design exclusivo e moderno.',
  },
  {
    id: 15,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.SPORT,
    brand: ProductBrand.ADIDAS,
    gender: ProductGender.UNISEX,
    name: "Adidas Yeezy Boost 350 V2 'Beluga 2.0'",
    price: 5999.99,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/008/654/534/original/152982_00.png.png',
    description:
      'Tênis Adidas Yeezy Beluga 2.0, estilo e conforto para qualquer ocasião.',
  },
  {
    id: 16,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.SPORT,
    brand: ProductBrand.ADIDAS,
    gender: ProductGender.UNISEX,
    name: "Adidas Yeezy Boost 350 V2 'Sesame'",
    price: 6348.99,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/014/037/000/original/357808_00.png.png',
    description:
      'Design moderno e conforto absoluto com o Adidas Yeezy Boost 350 V2 Sesame.',
  },
  {
    id: 17,
    type: 'Tênis',
    session: ProductSession.ADULT,
    category: ProductCategory.SPORT,
    brand: ProductBrand.ADIDAS,
    gender: ProductGender.UNISEX,
    name: "Adidas Yeezy Boost 350 V2 'Blue Tint'",
    price: 6933.99,
    size: '38, 39, 40, 41, 42, 43',
    image:
      'https://image.goat.com/attachments/product_template_pictures/images/008/707/328/original/152603_00.png.png',
    description:
      'Conforto e design inovador com o Adidas Yeezy Boost 350 V2 Blue Tint.',
  },
]
