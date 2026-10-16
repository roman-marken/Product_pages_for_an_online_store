import type { Product } from '../types/Product'

// Ціни в гривнях, знижки у відсотках.
export const products: Product[] = [
  {
    id: 1,
    name: 'Бездротові навушники',
    description: 'Улюблена музика без зайвих дротів. До 30 годин роботи від одного заряду.',
    price: 2400,
    category: 'Електроніка',
    inStock: true,
    discount: 15,
  },
  {
    id: 2,
    name: 'Міський рюкзак',
    description: 'Легкий рюкзак із відділенням для ноутбука та кишенями для дрібниць.',
    price: 1650,
    category: 'Аксесуари',
    inStock: true,
  },
  {
    id: 3,
    name: 'Керамічна чашка',
    description: 'Трохи затишку до ранкової кави. Матова кераміка, об’єм 350 мл.',
    price: 420,
    category: 'Для дому',
    inStock: false,
    discount: 10,
  },
  {
    id: 4,
    name: 'Настільна лампа',
    description: 'М’яке тепле світло для читання, навчання та спокійних вечорів.',
    price: 1290,
    category: 'Для дому',
    inStock: true,
  },
  {
    id: 5,
    name: 'Портативна колонка',
    description: 'Компактний звук для прогулянок і подорожей. Захист від бризок.',
    price: 1800,
    category: 'Електроніка',
    inStock: false,
  },
  {
    id: 6,
    name: 'Термопляшка',
    description: 'Зберігає напій гарячим до 8 годин. Зручно брати із собою щодня.',
    price: 750,
    category: 'Аксесуари',
    inStock: true,
    discount: 20,
  },
]
