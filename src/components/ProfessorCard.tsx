
import React, { useState } from 'react';
import type { Professor } from '@/utils/professorData';
import { ProfessorModal } from './ProfessorModal';

interface ProfessorCardProps {
  professor: Professor;
  isShowAll?: boolean;
}

export const ProfessorCard = ({ professor, isShowAll = false }: ProfessorCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (isShowAll) {
    return (
      <div 
        className="professor-card card-hover h-80 rounded-xl bg-secondary/30 flex flex-col items-center justify-center cursor-pointer"
        onClick={() => window.location.href = '#all-professors'}
      >
        <div className="relative w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-primary">+</span>
        </div>
        <h3 className="text-lg font-semibold text-center">Show All</h3>
        <p className="text-sm text-gray-400 text-center mt-2">View all professors in this department</p>
      </div>
    );
  }
  
  return (
    <>
      <div 
        className="professor-card card-hover h-80 rounded-xl overflow-hidden relative"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-full">
          <img 
            src={professor.imageUrl} 
            alt={professor.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
        </div>
        
        <div className="professor-card-content absolute inset-0 p-6 flex flex-col justify-end text-white opacity-90 hover:opacity-100 transition-opacity">
          <h3 className="text-xl font-semibold truncate">{professor.name}</h3>
          <p className="text-sm text-gray-300 truncate">{professor.institution}</p>
          
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-sm text-gray-400">Citations</p>
              <p className="text-lg font-semibold">{professor.citations.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">H-Index</p>
              <p className="text-lg font-semibold">{professor.hIndex}</p>
            </div>
          </div>
        </div>
      </div>
      
      <ProfessorModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        professor={professor} 
      />
    </>
  );
};
