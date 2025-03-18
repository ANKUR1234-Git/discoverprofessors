
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const carouselItems = [
  {
    id: 1,
    title: "Discover Top Professors Across India",
    description: "Find and connect with leading academic experts in various fields."
  },
  {
    id: 2,
    title: "Explore Research Excellence",
    description: "Access professors with the highest research impact and citations."
  },
  {
    id: 3,
    title: "Find Your Academic Mentor",
    description: "Connect with professors who align with your research interests."
  },
  {
    id: 4,
    title: "Stay Updated with Latest Research",
    description: "Discover the most cited and influential papers in your field."
  },
  {
    id: 5,
    title: "Compare Academic Metrics",
    description: "Analyze H-index, citations, and publications across professors."
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={item.id} className={`min-h-[200px] ${index === currentSlide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 absolute inset-0`}>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">{item.title}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
