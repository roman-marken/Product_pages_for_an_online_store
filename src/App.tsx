import { useState } from 'react'
import ProductCard from './components/ProductCard'
import Section from './components/Section'
import { products } from './data/products'

const categories = ['Усі категорії', ...new Set(products.map((product) => product.category))]

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Усі категорії')
  const [onlyInStock, setOnlyInStock] = useState(false)

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase()) &&
    (category === 'Усі категорії' || product.category === category) &&
    (!onlyInStock || product.inStock),
  )

  // Порожній каталог не означає, що всі товари розпродані.
  const allSoldOut = products.length > 0 && !products.some((product) => product.inStock)

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <header className="flex items-center justify-between border-b border-stone-200 py-6">
        <a href="./" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#254d3c] text-white">к.</span>
          крамниця
        </a>
        <span className="text-xs text-stone-500 sm:text-sm">Речі для твого щодня</span>
      </header>

      <main className="py-10 sm:py-14">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">Просто. Зручно. На щодень.</p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Маленькі речі. Більше затишку.</h1>
          <p className="max-w-xl leading-7 text-stone-500">Корисні знахідки для дому, роботи й подорожей. Обирай те, що зробить твій день трохи кращим.</p>
        </div>

        <Section title="Каталог товарів">
          <div className="mb-6 flex flex-wrap items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4">
            <input
              type="search"
              aria-label="Пошук товарів"
              placeholder="Знайти щось корисне…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="min-w-0 flex-1 basis-48 rounded-lg border border-stone-200 px-3 py-2 text-sm"
            />
            <select aria-label="Категорія" value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-lg border border-stone-200 px-3 py-2 text-sm">
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
            <label className="flex items-center gap-2 text-sm text-stone-600">
              <input type="checkbox" checked={onlyInStock} onChange={(event) => setOnlyInStock(event.target.checked)} className="h-4 w-4 accent-emerald-800" />
              Лише в наявності
            </label>
          </div>

          {allSoldOut && <p role="status" className="mb-5 rounded-xl bg-amber-100 p-4 text-amber-900">Усі товари розпродані</p>}

          <div aria-live="polite">
            <p className="mb-4 text-sm text-stone-500">Знайдено товарів: {visibleProducts.length}</p>
            {visibleProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} badgeText={product.id === 1 ? 'Популярне' : undefined} />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-stone-300 p-12 text-center text-stone-500">
                {products.length === 0 ? 'Товарів поки немає' : 'Товарів не знайдено. Спробуйте змінити фільтри.'}
              </p>
            )}
          </div>
        </Section>
      </main>

      <footer className="border-t border-stone-200 py-6 text-sm text-stone-500">Крамниця · Навчальний каталог товарів</footer>
    </div>
  )
}

export default App
