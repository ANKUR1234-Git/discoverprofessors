
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Professor, Department, getTopProfessorsByDepartment, getAllProfessorsByDepartment } from '@/utils/professorData';
import { ProfessorCard } from './ProfessorCard';
import { useIsMobile } from '@/hooks/use-mobile';

interface DepartmentSectionProps {
  department: Department;
}

export const DepartmentSection = ({ department }: DepartmentSectionProps) => {
  const [showAllProfessors, setShowAllProfessors] = useState(false);
  const topProfessors = getTopProfessorsByDepartment(department.id);
  const allProfessors = getAllProfessorsByDepartment(department.id);
  const isMobile = useIsMobile();
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const scrollAmount = 330; // Card width + gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };
  
  return (
    <section className={`department-section py-12 ${department.backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{department.name}</h2>
          {!isMobile && (
            <div className="flex space-x-2">
              <button 
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        
        {/* Horizontal Scrolling Section */}
        <div 
          ref={scrollRef}
          className="professor-section flex overflow-x-auto pb-6 space-x-4 no-scrollbar snap-x"
        >
          {topProfessors.map((professor) => (
            <div 
              key={professor.id}
              className="w-[280px] shrink-0 snap-start"
            >
              <ProfessorCard professor={professor} />
            </div>
          ))}
          
          <div className="w-[280px] shrink-0 snap-start">
            <ProfessorCard isShowAll professor={topProfessors[0]} />
          </div>
        </div>
        
        {/* Grid View - All Professors */}
        <div id="all-professors" className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">All {department.name} Professors</h3>
            <button 
              onClick={() => setShowAllProfessors(!showAllProfessors)}
              className="text-primary text-sm font-medium hover:underline transition-colors"
            >
              {showAllProfessors ? 'Show Less' : 'Show All'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {(showAllProfessors ? allProfessors : allProfessors.slice(0, 5)).map((professor) => (
              <div key={professor.id}>
                <ProfessorCard professor={professor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
