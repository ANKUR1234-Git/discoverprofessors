export interface Professor {
  id: string; // Keeping id for internal reference
  name: string;
  affiliation: string;
  hIndex: number;
  i10Index: number;
  publications: number; // Keeping for backward compatibility
  citations: number;
  collegeOrCompany: string;
  researchInterest1: string;
  researchInterest2: string;
  bio: string;
  imageUrl: string; // Keeping for UI display
  // Fields below kept for backward compatibility
  departmentId: string;
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

// Original professors data but transformed to new interface
export const professors: Professor[] = [
  // Computer Science
  {
    id: "cs-1",
    name: "Dr. Rajiv Misra",
    affiliation: "IIT Patna",
    collegeOrCompany: "IIT Patna",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,1",
    hIndex: 38,
    i10Index: 79,
    publications: 246,
    citations: 5891,
    bio: "Dr. Rajiv Misra is a Professor at the Department of Computer Science and Engineering, IIT Patna. He received his Ph.D. from IIT Kharagpur and has over 20 years of teaching and research experience.",
    researchInterest1: "Network Security",
    researchInterest2: "Machine Learning"
  },
  {
    id: "cs-2",
    name: "Dr. Sunita Sharma",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,1",
    hIndex: 45,
    i10Index: 98,
    publications: 310,
    citations: 7532,
    bio: "Dr. Sunita Sharma is a Professor at the Department of Computer Science and Engineering, IIT Bombay. She has made significant contributions to the field of artificial intelligence and distributed systems.",
    researchInterest1: "Artificial Intelligence",
    researchInterest2: "Distributed Systems"
  },
  {
    id: "cs-3",
    name: "Dr. Amit Kumar",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,2",
    hIndex: 42,
    i10Index: 86,
    publications: 278,
    citations: 6743,
    bio: "Dr. Amit Kumar is a Professor at the Department of Computer Science and Engineering, IIT Delhi. His research focuses on algorithm design and optimization techniques.",
    researchInterest1: "Algorithm Design",
    researchInterest2: "Optimization"
  },
  {
    id: "cs-4",
    name: "Dr. Priya Gupta",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,2",
    hIndex: 36,
    i10Index: 74,
    publications: 198,
    citations: 5103,
    bio: "Dr. Priya Gupta is an Associate Professor at the Department of Computer Science, IIT Madras. She specializes in computer vision and machine learning applications.",
    researchInterest1: "Computer Vision",
    researchInterest2: "Machine Learning"
  },
  {
    id: "cs-5",
    name: "Dr. Vikram Singh",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,3",
    hIndex: 39,
    i10Index: 81,
    publications: 254,
    citations: 6012,
    bio: "Dr. Vikram Singh is a Professor at the Department of Computer Science and Engineering, IIT Kanpur. His research interests include data mining and big data analytics.",
    researchInterest1: "Data Mining",
    researchInterest2: "Big Data Analytics"
  },
  
  // Mechanical Engineering
  {
    id: "mech-1",
    name: "Dr. Narendra Kumar",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,4",
    hIndex: 31,
    i10Index: 65,
    publications: 175,
    citations: 4521,
    bio: "Dr. Narendra Kumar is a Professor at the Department of Mechanical Engineering, IIT Roorkee. He specializes in thermal engineering and energy systems.",
    researchInterest1: "Thermal Engineering",
    researchInterest2: "Energy Systems"
  },
  {
    id: "mech-2",
    name: "Dr. Ananya Das",
    affiliation: "IIT Kharagpur",
    collegeOrCompany: "IIT Kharagpur",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,3",
    hIndex: 29,
    i10Index: 58,
    publications: 156,
    citations: 3987,
    bio: "Dr. Ananya Das is an Associate Professor at the Department of Mechanical Engineering, IIT Kharagpur. Her research focuses on manufacturing processes and materials.",
    researchInterest1: "Manufacturing Processes",
    researchInterest2: "Materials Science"
  },
  {
    id: "mech-3",
    name: "Dr. Rahul Verma",
    affiliation: "IIT Guwahati",
    collegeOrCompany: "IIT Guwahati",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,5",
    hIndex: 27,
    i10Index: 52,
    publications: 142,
    citations: 3654,
    bio: "Dr. Rahul Verma is a Professor at the Department of Mechanical Engineering, IIT Guwahati. He specializes in robotics and automation.",
    researchInterest1: "Robotics",
    researchInterest2: "Automation"
  },
  {
    id: "mech-4",
    name: "Dr. Meera Patel",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,4",
    hIndex: 30,
    i10Index: 62,
    publications: 168,
    citations: 4312,
    bio: "Dr. Meera Patel is a Professor at the Department of Mechanical Engineering, IIT Bombay. Her research interests include fluid mechanics and thermal sciences.",
    researchInterest1: "Fluid Mechanics",
    researchInterest2: "Thermal Sciences"
  },
  {
    id: "mech-5",
    name: "Dr. Sanjay Joshi",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,6",
    hIndex: 32,
    i10Index: 67,
    publications: 182,
    citations: 4765,
    bio: "Dr. Sanjay Joshi is a Professor at the Department of Mechanical Engineering, IIT Delhi. He specializes in dynamics and vibration analysis.",
    researchInterest1: "Dynamics",
    researchInterest2: "Vibration Analysis"
  },
  
  // Electrical Engineering
  {
    id: "ee-1",
    name: "Dr. Rajeev Sharma",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,7",
    hIndex: 34,
    i10Index: 70,
    publications: 187,
    citations: 4932,
    bio: "Dr. Rajeev Sharma is a Professor at the Department of Electrical Engineering, IIT Bombay. His research focuses on power systems and smart grids.",
    researchInterest1: "Power Systems",
    researchInterest2: "Smart Grids"
  },
  {
    id: "ee-2",
    name: "Dr. Nandini Rao",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,5",
    hIndex: 36,
    i10Index: 73,
    publications: 196,
    citations: 5087,
    bio: "Dr. Nandini Rao is a Professor at the Department of Electrical Engineering, IIT Madras. She specializes in communication systems and signal processing.",
    researchInterest1: "Communication Systems",
    researchInterest2: "Signal Processing"
  },
  {
    id: "ee-3",
    name: "Dr. Ajay Gupta",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,8",
    hIndex: 32,
    i10Index: 65,
    publications: 178,
    citations: 4621,
    bio: "Dr. Ajay Gupta is a Professor at the Department of Electrical Engineering, IIT Kanpur. His research interests include control systems and robotics.",
    researchInterest1: "Control Systems",
    researchInterest2: "Robotics"
  },
  {
    id: "ee-4",
    name: "Dr. Kavita Mehta",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,6",
    hIndex: 30,
    i10Index: 61,
    publications: 165,
    citations: 4254,
    bio: "Dr. Kavita Mehta is an Associate Professor at the Department of Electrical Engineering, IIT Delhi. She specializes in microelectronics and VLSI design.",
    researchInterest1: "Microelectronics",
    researchInterest2: "VLSI Design"
  },
  {
    id: "ee-5",
    name: "Dr. Prakash Iyer",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,9",
    hIndex: 33,
    i10Index: 68,
    publications: 183,
    citations: 4821,
    bio: "Dr. Prakash Iyer is a Professor at the Department of Electrical Engineering, IIT Roorkee. His research focuses on power electronics and renewable energy systems.",
    researchInterest1: "Power Electronics",
    researchInterest2: "Renewable Energy Systems"
  },
  
  // Civil Engineering
  {
    id: "civil-1",
    name: "Dr. Ravi Kumar",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,10",
    hIndex: 28,
    i10Index: 56,
    publications: 152,
    citations: 3912,
    bio: "Dr. Ravi Kumar is a Professor at the Department of Civil Engineering, IIT Madras. His research focuses on structural engineering and earthquake-resistant design.",
    researchInterest1: "Structural Engineering",
    researchInterest2: "Earthquake Engineering"
  },
  {
    id: "civil-2",
    name: "Dr. Sarita Agarwal",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,7",
    hIndex: 25,
    i10Index: 49,
    publications: 132,
    citations: 3421,
    bio: "Dr. Sarita Agarwal is a Professor at the Department of Civil Engineering, IIT Roorkee. She specializes in environmental engineering and waste management.",
    researchInterest1: "Environmental Engineering",
    researchInterest2: "Waste Management"
  },
  {
    id: "civil-3",
    name: "Dr. Mohan Reddy",
    affiliation: "IIT Kharagpur",
    collegeOrCompany: "IIT Kharagpur",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,11",
    hIndex: 27,
    i10Index: 54,
    publications: 146,
    citations: 3765,
    bio: "Dr. Mohan Reddy is a Professor at the Department of Civil Engineering, IIT Kharagpur. His research interests include geotechnical engineering and foundation design.",
    researchInterest1: "Geotechnical Engineering",
    researchInterest2: "Foundation Design"
  },
  {
    id: "civil-4",
    name: "Dr. Priyanka Desai",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,8",
    hIndex: 26,
    i10Index: 52,
    publications: 138,
    citations: 3543,
    bio: "Dr. Priyanka Desai is an Associate Professor at the Department of Civil Engineering, IIT Bombay. She specializes in transportation engineering and urban planning.",
    researchInterest1: "Transportation Engineering",
    researchInterest2: "Urban Planning"
  },
  {
    id: "civil-5",
    name: "Dr. Suresh Menon",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,12",
    hIndex: 29,
    i10Index: 58,
    publications: 154,
    citations: 3987,
    bio: "Dr. Suresh Menon is a Professor at the Department of Civil Engineering, IIT Delhi. His research focuses on water resources engineering and hydraulic structures.",
    researchInterest1: "Water Resources",
    researchInterest2: "Hydraulic Structures"
  },
  
  // Chemical Engineering
  {
    id: "chemical-1",
    name: "Dr. Anil Gupta",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,13",
    hIndex: 31,
    i10Index: 64,
    publications: 172,
    citations: 4487,
    bio: "Dr. Anil Gupta is a Professor at the Department of Chemical Engineering, IIT Bombay. His research focuses on reaction engineering and catalysis.",
    researchInterest1: "Reaction Engineering",
    researchInterest2: "Catalysis"
  },
  {
    id: "chemical-2",
    name: "Dr. Neha Singhania",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,9",
    hIndex: 28,
    i10Index: 56,
    publications: 149,
    citations: 3821,
    bio: "Dr. Neha Singhania is a Professor at the Department of Chemical Engineering, IIT Madras. She specializes in polymer science and engineering.",
    researchInterest1: "Polymer Science",
    researchInterest2: "Materials Engineering"
  },
  {
    id: "chemical-3",
    name: "Dr. Ramesh Nair",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,14",
    hIndex: 30,
    i10Index: 62,
    publications: 168,
    citations: 4312,
    bio: "Dr. Ramesh Nair is a Professor at the Department of Chemical Engineering, IIT Kanpur. His research interests include separation processes and membrane technology.",
    researchInterest1: "Separation Processes",
    researchInterest2: "Membrane Technology"
  },
  {
    id: "chemical-4",
    name: "Dr. Shalini Tripathi",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,10",
    hIndex: 27,
    i10Index: 54,
    publications: 145,
    citations: 3765,
    bio: "Dr. Shalini Tripathi is an Associate Professor at the Department of Chemical Engineering, IIT Roorkee. She specializes in biochemical engineering and biotechnology.",
    researchInterest1: "Biochemical Engineering",
    researchInterest2: "Biotechnology"
  },
  {
    id: "chemical-5",
    name: "Dr. Vivek Choudhary",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,15",
    hIndex: 29,
    i10Index: 59,
    publications: 158,
    citations: 4098,
    bio: "Dr. Vivek Choudhary is a Professor at the Department of Chemical Engineering, IIT Delhi. His research focuses on process control and optimization.",
    researchInterest1: "Process Control",
    researchInterest2: "Optimization"
  },
  
  // Physics
  {
    id: "physics-1",
    name: "Dr. Ashok Patel",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,16",
    hIndex: 40,
    i10Index: 82,
    publications: 215,
    citations: 5632,
    bio: "Dr. Ashok Patel is a Professor at the Department of Physics, IIT Bombay. His research focuses on condensed matter physics and quantum materials.",
    researchInterest1: "Condensed Matter Physics",
    researchInterest2: "Quantum Materials"
  },
  {
    id: "physics-2",
    name: "Dr. Sudha Mehta",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,11",
    hIndex: 38,
    i10Index: 76,
    publications: 192,
    citations: 5248,
    bio: "Dr. Sudha Mehta is a Professor at the Department of Physics, IIT Delhi. She specializes in high energy physics and particle accelerators.",
    researchInterest1: "High Energy Physics",
    researchInterest2: "Particle Physics"
  },
  {
    id: "physics-3",
    name: "Dr. Ramachandran K.",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,17",
    hIndex: 42,
    i10Index: 87,
    publications: 230,
    citations: 6124,
    bio: "Dr. Ramachandran K. is a Professor at the Department of Physics, IIT Madras. His research interests include astrophysics and cosmology.",
    researchInterest1: "Astrophysics",
    researchInterest2: "Cosmology"
  },
  {
    id: "physics-4",
    name: "Dr. Anita Sharma",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,12",
    hIndex: 36,
    i10Index: 74,
    publications: 178,
    citations: 4876,
    bio: "Dr. Anita Sharma is an Associate Professor at the Department of Physics, IIT Kanpur. She specializes in optical physics and quantum optics.",
    researchInterest1: "Optical Physics",
    researchInterest2: "Quantum Optics"
  },
  {
    id: "physics-5",
    name: "Dr. Venkatesh Iyer",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,18",
    hIndex: 34,
    i10Index: 69,
    publications: 165,
    citations: 4532,
    bio: "Dr. Venkatesh Iyer is a Professor at the Department of Physics, IIT Roorkee. His research focuses on nuclear physics and radiation detectors.",
    researchInterest1: "Nuclear Physics",
    researchInterest2: "Radiation Detectors"
  },
  
  // Mathematics
  {
    id: "math-1",
    name: "Dr. Sameer Mathur",
    affiliation: "IIT Kanpur",
    collegeOrCompany: "IIT Kanpur",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,19",
    hIndex: 32,
    i10Index: 65,
    publications: 154,
    citations: 4125,
    bio: "Dr. Sameer Mathur is a Professor at the Department of Mathematics, IIT Kanpur. His research focuses on algebraic geometry and number theory.",
    researchInterest1: "Algebraic Geometry",
    researchInterest2: "Number Theory"
  },
  {
    id: "math-2",
    name: "Dr. Jayashree Ramakrishnan",
    affiliation: "IIT Madras",
    collegeOrCompany: "IIT Madras",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,13",
    hIndex: 30,
    i10Index: 61,
    publications: 142,
    citations: 3865,
    bio: "Dr. Jayashree Ramakrishnan is a Professor at the Department of Mathematics, IIT Madras. She specializes in analysis and differential equations.",
    researchInterest1: "Analysis",
    researchInterest2: "Differential Equations"
  },
  {
    id: "math-3",
    name: "Dr. Harish Verma",
    affiliation: "IIT Delhi",
    collegeOrCompany: "IIT Delhi",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,20",
    hIndex: 35,
    i10Index: 72,
    publications: 168,
    citations: 4567,
    bio: "Dr. Harish Verma is a Professor at the Department of Mathematics, IIT Delhi. His research interests include topology and geometric analysis.",
    researchInterest1: "Topology",
    researchInterest2: "Geometric Analysis"
  },
  {
    id: "math-4",
    name: "Dr. Nirmala Devi",
    affiliation: "IIT Bombay",
    collegeOrCompany: "IIT Bombay",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,14",
    hIndex: 29,
    i10Index: 59,
    publications: 136,
    citations: 3654,
    bio: "Dr. Nirmala Devi is an Associate Professor at the Department of Mathematics, IIT Bombay. She specializes in algebra and representation theory.",
    researchInterest1: "Algebra",
    researchInterest2: "Representation Theory"
  },
  {
    id: "math-5",
    name: "Dr. Rajendra Prasad",
    affiliation: "IIT Roorkee",
    collegeOrCompany: "IIT Roorkee",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,21",
    hIndex: 27,
    i10Index: 55,
    publications: 128,
    citations: 3421,
    bio: "Dr. Rajendra Prasad is a Professor at the Department of Mathematics, IIT Roorkee. His research focuses on numerical analysis and computational mathematics.",
    researchInterest1: "Numerical Analysis",
    researchInterest2: "Computational Mathematics"
  },
  
  // Arts & Humanities
  {
    id: "arts-1",
    name: "Dr. Aruna Sharma",
    affiliation: "Delhi University",
    collegeOrCompany: "Delhi University",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,15",
    hIndex: 22,
    i10Index: 45,
    publications: 110,
    citations: 2865,
    bio: "Dr. Aruna Sharma is a Professor at the Department of English, Delhi University. Her research focuses on postcolonial literature and cultural studies.",
    researchInterest1: "Postcolonial Literature",
    researchInterest2: "Cultural Studies"
  },
  {
    id: "arts-2",
    name: "Dr. Vikrant Pandey",
    affiliation: "Jawaharlal Nehru University",
    collegeOrCompany: "Jawaharlal Nehru University",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,22",
    hIndex: 24,
    i10Index: 49,
    publications: 118,
    citations: 3012,
    bio: "Dr. Vikrant Pandey is a Professor at the Department of History, Jawaharlal Nehru University. He specializes in ancient Indian history and archaeology.",
    researchInterest1: "Ancient Indian History",
    researchInterest2: "Archaeology"
  },
  {
    id: "arts-3",
    name: "Dr. Meenakshi Reddy",
    affiliation: "University of Hyderabad",
    collegeOrCompany: "University of Hyderabad",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,16",
    hIndex: 20,
    i10Index: 42,
    publications: 95,
    citations: 2567,
    bio: "Dr. Meenakshi Reddy is a Professor at the Department of Philosophy, University of Hyderabad. Her research interests include Indian philosophy and ethics.",
    researchInterest1: "Indian Philosophy",
    researchInterest2: "Ethics"
  },
  {
    id: "arts-4",
    name: "Dr. Rajesh Khanna",
    affiliation: "Banaras Hindu University",
    collegeOrCompany: "Banaras Hindu University",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,23",
    hIndex: 18,
    i10Index: 38,
    publications: 88,
    citations: 2245,
    bio: "Dr. Rajesh Khanna is an Associate Professor at the Department of Sociology, Banaras Hindu University. He specializes in social movements and rural sociology.",
    researchInterest1: "Social Movements",
    researchInterest2: "Rural Sociology"
  },
  {
    id: "arts-5",
    name: "Dr. Sharmila Banerjee",
    affiliation: "Jadavpur University",
    collegeOrCompany: "Jadavpur University",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,17",
    hIndex: 21,
    i10Index: 43,
    publications: 102,
    citations: 2698,
    bio: "Dr. Sharmila Banerjee is a Professor at the Department of Comparative Literature, Jadavpur University. Her research focuses on literary theory and translation studies.",
    researchInterest1: "Literary Theory",
    researchInterest2: "Translation Studies"
  },
  
  // Business Management
  {
    id: "business-1",
    name: "Dr. Rajiv Malhotra",
    affiliation: "IIM Ahmedabad",
    collegeOrCompany: "IIM Ahmedabad",
    departmentId: "business",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,24",
    hIndex: 29,
    i10Index: 60,
    publications: 145,
    citations: 3876,
    bio: "Dr. Rajiv Malhotra is a Professor at the Department of Strategy, IIM Ahmedabad. His research focuses on strategic management and competitive advantage.",
    researchInterest1: "Strategic Management",
    researchInterest2: "Competitive Advantage"
  },
  {
    id: "business-2",
    name: "Dr. Priyanka Singh",
    affiliation: "IIM Bangalore",
    collegeOrCompany: "IIM Bangalore",
    departmentId: "business",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,18",
    hIndex: 27,
    i10Index: 56,
    publications: 132,
    citations: 3654,
    bio: "Dr. Priyanka Singh is a Professor at the Department of Finance, IIM Bangalore. She specializes in financial markets and corporate finance.",
    researchInterest1: "Financial Markets",
    researchInterest2: "Corporate Finance"
  },
  {
    id: "business-3",
    name: "Dr. Arun Kapoor",
    affiliation: "IIM Calcutta",
    collegeOrCompany: "IIM Calcutta",
