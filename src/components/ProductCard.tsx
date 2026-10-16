import clsx from 'clsx'
import type { Product } from '../types/Product'
import Card from './Card'

type ProductCardProps = {
  product: Product
  badgeText?: string
}

const productIcons: Record<number, string> = {
  1: '🎧',
  2: '🎒',
  3: '☕',
  4: '💡',
  5: '🔊',
  6: '🥤',
}

const formatPrice = (price: number) => `${price.toLocaleString('uk-UA')} ₴`

export default function ProductCard({ product, badgeText = 'Новинка' }: ProductCardProps) {
  const { name, description, price, category, inStock, discount } = product
  const hasDiscount = discount !== undefined && discount > 0
  const finalPrice = hasDiscount ? Math.round(price * (1 - discount / 100)) : price

  return (
    <Card className="flex flex-col p-4 transition-shadow hover:shadow-md">
      <div className={clsx('relative mb-5 flex h-36 items-center justify-center rounded-xl', {
        'bg-emerald-50': category === 'Електроніка',
        'bg-orange-50': category === 'Аксесуари',
        'bg-stone-100': category === 'Для дому',
      })}>
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium">{badgeText}</span>
        <span aria-hidden="true" className="text-6xl">{productIcons[product.id] ?? '📦'}</span>
        {hasDiscount && (
          <span className="absolute bottom-3 right-3 rounded-full bg-[#dce9b8] px-3 py-1 text-xs font-bold">−{discount}%</span>
        )}
      </div>
      <p className="mb-2 text-xs text-stone-500">{category}</p>
      <h3 className="mb-2 text-lg font-semibold">{name}</h3>
      <p className="mb-5 grow text-sm leading-6 text-stone-500">{description}</p>
      <p className={clsx('mb-3 flex items-center gap-2 text-xs', inStock ? 'text-emerald-700' : 'text-stone-500')}>
        <span aria-hidden="true" className={clsx('h-1.5 w-1.5 rounded-full', inStock ? 'bg-emerald-600' : 'bg-stone-400')} />
        {inStock ? 'Є в наявності' : 'Немає в наявності'}
      </p>
      <div className="flex items-baseline gap-3 border-t border-stone-100 pt-3">
        <span className="text-xl font-semibold">{formatPrice(finalPrice)}</span>
        {hasDiscount && (
          <span className="text-sm text-stone-400 line-through" aria-label={`Ціна без знижки: ${formatPrice(price)}`}>
            {formatPrice(price)}
          </span>
        )}
      </div>
    </Card>
  )
}
