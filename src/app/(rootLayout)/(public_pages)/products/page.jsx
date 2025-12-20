'use client';

import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import { useEffect, useMemo, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
      );
      const data = await res.json();
      setProducts(data);
      // setFilteredProducts(data);
    }
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery) {
      result = result.filter(product =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sort
    if (sortOption === 'high') {
      result.sort((a, b) => b.productPrice - a.productPrice);
    } else if (sortOption === 'low') {
      result.sort((a, b) => a.productPrice - b.productPrice);
    }

    return result;
  }, [sortOption, searchQuery, products]);

  return (
    <section className='py-14 h-full'>
      <Container>
        <SectionTitle
          title='All Products'
          desc='Shop every product for happy, healthy pets'
        />
        {/* Filter */}
        <div className='flex sm:justify-between flex-col sm:flex-row items-center gap-2 mb-8'>
          <select
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className='select'>
            <option disabled={true} value=''>
              Sort products
            </option>
            <option value='high'>Sort by High Price</option>
            <option value='low'>Sort by Low Price</option>
          </select>
          <label className='input'>
            <svg
              className='h-[1em] opacity-50'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <g
                strokeLinejoin='round'
                strokeLinecap='round'
                strokeWidth='2.5'
                fill='none'
                stroke='currentColor'>
                <circle cx='11' cy='11' r='8'></circle>
                <path d='m21 21-4.3-4.3'></path>
              </g>
            </svg>
            <input
              type='search'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder='Search'
            />
          </label>
        </div>
        {/* Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
