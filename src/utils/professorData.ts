export interface Professor {
  name: string;
  affiliation: string;
  hIndex: number;
  i10Index: number;
  citations: number;
  collegeOrCompany: string;
  researchInterest1: string;
  researchInterest2: string;
  bio: string;
}

export interface Department {
  id: string;
  name: string;
  backgroundClass: string;
}

export const departments: Department[] = [
  {
    id: "cs",
    name: "Computer Science",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "civil",
    name: "Civil Engineering",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "chemical",
    name: "Chemical Engineering",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "physics",
    name: "Physics",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "mathematics",
    name: "Mathematics",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "arts",
    name: "Arts & Humanities",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "business",
    name: "Business Management",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "medicine",
    name: "Medical Sciences",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  }
];

export const fetchProfessorsData = async (): Promise<Professor[]> => {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/professors`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error("Failed to fetch professors data:", await response.text());
      return professors; // Return static data as fallback
    }

    const data = await response.json();
    return data.map((prof: any) => ({
      name: prof.name || "Unknown",
      affiliation: prof.affiliation || prof.institution || "Unknown",
      hIndex: prof.hIndex || 0,
      i10Index: prof.i10Index || 0,
      citations: prof.citations || 0,
      collegeOrCompany: prof.collegeOrCompany || prof.institution || prof.affiliation || "Unknown",
      researchInterest1: prof.researchInterest1 || (prof.researchInterests && prof.researchInterests[0]) || "General Research",
      researchInterest2: prof.researchInterest2 || (prof.researchInterests && prof.researchInterests[1]) || "Academic Studies",
      bio: prof.bio || "No biography available."
    }));
  } catch (error) {
    console.error("Error fetching professors data:", error);
    return professors; // Return static data as fallback
  }
};

export const professors: Professor[] = [
  // Computer Science
  {
    name: "Dr. Rajiv Misra",
    affiliation: "IIT Patna",
    collegeOrCompany: "IIT Patna",
    hIndex: 38,
    i10Index: 79,
    citations: 5891,
    bio: "Dr. Rajiv Misra is a Professor at the Department of Computer Science and Engineering, IIT Patna. He received his Ph.D. from IIT Kharagpur and has over 20 years of teaching and research experience.",
    researchInterest1: "Network Security",
    researchInterest2: "Machine Learning"
  },
  {
    name: "Dr. Sunita Sharma",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    hIndex: 45,
    i10Index: 98,
    citations: 7532,
    bio: "Dr. Sunita Sharma is a Professor at the Department of Computer Science and Engineering, IIT Bombay. She has made significant contributions to the field of artificial intelligence and distributed systems.",
    researchInterest1: "Artificial Intelligence",
    researchInterest2: "Distributed Systems"
  },
  {
    name: "Dr. Amit Kumar",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    hIndex: 42,
    i10Index: 86,
    citations: 6743,
    bio: "Dr. Amit Kumar is a Professor at the Department of Computer Science and Engineering, IIT Delhi. His research focuses on algorithm design and optimization techniques.",
    researchInterest1: "Algorithm Design",
    researchInterest2: "Optimization"
  },
  {
    name: "Dr. Priya Gupta",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    hIndex: 36,
    i10Index: 74,
    citations: 5103,
    bio: "Dr. Priya Gupta is an Associate Professor at the Department of Computer Science, IIT Madras. She specializes in computer vision and machine learning applications.",
    researchInterest1: "Computer Vision",
    researchInterest2: "Machine Learning"
  },
  {
    name: "Dr. Vikram Singh",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    hIndex: 39,
    i10Index: 81,
    citations: 6012,
    bio: "Dr. Vikram Singh is a Professor at the Department of Computer Science and Engineering, IIT Kanpur. His research interests include data mining and big data analytics.",
    researchInterest1: "Data Mining",
    researchInterest2: "Big Data Analytics"
  },
  
  // Mechanical Engineering
  {
    name: "Dr. Narendra Kumar",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    hIndex: 31,
    i10Index: 65,
    citations: 4521,
    bio: "Dr. Narendra Kumar is a Professor at the Department of Mechanical Engineering, IIT Roorkee. He specializes in thermal engineering and energy systems.",
    researchInterest1: "Thermal Engineering",
    researchInterest2: "Energy Systems"
  },
  {
    name: "Dr. Ananya Das",
    affiliation: "IIT Kharagpur",
    collegeOrCompany: "IIT Kharagpur",
    hIndex: 29,
    i10Index: 58,
    citations: 3987,
    bio: "Dr. Ananya Das is an Associate Professor at the Department of Mechanical Engineering, IIT Kharagpur. Her research focuses on manufacturing processes and materials.",
    researchInterest1: "Manufacturing Processes",
    researchInterest2: "Materials Science"
  },
  {
    name: "Dr. Rahul Verma",
    affiliation: "IIT Guwahati",
    collegeOrCompany: "IIT Guwahati",
    hIndex: 27,
    i10Index: 52,
    citations: 3654,
    bio: "Dr. Rahul Verma is a Professor at the Department of Mechanical Engineering, IIT Guwahati. He specializes in robotics and automation.",
    researchInterest1: "Robotics",
    researchInterest2: "Automation"
  },
  {
    name: "Dr. Meera Patel",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    hIndex: 30,
    i10Index: 62,
    citations: 4312,
    bio: "Dr. Meera Patel is a Professor at the Department of Mechanical Engineering, IIT Bombay. Her research interests include fluid mechanics and thermal sciences.",
    researchInterest1: "Fluid Mechanics",
    researchInterest2: "Thermal Sciences"
  },
  {
    name: "Dr. Sanjay Joshi",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    hIndex: 32,
    i10Index: 67,
    citations: 4765,
    bio: "Dr. Sanjay Joshi is a Professor at the Department of Mechanical Engineering, IIT Delhi. He specializes in dynamics and vibration analysis.",
    researchInterest1: "Dynamics",
    researchInterest2: "Vibration Analysis"
  },
  
  // Electrical Engineering
  {
    name: "Dr. Rajeev Sharma",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    hIndex: 34,
    i10Index: 70,
    citations: 4932,
    bio: "Dr. Rajeev Sharma is a Professor at the Department of Electrical Engineering, IIT Bombay. His research focuses on power systems and smart grids.",
    researchInterest1: "Power Systems",
    researchInterest2: "Smart Grids"
  },
  {
    name: "Dr. Nandini Rao",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    hIndex: 36,
    i10Index: 73,
    citations: 5087,
    bio: "Dr. Nandini Rao is a Professor at the Department of Electrical Engineering, IIT Madras. She specializes in communication systems and signal processing.",
    researchInterest1: "Communication Systems",
    researchInterest2: "Signal Processing"
  },
  {
    name: "Dr. Ajay Gupta",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    hIndex: 32,
    i10Index: 65,
    citations: 4621,
    bio: "Dr. Ajay Gupta is a Professor at the Department of Electrical Engineering, IIT Kanpur. His research interests include control systems and robotics.",
    researchInterest1: "Control Systems",
    researchInterest2: "Robotics"
  },
  {
    name: "Dr. Kavita Mehta",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    hIndex: 30,
    i10Index: 61,
    citations: 4254,
    bio: "Dr. Kavita Mehta is an Associate Professor at the Department of Electrical Engineering, IIT Delhi. She specializes in microelectronics and VLSI design.",
    researchInterest1: "Microelectronics",
    researchInterest2: "VLSI Design"
  },
  {
    name: "Dr. Prakash Iyer",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    hIndex: 33,
    i10Index: 68,
    citations: 4821,
    bio: "Dr. Prakash Iyer is a Professor at the Department of Electrical Engineering, IIT Roorkee. His research focuses on power electronics and renewable energy systems.",
    researchInterest1: "Power Electronics",
    researchInterest2: "Renewable Energy Systems"
  },
  
  // Civil Engineering
  {
    name: "Dr. Ravi Kumar",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    hIndex: 28,
    i10Index: 56,
    citations: 3912,
    bio: "Dr. Ravi Kumar is a Professor at the Department of Civil Engineering, IIT Madras. His research focuses on structural engineering and earthquake-resistant design.",
    researchInterest1: "Structural Engineering",
    researchInterest2: "Earthquake Engineering"
  },
  {
    name: "Dr. Sarita Agarwal",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    hIndex: 25,
    i10Index: 49,
    citations: 3421,
    bio: "Dr. Sarita Agarwal is a Professor at the Department of Civil Engineering, IIT Roorkee. She specializes in environmental engineering and waste management.",
    researchInterest1: "Environmental Engineering",
    researchInterest2: "Waste Management"
  },
  {
    name: "Dr. Mohan Reddy",
    affiliation: "IIT Kharagpur",
    collegeOrCompany: "IIT Kharagpur",
    hIndex: 27,
    i10Index: 54,
    citations: 3765,
    bio: "Dr. Mohan Reddy is a Professor at the Department of Civil Engineering, IIT Kharagpur. His research interests include geotechnical engineering and foundation design.",
    researchInterest1: "Geotechnical Engineering",
    researchInterest2: "Foundation Design"
  },
  {
    name: "Dr. Priyanka Desai",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    hIndex: 26,
    i10Index: 52,
    citations: 3543,
    bio: "Dr. Priyanka Desai is an Associate Professor at the Department of Civil Engineering, IIT Bombay. She specializes in transportation engineering and urban planning.",
    researchInterest1: "Transportation Engineering",
    researchInterest2: "Urban Planning"
  },
  {
    name: "Dr. Suresh Menon",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    hIndex: 29,
    i10Index: 58,
    citations: 3987,
    bio: "Dr. Suresh Menon is a Professor at the Department of Civil Engineering, IIT Delhi. His research focuses on water resources engineering and hydraulic structures.",
    researchInterest1: "Water Resources",
    researchInterest2: "Hydraulic Structures"
  },
  
  // Chemical Engineering
  {
    name: "Dr. Anil Gupta",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    hIndex: 31,
    i10Index: 64,
    citations: 4487,
    bio: "Dr. Anil Gupta is a Professor at the Department of Chemical Engineering, IIT Bombay. His research focuses on reaction engineering and catalysis.",
    researchInterest1: "Reaction Engineering",
    researchInterest2: "Catalysis"
  },
  {
    name: "Dr. Neha Singhania",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    hIndex: 28,
    i10Index: 56,
    citations: 3821,
    bio: "Dr. Neha Singhania is a Professor at the Department of Chemical Engineering, IIT Madras. She specializes in polymer science and engineering.",
    researchInterest1: "Polymer Science",
    researchInterest2: "Materials Engineering"
  },
  {
    name: "Dr. Ramesh Nair",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    hIndex: 30,
    i10Index: 62,
    citations: 4312,
    bio: "Dr. Ramesh Nair is a Professor at the Department of Chemical Engineering, IIT Kanpur. His research interests include separation processes and membrane technology.",
    researchInterest1: "Separation Processes",
    researchInterest2: "Membrane Technology"
  },
  {
    name: "Dr. Shalini Tripathi",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    hIndex: 27,
    i10Index: 54,
    citations: 3765,
    bio: "Dr. Shalini Tripathi is an Associate Professor at the Department of Chemical Engineering, IIT Roorkee. She specializes in biochemical engineering and biotechnology.",
    researchInterest1: "Biochemical Engineering",
    researchInterest2: "Biotechnology"
  },
  {
    name: "Dr. Vivek Choudhary",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    hIndex: 29,
    i10Index: 59,
    citations: 4098,
    bio: "Dr. Vivek Choudhary is a Professor at the Department of Chemical Engineering, IIT Delhi. His research focuses on process control and optimization.",
    researchInterest1: "Process Control",
    researchInterest2: "Optimization"
  },
  
  // Physics
  {
    name: "Dr. Ashok Patel",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    hIndex: 40,
    i10Index: 82,
    citations: 5632,
    bio: "Dr. Ashok Patel is a Professor at the Department of Physics, IIT Bombay. His research focuses on condensed matter physics and quantum materials.",
    researchInterest1: "Condensed Matter Physics",
    researchInterest2: "Quantum Materials"
  },
  {
    name: "Dr. Sudha Mehta",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    hIndex: 38,
    i10Index: 76,
    citations: 5248,
    bio: "Dr. Sudha Mehta is a Professor at the Department of Physics, IIT Delhi. She specializes in high energy physics and particle accelerators.",
    researchInterest1: "High Energy Physics",
    researchInterest2: "Particle Physics"
  },
  {
    name: "Dr. Ramachandran K.",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    hIndex: 42,
    i10Index: 87,
    citations: 6124,
    bio: "Dr. Ramachandran K. is a Professor at the Department of Physics, IIT Madras. His research interests include astrophysics and cosmology.",
    researchInterest1: "Astrophysics",
    researchInterest2: "Cosmology"
  },
  {
    name: "Dr. Anita Sharma",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    hIndex: 36,
    i10Index: 74,
    citations: 4876,
    bio: "Dr. Anita Sharma is an Associate Professor at the Department of Physics, IIT Kanpur. She specializes in optical physics and quantum optics.",
    researchInterest1: "Optical Physics",
    researchInterest2: "Quantum Optics"
  },
  {
    name: "Dr. Venkatesh Iyer",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    hIndex: 34,
    i10Index: 69,
    citations: 4532,
    bio: "Dr. Venkatesh Iyer is a Professor at the Department of Physics, IIT Roorkee. His research focuses on nuclear physics and radiation detectors.",
    researchInterest1: "Nuclear Physics",
    researchInterest2: "Radiation Detectors"
  },
  
  // Mathematics
  {
    name: "Dr. Sameer Mathur",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    hIndex: 32,
    i10Index: 65,
    citations: 4125,
    bio: "Dr. Sameer Mathur is a Professor at the Department of Mathematics, IIT Kanpur. His research focuses on algebraic geometry and number theory.",
    researchInterest1: "Algebraic Geometry",
    researchInterest2: "Number Theory"
  },
  {
    name: "Dr. Jayashree Ramakrishnan",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    hIndex: 30,
    i10Index: 61,
    citations: 3865,
    bio: "Dr. Jayashree Ramakrishnan is a Professor at the Department of Mathematics, IIT Madras. She specializes in analysis and differential equations.",
    researchInterest1: "Analysis",
    researchInterest2: "Differential Equations"
  },
  {
    name: "Dr. Harish Verma",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    hIndex: 35,
    i10Index: 72,
    citations: 4567,
    bio: "Dr. Harish Verma is a Professor at the Department of Mathematics, IIT Delhi. His research interests include topology and geometric analysis.",
    researchInterest1: "Topology",
    researchInterest2: "Geometric Analysis"
  },
  {
    name: "Dr. Nirmala Devi",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    hIndex: 29,
    i10Index: 59,
    citations: 3654,
    bio: "Dr. Nirmala Devi is an Associate Professor at the Department of Mathematics, IIT Bombay. She specializes in algebra and representation theory.",
    researchInterest1: "Algebra",
    researchInterest2: "Representation Theory"
  },
  {
    name: "Dr. Rajendra Prasad",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    hIndex: 27,
    i10Index: 55,
    citations: 3421,
    bio: "Dr. Rajendra Prasad is a Professor at the Department of Mathematics, IIT Roorkee. His research focuses on numerical analysis and computational mathematics.",
    researchInterest1: "Numerical Analysis",
    researchInterest2: "Computational Mathematics"
  },
  
  // Arts & Humanities
  {
    name: "Dr. Aruna Sharma",
    affiliation: "Delhi University",
    collegeOrCompany: "Delhi University",
    hIndex: 22,
    i10Index: 45,
    citations: 2865,
    bio: "Dr. Aruna Sharma is a Professor at the Department of English, Delhi University. Her research focuses on postcolonial literature and cultural studies.",
    researchInterest1: "Postcolonial Literature",
    researchInterest2: "Cultural Studies"
  },
  {
    name: "Dr. Vikrant Pandey",
    affiliation: "Jawaharlal Nehru University",
    collegeOrCompany: "Jawaharlal Nehru University",
    hIndex: 24,
    i10Index: 49,
    citations: 3012,
    bio: "Dr. Vikrant Pandey is a Professor at the Department of History, Jawaharlal Nehru University. He specializes in ancient Indian history and archaeology.",
    researchInterest1: "Ancient Indian History",
    researchInterest2: "Archaeology"
  },
  {
    name: "Dr. Meenakshi Reddy",
    affiliation: "University of Hyderabad",
    collegeOrCompany: "University of Hyderabad",
    hIndex: 20,
    i10Index: 42,
    citations: 2567,
    bio: "Dr. Meenakshi Reddy is a Professor at the Department of Philosophy, University of Hyderabad. Her research interests include Indian philosophy and ethics.",
    researchInterest1: "Indian Philosophy",
    researchInterest2: "Ethics"
  },
  {
    name: "Dr. Rajesh Khanna",
    affiliation: "Banaras Hindu University",
    collegeOrCompany: "Banaras Hindu University",
    hIndex: 18,
    i10Index: 38,
    citations: 2245,
    bio: "Dr. Rajesh Khanna is an Associate Professor at the Department of Sociology, Banaras Hindu University. He specializes in social movements and rural sociology.",
    researchInterest1: "Social Movements",
    researchInterest2: "Rural Sociology"
  },
  {
    name: "Dr. Sharmila Banerjee",
    affiliation: "Jadavpur University",
    collegeOrCompany: "Jadavpur University",
    hIndex: 21,
    i10Index: 43,
    citations: 2698,
    bio: "Dr. Sharmila Banerjee is a Professor at the Department of Comparative Literature, Jadavpur University. Her research focuses on literary theory and translation studies.",
    researchInterest1: "Literary Theory",
    researchInterest2: "Translation Studies"
  },
  
  // Business Management
  {
    name: "Dr. Rajiv Malhotra",
    affiliation: "IIM Ahmedabad",
    collegeOrCompany: "IIM Ahmedabad",
    hIndex: 29,
    i10Index: 60,
    citations: 3876,
    bio: "Dr. Rajiv Malhotra is a Professor at the Department of Strategy, IIM Ahmedabad. His research focuses on strategic management and competitive advantage.",
    researchInterest1: "Strategic Management",
    researchInterest2: "Competitive Advantage"
  },
  {
    name: "Dr. Priyanka Singh",
    affiliation: "IIM Bangalore",
    collegeOrCompany: "IIM Bangalore",
    hIndex: 27,
    i10Index: 56,
    citations: 3654,
    bio: "Dr. Priyanka Singh is a Professor at the Department of Finance, IIM Bangalore. She specializes in financial markets and corporate finance.",
    researchInterest1: "Financial Markets",
    researchInterest2: "Corporate Finance"
  },
  {
    name: "Dr. Arun Kapoor",
    affiliation: "IIM Calcutta",
    collegeOrCompany: "IIM Calcutta",
    hIndex: 25,
    i10Index: 52,
    citations: 3421,
    bio: "Dr. Arun Kapoor is a Professor at the Department of Marketing, IIM Calcutta. His research interests include consumer behavior and brand management.",
    researchInterest1: "Consumer Behavior",
    researchInterest2: "Brand Management"
  },
  {
    name: "Dr. Smita Verma",
    affiliation: "ISB Hyderabad",
    collegeOrCompany: "ISB Hyderabad",
    hIndex: 23,
    i10Index: 48,
    citations: 3210,
    bio: "Dr. Smita Verma is an Associate Professor at the Department of Organizational Behavior, ISB Hyderabad. She specializes in leadership and team dynamics.",
    researchInterest1: "Leadership",
    researchInterest2: "Team Dynamics"
  },
  {
    name: "Dr. Deepak Sharma",
    affiliation: "XLRI Jamshedpur",
    collegeOrCompany: "XLRI Jamshedpur",
    hIndex: 26,
    i10Index: 54,
    citations: 3543,
    bio: "Dr. Deepak Sharma is a Professor at the Department of Human Resources, XLRI Jamshedpur. His research focuses on talent management and industrial relations.",
    researchInterest1: "Talent Management",
    researchInterest2: "Industrial Relations"
  },
  
  // Medical Sciences
  {
    name: "Dr. Rakesh Gupta",
    affiliation: "AIIMS Delhi",
    collegeOrCompany: "AIIMS Delhi",
    hIndex: 35,
    i10Index: 72,
    citations: 4678,
    bio: "Dr. Rakesh Gupta is a Professor at the Department of Cardiology, AIIMS Delhi. His research focuses on interventional cardiology and heart failure.",
    researchInterest1: "Interventional Cardiology",
    researchInterest2: "Heart Failure"
  },
  {
    name: "Dr. Anjali Patel",
    affiliation: "CMC Vellore",
    collegeOrCompany: "CMC Vellore",
    hIndex: 33,
    i10Index: 68,
    citations: 4456,
    bio: "Dr. Anjali Patel is a Professor at the Department of Oncology, CMC Vellore. She specializes in cancer biology and targeted therapies.",
    researchInterest1: "Cancer Biology",
    researchInterest2: "Targeted Therapies"
  },
  {
    name: "Dr. Suresh Kumar",
    affiliation: "PGIMER Chandigarh",
    collegeOrCompany: "PGIMER Chandigarh",
    hIndex: 31,
    i10Index: 64,
    citations: 4234,
    bio: "Dr. Suresh Kumar is a Professor at the Department of Neurology, PGIMER Chandigarh. His research interests include stroke and neurodegenerative disorders.",
    researchInterest1: "Stroke",
    researchInterest2: "Neurodegenerative Disorders"
  },
  {
    name: "Dr. Lakshmi Reddy",
    affiliation: "KMC Manipal",
    collegeOrCompany: "KMC Manipal",
    hIndex: 29,
    i10Index: 60,
    citations: 4012,
    bio: "Dr. Lakshmi Reddy is an Associate Professor at the Department of Pediatrics, KMC Manipal. She specializes in neonatology and child development.",
    researchInterest1: "Neonatology",
    researchInterest2: "Child Development"
  },
  {
    name: "Dr. Vijay Sharma",
    affiliation: "JIPMER Pondicherry",
    collegeOrCompany: "JIPMER Pondicherry",
    hIndex: 30,
    i10Index: 62,
    citations: 4123,
    bio: "Dr. Vijay Sharma is a Professor at the Department of Surgery, JIPMER Pondicherry. His research focuses on minimally invasive surgery and transplantation.",
    researchInterest1: "Minimally Invasive Surgery",
    researchInterest2: "Transplantation"
  }
];

export const getTopProfessorsByDepartment = (departmentId: string) => {
  // Only return the top N professors for a given department
  return professors
    .filter(prof => prof.collegeOrCompany === departmentId)
    .sort((a, b) => b.citations - a.citations)
    .slice(0, 5);
};

export const getAllProfessorsByDepartment = (departmentId: string) => {
  // Return all professors for a given department
  return professors
    .filter(prof => prof.collegeOrCompany === departmentId)
    .sort((a, b) => b.citations - a.citations);
};

export const getProfessorsByCategory = (category: string) => {
  switch(category.toLowerCase()) {
    case 'citations':
      // Sort by highest citations
      return [...professors].sort((a, b) => b.citations - a.citations).slice(0, 10);
    case 'i10-index':
      // Sort by highest i10-index
      return [...professors].sort((a, b) => b.i10Index - a.i10Index).slice(0, 10);
    case 'publications':
      // Sort by highest publication count (no longer in the model, using citations as fallback)
      return [...professors].sort((a, b) => b.citations - a.citations).slice(0, 10);
    case 'iits':
      // Filter for IIT professors
      return [...professors]
        .filter(prof => prof.affiliation.toLowerCase().includes('iit'))
        .sort((a, b) => b.citations - a.citations)
        .slice(0, 10);
    case 'non-iits':
      // Filter for non-IIT professors
      return [...professors]
        .filter(prof => !prof.affiliation.toLowerCase().includes('iit'))
        .sort((a, b) => b.citations - a.citations)
        .slice(0, 10);
    default:
      return [];
  }
};

export const SUPABASE_URL = "https://dxrqbmifotfshfkbgkbf.supabase.co";
export const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4cnFibWlmb3Rmc2hma2Jna2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTE1NTIsImV4cCI6MjA1ODU2NzU1Mn0.2ArEqX8DzBMtCddwSvRLM1UMn-Q7kQizAvsJO5wNqvQ";

