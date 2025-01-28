"use client"
import React from 'react';
import StandartCarousel from '@/components/ui/standard-carousel/standard-carousel';
import ProductCard from '@/components/generals/product-card/product-card';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

const products: Product[] = [
  {
    id: 'Producto 1',
    name: 'Producto 1',
    image: '/images/Asset 2verite.webp',
    price: 500,
  },
  {
    id: 'Producto 2',
    name: 'Producto 2',
    image: '/images/Asset 2verite.webp',
    price: 500,
  },
  {
    id: 'Producto 3',
    name: 'Producto 3',
    image: '/images/Asset 2verite.webp',
    price: 500,
  },
  // {
  //   id: 'Producto 4',
  //   name: 'Producto 4',
  //   image: '/images/Asset 2verite.webp',
  //   price: 500,
  // },
];

export default function ProductsCarousel() {
  return (
    <StandartCarousel
      items={products}
      dimsension="100vw"
      itemsStyles="-ml-4 basis-[80%] *:mx-auto xs:basis-[60%] sm:basis-[40%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
      renderCard={(item) => <ProductCard data={item} />}
    />
  );
}
