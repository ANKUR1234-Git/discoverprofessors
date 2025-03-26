
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Professor, Department, getTopProfessorsByDepartment, fetchProfessorsData } from '@/utils/professorData';
import { ProfessorCard } from './ProfessorCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface DepartmentSectionProps {
  department: Department;
}

export const DepartmentSection = ({ department }: DepartmentSectionProps) => {
  const [topProfessors, setTopProfessors] = useState<Professor[]>([]);
  const isMobile = useIsMobile();
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initially use static data
    const staticProfessors = getTopProfessorsByDepartment(department.id);
    setTopProfessors(staticProfessors);
    
    // Try to fetch from Supabase
    const fetchData = async () => {
      try {
        const fetchedProfessors = await fetchProfessorsData();
        const filteredProfessors = fetchedProfessors
          .filter(prof => prof.collegeOrCompany === department.id)
          .sort((a, b) => b.citations - a.citations)
          .slice(0, 5);
          
        if (filteredProfessors.length > 0) {
          setTopProfessors(filteredProfessors);
        }
      } catch (error) {
        console.error("Error fetching department professors:", error);
      }
    };
    
    fetchData();
  }, [department.id]);

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
  
  // Make sure we have professors to display
  if (topProfessors.length === 0) {
    return null;
  }
  
  return (
    <section className="department-section py-12 bg-secondary/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{department.name} Domain</h2>
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
          {topProfessors.map((professor, index) => (
            <div 
              key={`${professor.name}-${index}`}
              className="w-[280px] shrink-0 snap-start"
            >
              <ProfessorCard professor={professor} />
            </div>
          ))}
          
          {topProfessors.length > 0 && (
            <div className="w-[280px] shrink-0 snap-start">
              <Link 
                to={`/department/${department.id}`} 
                state={{ from: 'home' }}
              >
                <ProfessorCard isShowAll professor={topProfessors[0]} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
