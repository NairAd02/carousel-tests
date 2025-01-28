import { Product } from '@/app/components/products-carousel';
import Image from 'next/image';
import React from 'react';


interface Props {
  data: Product;
}

export default function ProductCard({ data: proyect }: Props) {
  return (
    <div className="group relative grid min-w-[100px] max-w-60 rounded-2xl bg-white p-2 pt-2 shadow-lg ring-1 ring-transparent duration-300 group-hover:shadow-lg group-hover:ring-gray-900 xs:max-w-64 sm:max-w-full">
    <div className="h-48 w-full cursor-pointer">
      <Image
        src={proyect.image}
        alt="Vista previa"
        width={400}
        height={200}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="flex flex-col gap-5 p-6">
      <h2 className="mb-2 truncate text-2xl font-bold text-black sm:text-3xl">
        {proyect.name}
      </h2>
      <div className="flex items-center  justify-end">
        <p className="text-xl font-bold text-black sm:text-2xl">
          {'$ ' + proyect.price}
        </p>
      </div>
    </div>
  </div>
  );
}