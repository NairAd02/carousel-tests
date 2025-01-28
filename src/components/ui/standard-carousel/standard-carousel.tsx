"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import React from 'react';
import useStandardCarousel from './hooks/use-standard-carousel';



interface Props<T> {
  items: T[];
  dimsension: string
  itemsStyles: string;
  renderCard: (item: T) => React.ReactNode;
}

export default function StandartCarousel<T extends { id: any }>({
  items,
  dimsension,
  renderCard,
  itemsStyles,
}: Props<T>) {
  const { isCentered } = useStandardCarousel({
    cantElements: items.length,
  });
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="relative w-full"
      style={{
        maxWidth: dimsension,
      }}
    >
      <CarouselContent
        className={cn(
          'flex p-2 pb-9 pl-6 pt-6 sm:gap-6 sm:p-8',
          isCentered ? 'justify-center' : 'justify-start',
        )}
      >
        {items.map((item) => (
          <CarouselItem key={item.id} className={itemsStyles}>
            {renderCard(item)}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
