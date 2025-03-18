
import React, { useEffect, useRef } from 'react';
import { X, Award, BookOpen, BookText, Link, Mail, Building } from 'lucide-react';
import type { Professor } from '@/utils/professorData';
import { animateNumber } from '@/utils/animations';

interface ProfessorModalProps {
  isOpen: boolean;
  onClose: () => void;
  professor: Professor;
}

export const ProfessorModal = ({ isOpen, onClose, professor }: ProfessorModalProps) => {
  const citationsRef = useRef<HTMLSpanElement>(null);
  const hIndexRef = useRef<HTMLSpanElement>(null);
  const i10IndexRef = useRef<HTMLSpanElement>(null);
  const publicationsRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Animate metrics once modal is open
      setTimeout(() => {
        if (citationsRef.current) {
          animateNumber(citationsRef.current, 0, professor.citations);
        }
        if (hIndexRef.current) {
          animateNumber(hIndexRef.current, 0, professor.hIndex);
        }
        if (i10IndexRef.current) {
          animateNumber(i10IndexRef.current, 0, professor.i10Index);
        }
        if (publicationsRef.current) {
          animateNumber(publicationsRef.current, 0, professor.publications);
        }
      }, 300);
    }
  }, [isOpen, professor]);
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-scale-up">
        <div className="w-full max-w-4xl max-h-[90vh] bg-background border border-white/10 rounded-xl overflow-hidden shadow-2xl relative">
          {/* Modal Header with Close Button */}
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          {/* Modal Content */}
          <div className="overflow-y-auto max-h-[90vh] no-scrollbar">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-modal-gradient opacity-30"></div>
            
            <div className="relative p-6 sm:p-8 z-10">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Professor Image */}
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="aspect-square rounded-xl overflow-hidden border border-white/20 shadow-lg">
                    <img 
                      src={professor.imageUrl} 
                      alt={professor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Institution and Contact */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-primary" />
                      <span className="text-sm">{professor.institution}</span>
                    </div>
                    
                    <button className="w-full py-2.5 bg-primary/90 hover:bg-primary text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Contact Professor</span>
                    </button>
                  </div>
                </div>
                
                {/* Professor Details */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{professor.name}</h2>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                    <div className="bg-secondary/40 rounded-lg p-4 text-center">
                      <h3 className="text-sm text-gray-400 mb-1">Citations</h3>
                      <div className="text-2xl font-bold">
                        <span ref={citationsRef}>0</span>
                      </div>
                    </div>
                    <div className="bg-secondary/40 rounded-lg p-4 text-center">
                      <h3 className="text-sm text-gray-400 mb-1">H-Index</h3>
                      <div className="text-2xl font-bold">
                        <span ref={hIndexRef}>0</span>
                      </div>
                    </div>
                    <div className="bg-secondary/40 rounded-lg p-4 text-center">
                      <h3 className="text-sm text-gray-400 mb-1">i10-Index</h3>
                      <div className="text-2xl font-bold">
                        <span ref={i10IndexRef}>0</span>
                      </div>
                    </div>
                    <div className="bg-secondary/40 rounded-lg p-4 text-center">
                      <h3 className="text-sm text-gray-400 mb-1">Publications</h3>
                      <div className="text-2xl font-bold">
                        <span ref={publicationsRef}>0</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <BookText className="h-5 w-5 mr-2 text-primary" />
                      Biography
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{professor.bio}</p>
                  </div>
                  
                  {/* Research Interests */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Research Interests
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {professor.researchInterests.map((interest, index) => (
                        <span 
                          key={index}
                          className="bg-secondary/60 rounded-full px-3 py-1 text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
