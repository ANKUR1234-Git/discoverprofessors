
export interface Professor {
  id: string;
  name: string;
  institution: string;
  department: string;
  departmentId: string;
  imageUrl: string;
  hIndex: number;
  i10Index: number;
  publications: number;
  citations: number;
  bio: string;
  researchInterests: string[];
  email?: string;
  profileLink?: string;
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
    backgroundClass: "bg-cs-gradient"
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    backgroundClass: "bg-mechanical-gradient"
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    backgroundClass: "bg-electrical-gradient"
  },
  {
    id: "civil",
    name: "Civil Engineering",
    backgroundClass: "bg-civil-gradient"
  },
  {
    id: "chemical",
    name: "Chemical Engineering",
    backgroundClass: "bg-chemical-gradient"
  },
  {
    id: "physics",
    name: "Physics",
    backgroundClass: "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
  },
  {
    id: "mathematics",
    name: "Mathematics",
    backgroundClass: "bg-gradient-to-r from-green-900/30 to-blue-900/30"
  },
  {
    id: "arts",
    name: "Arts & Humanities",
    backgroundClass: "bg-gradient-to-r from-purple-900/30 to-pink-900/30"
  },
  {
    id: "business",
    name: "Business Management",
    backgroundClass: "bg-gradient-to-r from-amber-900/30 to-orange-900/30"
  },
  {
    id: "medicine",
    name: "Medical Sciences",
    backgroundClass: "bg-gradient-to-r from-red-900/30 to-rose-900/30"
  }
];

export const professors: Professor[] = [
  // Computer Science
  {
    id: "cs-1",
    name: "Dr. Rajiv Misra",
    institution: "IIT Patna",
    department: "cs",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,1",
    hIndex: 38,
    i10Index: 79,
    publications: 246,
    citations: 5891,
    bio: "Dr. Rajiv Misra is a Professor at the Department of Computer Science and Engineering, IIT Patna. He received his Ph.D. from IIT Kharagpur and has over 20 years of teaching and research experience.",
    researchInterests: ["Network Security", "Machine Learning", "Internet of Things", "Cloud Computing"]
  },
  {
    id: "cs-2",
    name: "Dr. Sunita Sharma",
    institution: "IIT Bombay",
    department: "cs",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,1",
    hIndex: 45,
    i10Index: 98,
    publications: 310,
    citations: 7532,
    bio: "Dr. Sunita Sharma is a Professor at the Department of Computer Science and Engineering, IIT Bombay. She has made significant contributions to the field of artificial intelligence and distributed systems.",
    researchInterests: ["Artificial Intelligence", "Distributed Systems", "Cryptography", "Blockchain"]
  },
  {
    id: "cs-3",
    name: "Dr. Amit Kumar",
    institution: "IIT Delhi",
    department: "cs",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,2",
    hIndex: 42,
    i10Index: 86,
    publications: 278,
    citations: 6743,
    bio: "Dr. Amit Kumar is a Professor at the Department of Computer Science and Engineering, IIT Delhi. His research focuses on algorithm design and optimization techniques.",
    researchInterests: ["Algorithm Design", "Optimization", "Theoretical Computer Science", "Computational Complexity"]
  },
  {
    id: "cs-4",
    name: "Dr. Priya Gupta",
    institution: "IIT Madras",
    department: "cs",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,2",
    hIndex: 36,
    i10Index: 74,
    publications: 198,
    citations: 5103,
    bio: "Dr. Priya Gupta is an Associate Professor at the Department of Computer Science, IIT Madras. She specializes in computer vision and machine learning applications.",
    researchInterests: ["Computer Vision", "Machine Learning", "Deep Learning", "Image Processing"]
  },
  {
    id: "cs-5",
    name: "Dr. Vikram Singh",
    institution: "IIT Kanpur",
    department: "cs",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,3",
    hIndex: 39,
    i10Index: 81,
    publications: 254,
    citations: 6012,
    bio: "Dr. Vikram Singh is a Professor at the Department of Computer Science and Engineering, IIT Kanpur. His research interests include data mining and big data analytics.",
    researchInterests: ["Data Mining", "Big Data Analytics", "Information Retrieval", "Natural Language Processing"]
  },
  
  // Mechanical Engineering
  {
    id: "mech-1",
    name: "Dr. Narendra Kumar",
    institution: "IIT Roorkee",
    department: "mechanical",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,4",
    hIndex: 31,
    i10Index: 65,
    publications: 175,
    citations: 4521,
    bio: "Dr. Narendra Kumar is a Professor at the Department of Mechanical Engineering, IIT Roorkee. He specializes in thermal engineering and energy systems.",
    researchInterests: ["Thermal Engineering", "Energy Systems", "Heat Transfer", "Renewable Energy"]
  },
  {
    id: "mech-2",
    name: "Dr. Ananya Das",
    institution: "IIT Kharagpur",
    department: "mechanical",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,3",
    hIndex: 29,
    i10Index: 58,
    publications: 156,
    citations: 3987,
    bio: "Dr. Ananya Das is an Associate Professor at the Department of Mechanical Engineering, IIT Kharagpur. Her research focuses on manufacturing processes and materials.",
    researchInterests: ["Manufacturing Processes", "Materials Science", "Design Engineering", "CAD/CAM"]
  },
  {
    id: "mech-3",
    name: "Dr. Rahul Verma",
    institution: "IIT Guwahati",
    department: "mechanical",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,5",
    hIndex: 27,
    i10Index: 52,
    publications: 142,
    citations: 3654,
    bio: "Dr. Rahul Verma is a Professor at the Department of Mechanical Engineering, IIT Guwahati. He specializes in robotics and automation.",
    researchInterests: ["Robotics", "Automation", "Control Systems", "Mechatronics"]
  },
  {
    id: "mech-4",
    name: "Dr. Meera Patel",
    institution: "IIT Bombay",
    department: "mechanical",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,4",
    hIndex: 30,
    i10Index: 62,
    publications: 168,
    citations: 4312,
    bio: "Dr. Meera Patel is a Professor at the Department of Mechanical Engineering, IIT Bombay. Her research interests include fluid mechanics and thermal sciences.",
    researchInterests: ["Fluid Mechanics", "Thermal Sciences", "CFD", "Heat and Mass Transfer"]
  },
  {
    id: "mech-5",
    name: "Dr. Sanjay Joshi",
    institution: "IIT Delhi",
    department: "mechanical",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,6",
    hIndex: 32,
    i10Index: 67,
    publications: 182,
    citations: 4765,
    bio: "Dr. Sanjay Joshi is a Professor at the Department of Mechanical Engineering, IIT Delhi. He specializes in dynamics and vibration analysis.",
    researchInterests: ["Dynamics", "Vibration Analysis", "Structural Mechanics", "Finite Element Analysis"]
  },
  
  // Electrical Engineering
  {
    id: "ee-1",
    name: "Dr. Rajeev Sharma",
    institution: "IIT Bombay",
    department: "electrical",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,7",
    hIndex: 34,
    i10Index: 70,
    publications: 187,
    citations: 4932,
    bio: "Dr. Rajeev Sharma is a Professor at the Department of Electrical Engineering, IIT Bombay. His research focuses on power systems and smart grids.",
    researchInterests: ["Power Systems", "Smart Grids", "Renewable Energy Integration", "Power Electronics"]
  },
  {
    id: "ee-2",
    name: "Dr. Nandini Rao",
    institution: "IIT Madras",
    department: "electrical",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,5",
    hIndex: 36,
    i10Index: 73,
    publications: 196,
    citations: 5087,
    bio: "Dr. Nandini Rao is a Professor at the Department of Electrical Engineering, IIT Madras. She specializes in communication systems and signal processing.",
    researchInterests: ["Communication Systems", "Signal Processing", "Wireless Networks", "5G Technology"]
  },
  {
    id: "ee-3",
    name: "Dr. Ajay Gupta",
    institution: "IIT Kanpur",
    department: "electrical",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,8",
    hIndex: 32,
    i10Index: 65,
    publications: 178,
    citations: 4621,
    bio: "Dr. Ajay Gupta is a Professor at the Department of Electrical Engineering, IIT Kanpur. His research interests include control systems and robotics.",
    researchInterests: ["Control Systems", "Robotics", "Automation", "Embedded Systems"]
  },
  {
    id: "ee-4",
    name: "Dr. Kavita Mehta",
    institution: "IIT Delhi",
    department: "electrical",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,6",
    hIndex: 30,
    i10Index: 61,
    publications: 165,
    citations: 4254,
    bio: "Dr. Kavita Mehta is an Associate Professor at the Department of Electrical Engineering, IIT Delhi. She specializes in microelectronics and VLSI design.",
    researchInterests: ["Microelectronics", "VLSI Design", "Semiconductor Devices", "Integrated Circuits"]
  },
  {
    id: "ee-5",
    name: "Dr. Prakash Iyer",
    institution: "IIT Roorkee",
    department: "electrical",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,9",
    hIndex: 33,
    i10Index: 68,
    publications: 183,
    citations: 4821,
    bio: "Dr. Prakash Iyer is a Professor at the Department of Electrical Engineering, IIT Roorkee. His research focuses on power electronics and renewable energy systems.",
    researchInterests: ["Power Electronics", "Renewable Energy Systems", "Electric Drives", "Energy Conversion"]
  },
  
  // Civil Engineering
  {
    id: "civil-1",
    name: "Dr. Ravi Kumar",
    institution: "IIT Madras",
    department: "civil",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,10",
    hIndex: 28,
    i10Index: 56,
    publications: 152,
    citations: 3912,
    bio: "Dr. Ravi Kumar is a Professor at the Department of Civil Engineering, IIT Madras. His research focuses on structural engineering and earthquake-resistant design.",
    researchInterests: ["Structural Engineering", "Earthquake Engineering", "Reinforced Concrete", "Bridge Design"]
  },
  {
    id: "civil-2",
    name: "Dr. Sarita Agarwal",
    institution: "IIT Roorkee",
    department: "civil",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,7",
    hIndex: 25,
    i10Index: 49,
    publications: 132,
    citations: 3421,
    bio: "Dr. Sarita Agarwal is a Professor at the Department of Civil Engineering, IIT Roorkee. She specializes in environmental engineering and waste management.",
    researchInterests: ["Environmental Engineering", "Waste Management", "Water Treatment", "Air Pollution Control"]
  },
  {
    id: "civil-3",
    name: "Dr. Mohan Reddy",
    institution: "IIT Kharagpur",
    department: "civil",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,11",
    hIndex: 27,
    i10Index: 54,
    publications: 146,
    citations: 3765,
    bio: "Dr. Mohan Reddy is a Professor at the Department of Civil Engineering, IIT Kharagpur. His research interests include geotechnical engineering and foundation design.",
    researchInterests: ["Geotechnical Engineering", "Foundation Design", "Soil Mechanics", "Ground Improvement"]
  },
  {
    id: "civil-4",
    name: "Dr. Priyanka Desai",
    institution: "IIT Bombay",
    department: "civil",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,8",
    hIndex: 26,
    i10Index: 52,
    publications: 138,
    citations: 3543,
    bio: "Dr. Priyanka Desai is an Associate Professor at the Department of Civil Engineering, IIT Bombay. She specializes in transportation engineering and urban planning.",
    researchInterests: ["Transportation Engineering", "Urban Planning", "Traffic Management", "Sustainable Transportation"]
  },
  {
    id: "civil-5",
    name: "Dr. Suresh Menon",
    institution: "IIT Delhi",
    department: "civil",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,12",
    hIndex: 29,
    i10Index: 58,
    publications: 154,
    citations: 3987,
    bio: "Dr. Suresh Menon is a Professor at the Department of Civil Engineering, IIT Delhi. His research focuses on water resources engineering and hydraulic structures.",
    researchInterests: ["Water Resources", "Hydraulic Structures", "Irrigation Engineering", "Hydropower"]
  },
  
  // Chemical Engineering
  {
    id: "chemical-1",
    name: "Dr. Anil Gupta",
    institution: "IIT Bombay",
    department: "chemical",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,13",
    hIndex: 31,
    i10Index: 64,
    publications: 172,
    citations: 4487,
    bio: "Dr. Anil Gupta is a Professor at the Department of Chemical Engineering, IIT Bombay. His research focuses on reaction engineering and catalysis.",
    researchInterests: ["Reaction Engineering", "Catalysis", "Process Design", "Chemical Kinetics"]
  },
  {
    id: "chemical-2",
    name: "Dr. Neha Singhania",
    institution: "IIT Madras",
    department: "chemical",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,9",
    hIndex: 28,
    i10Index: 56,
    publications: 149,
    citations: 3821,
    bio: "Dr. Neha Singhania is a Professor at the Department of Chemical Engineering, IIT Madras. She specializes in polymer science and engineering.",
    researchInterests: ["Polymer Science", "Materials Engineering", "Polymer Processing", "Sustainable Materials"]
  },
  {
    id: "chemical-3",
    name: "Dr. Ramesh Nair",
    institution: "IIT Kanpur",
    department: "chemical",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,14",
    hIndex: 30,
    i10Index: 62,
    publications: 168,
    citations: 4312,
    bio: "Dr. Ramesh Nair is a Professor at the Department of Chemical Engineering, IIT Kanpur. His research interests include separation processes and membrane technology.",
    researchInterests: ["Separation Processes", "Membrane Technology", "Mass Transfer", "Process Intensification"]
  },
  {
    id: "chemical-4",
    name: "Dr. Shalini Tripathi",
    institution: "IIT Roorkee",
    department: "chemical",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,10",
    hIndex: 27,
    i10Index: 54,
    publications: 145,
    citations: 3765,
    bio: "Dr. Shalini Tripathi is an Associate Professor at the Department of Chemical Engineering, IIT Roorkee. She specializes in biochemical engineering and biotechnology.",
    researchInterests: ["Biochemical Engineering", "Biotechnology", "Enzyme Technology", "Bioprocess Engineering"]
  },
  {
    id: "chemical-5",
    name: "Dr. Vivek Choudhary",
    institution: "IIT Delhi",
    department: "chemical",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,15",
    hIndex: 29,
    i10Index: 59,
    publications: 158,
    citations: 4098,
    bio: "Dr. Vivek Choudhary is a Professor at the Department of Chemical Engineering, IIT Delhi. His research focuses on process control and optimization.",
    researchInterests: ["Process Control", "Optimization", "Process Systems Engineering", "Modeling and Simulation"]
  },
  
  // Physics
  {
    id: "physics-1",
    name: "Dr. Ashok Patel",
    institution: "IIT Bombay",
    department: "physics",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,16",
    hIndex: 40,
    i10Index: 82,
    publications: 215,
    citations: 5632,
    bio: "Dr. Ashok Patel is a Professor at the Department of Physics, IIT Bombay. His research focuses on condensed matter physics and quantum materials.",
    researchInterests: ["Condensed Matter Physics", "Quantum Materials", "Superconductivity", "Magnetism"]
  },
  {
    id: "physics-2",
    name: "Dr. Sudha Mehta",
    institution: "IIT Delhi",
    department: "physics",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,11",
    hIndex: 38,
    i10Index: 76,
    publications: 192,
    citations: 5248,
    bio: "Dr. Sudha Mehta is a Professor at the Department of Physics, IIT Delhi. She specializes in high energy physics and particle accelerators.",
    researchInterests: ["High Energy Physics", "Particle Physics", "Accelerator Physics", "Detectors"]
  },
  {
    id: "physics-3",
    name: "Dr. Ramachandran K.",
    institution: "IIT Madras",
    department: "physics",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,17",
    hIndex: 42,
    i10Index: 87,
    publications: 230,
    citations: 6124,
    bio: "Dr. Ramachandran K. is a Professor at the Department of Physics, IIT Madras. His research interests include astrophysics and cosmology.",
    researchInterests: ["Astrophysics", "Cosmology", "Gravitational Waves", "Dark Matter"]
  },
  {
    id: "physics-4",
    name: "Dr. Anita Sharma",
    institution: "IIT Kanpur",
    department: "physics",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,12",
    hIndex: 36,
    i10Index: 74,
    publications: 178,
    citations: 4876,
    bio: "Dr. Anita Sharma is an Associate Professor at the Department of Physics, IIT Kanpur. She specializes in optical physics and quantum optics.",
    researchInterests: ["Optical Physics", "Quantum Optics", "Lasers", "Photonics"]
  },
  {
    id: "physics-5",
    name: "Dr. Venkatesh Iyer",
    institution: "IIT Roorkee",
    department: "physics",
    departmentId: "physics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,18",
    hIndex: 34,
    i10Index: 69,
    publications: 165,
    citations: 4532,
    bio: "Dr. Venkatesh Iyer is a Professor at the Department of Physics, IIT Roorkee. His research focuses on nuclear physics and radiation detectors.",
    researchInterests: ["Nuclear Physics", "Radiation Detectors", "Nuclear Instrumentation", "Medical Physics"]
  },
  
  // Mathematics
  {
    id: "math-1",
    name: "Dr. Sameer Mathur",
    institution: "IIT Kanpur",
    department: "mathematics",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,19",
    hIndex: 32,
    i10Index: 65,
    publications: 154,
    citations: 4125,
    bio: "Dr. Sameer Mathur is a Professor at the Department of Mathematics, IIT Kanpur. His research focuses on algebraic geometry and number theory.",
    researchInterests: ["Algebraic Geometry", "Number Theory", "Elliptic Curves", "Modular Forms"]
  },
  {
    id: "math-2",
    name: "Dr. Jayashree Ramakrishnan",
    institution: "IIT Madras",
    department: "mathematics",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,13",
    hIndex: 30,
    i10Index: 61,
    publications: 142,
    citations: 3865,
    bio: "Dr. Jayashree Ramakrishnan is a Professor at the Department of Mathematics, IIT Madras. She specializes in analysis and differential equations.",
    researchInterests: ["Analysis", "Differential Equations", "Dynamical Systems", "Mathematical Modeling"]
  },
  {
    id: "math-3",
    name: "Dr. Harish Verma",
    institution: "IIT Delhi",
    department: "mathematics",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,20",
    hIndex: 35,
    i10Index: 72,
    publications: 168,
    citations: 4567,
    bio: "Dr. Harish Verma is a Professor at the Department of Mathematics, IIT Delhi. His research interests include topology and geometric analysis.",
    researchInterests: ["Topology", "Geometric Analysis", "Differential Geometry", "Riemannian Geometry"]
  },
  {
    id: "math-4",
    name: "Dr. Nirmala Devi",
    institution: "IIT Bombay",
    department: "mathematics",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,14",
    hIndex: 29,
    i10Index: 59,
    publications: 136,
    citations: 3654,
    bio: "Dr. Nirmala Devi is an Associate Professor at the Department of Mathematics, IIT Bombay. She specializes in algebra and representation theory.",
    researchInterests: ["Algebra", "Representation Theory", "Group Theory", "Ring Theory"]
  },
  {
    id: "math-5",
    name: "Dr. Rajendra Prasad",
    institution: "IIT Roorkee",
    department: "mathematics",
    departmentId: "mathematics",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,21",
    hIndex: 27,
    i10Index: 55,
    publications: 128,
    citations: 3421,
    bio: "Dr. Rajendra Prasad is a Professor at the Department of Mathematics, IIT Roorkee. His research focuses on numerical analysis and computational mathematics.",
    researchInterests: ["Numerical Analysis", "Computational Mathematics", "Scientific Computing", "Approximation Theory"]
  },
  
  // Arts & Humanities
  {
    id: "arts-1",
    name: "Dr. Aruna Sharma",
    institution: "Delhi University",
    department: "arts",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,15",
    hIndex: 22,
    i10Index: 45,
    publications: 110,
    citations: 2865,
    bio: "Dr. Aruna Sharma is a Professor at the Department of English, Delhi University. Her research focuses on postcolonial literature and cultural studies.",
    researchInterests: ["Postcolonial Literature", "Cultural Studies", "Indian Writing in English", "Gender Studies"]
  },
  {
    id: "arts-2",
    name: "Dr. Vikrant Pandey",
    institution: "Jawaharlal Nehru University",
    department: "arts",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,22",
    hIndex: 24,
    i10Index: 49,
    publications: 118,
    citations: 3012,
    bio: "Dr. Vikrant Pandey is a Professor at the Department of History, Jawaharlal Nehru University. He specializes in ancient Indian history and archaeology.",
    researchInterests: ["Ancient Indian History", "Archaeology", "Historiography", "Material Culture"]
  },
  {
    id: "arts-3",
    name: "Dr. Meenakshi Reddy",
    institution: "University of Hyderabad",
    department: "arts",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,16",
    hIndex: 20,
    i10Index: 42,
    publications: 95,
    citations: 2567,
    bio: "Dr. Meenakshi Reddy is a Professor at the Department of Philosophy, University of Hyderabad. Her research interests include Indian philosophy and ethics.",
    researchInterests: ["Indian Philosophy", "Ethics", "Comparative Philosophy", "Philosophy of Mind"]
  },
  {
    id: "arts-4",
    name: "Dr. Rajesh Khanna",
    institution: "Banaras Hindu University",
    department: "arts",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,23",
    hIndex: 18,
    i10Index: 38,
    publications: 88,
    citations: 2245,
    bio: "Dr. Rajesh Khanna is an Associate Professor at the Department of Sociology, Banaras Hindu University. He specializes in social movements and rural sociology.",
    researchInterests: ["Social Movements", "Rural Sociology", "Development Studies", "Indian Society"]
  },
  {
    id: "arts-5",
    name: "Dr. Sharmila Banerjee",
    institution: "Jadavpur University",
    department: "arts",
    departmentId: "arts",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,17",
    hIndex: 21,
    i10Index: 43,
    publications: 102,
    citations: 2698,
    bio: "Dr. Sharmila Banerjee is a Professor at the Department of Comparative Literature, Jadavpur University. Her research focuses on literary theory and translation studies.",
    researchInterests: ["Literary Theory", "Translation Studies", "Comparative Literature", "World Literature"]
  },
  
  // Business Management
  {
    id: "business-1",
    name: "Dr. Rajiv Malhotra",
    institution: "IIM Ahmedabad",
    department: "business",
    departmentId: "business",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,24",
    hIndex: 29,
    i10Index: 60,
    publications: 145,
    citations: 3876,
    bio: "Dr. Rajiv Malhotra is a Professor at the Department of Strategy, IIM Ahmedabad. His research focuses on strategic management and competitive advantage.",
    researchInterests: ["Strategic Management", "Competitive Advantage", "Corporate Strategy", "Business Models"]
  },
  {
    id: "business-2",
    name: "Dr. Priyanka Singh",
    institution: "IIM Bangalore",
    department: "business",
    departmentId: "business",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,18",
    hIndex: 27,
    i10Index: 56,
    publications: 132,
    citations: 3654,
    bio: "Dr. Priyanka Singh is a Professor at the Department of Finance, IIM Bangalore. She specializes in financial markets and corporate finance.",
    researchInterests: ["Financial Markets", "Corporate Finance", "Investment Analysis", "Financial Risk Management"]
  },
  {
    id: "business-3",
    name: "Dr. Arun Kapoor",
    institution: "IIM Calcutta",
    department: "business",
    departmentId: "business",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,25",
    hIndex: 26,
    i10Index: 53,
    publications: 128,
    citations: 3421,
    bio: "Dr. Arun Kapoor is a Professor at the Department of Marketing, IIM Calcutta. His research interests include consumer behavior and digital marketing.",
    researchInterests: ["Consumer Behavior", "Digital Marketing", "Brand Management", "Market Research"]
  },
  {
    id: "business-4",
    name: "Dr. Sunita Jain",
    institution: "XLRI Jamshedpur",
    department: "business",
    departmentId: "business",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,19",
    hIndex: 24,
    i10Index: 49,
    publications: 118,
    citations: 3156,
    bio: "Dr. Sunita Jain is an Associate Professor at the Department of Human Resources, XLRI Jamshedpur. She specializes in organizational behavior and leadership.",
    researchInterests: ["Organizational Behavior", "Leadership", "Human Resource Management", "Talent Management"]
  },
  {
    id: "business-5",
    name: "Dr. Manish Gupta",
    institution: "IIM Lucknow",
    department: "business",
    departmentId: "business",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,26",
    hIndex: 23,
    i10Index: 47,
    publications: 112,
    citations: 2987,
    bio: "Dr. Manish Gupta is a Professor at the Department of Operations, IIM Lucknow. His research focuses on supply chain management and operations research.",
    researchInterests: ["Supply Chain Management", "Operations Research", "Service Operations", "Project Management"]
  },
  
  // Medical Sciences
  {
    id: "med-1",
    name: "Dr. Sudhir Mehta",
    institution: "AIIMS Delhi",
    department: "medicine",
    departmentId: "medicine",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,27",
    hIndex: 45,
    i10Index: 92,
    publications: 228,
    citations: 6754,
    bio: "Dr. Sudhir Mehta is a Professor at the Department of Internal Medicine, AIIMS Delhi. His research focuses on cardiovascular diseases and preventive cardiology.",
    researchInterests: ["Cardiovascular Diseases", "Preventive Cardiology", "Hypertension", "Clinical Trials"]
  },
  {
    id: "med-2",
    name: "Dr. Anita Desai",
    institution: "AIIMS Bangalore",
    department: "medicine",
    departmentId: "medicine",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,20",
    hIndex: 42,
    i10Index: 86,
    publications: 215,
    citations: 6321,
    bio: "Dr. Anita Desai is a Professor at the Department of Neurology, AIIMS Bangalore. She specializes in neurological disorders and neuroscience.",
    researchInterests: ["Neurological Disorders", "Neuroscience", "Stroke", "Epilepsy"]
  },
  {
    id: "med-3",
    name: "Dr. Ramesh Kumar",
    institution: "CMC Vellore",
    department: "medicine",
    departmentId: "medicine",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,28",
    hIndex: 40,
    i10Index: 82,
    publications: 198,
    citations: 5932,
    bio: "Dr. Ramesh Kumar is a Professor at the Department of Surgery, CMC Vellore. His research interests include surgical oncology and minimally invasive surgery.",
    researchInterests: ["Surgical Oncology", "Minimally Invasive Surgery", "Surgical Techniques", "Clinical Research"]
  },
  {
    id: "med-4",
    name: "Dr. Sneha Patel",
    institution: "PGIMER Chandigarh",
    department: "medicine",
    departmentId: "medicine",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,21",
    hIndex: 38,
    i10Index: 78,
    publications: 186,
    citations: 5546,
    bio: "Dr. Sneha Patel is an Associate Professor at the Department of Pediatrics, PGIMER Chandigarh. She specializes in pediatric infectious diseases and immunology.",
    researchInterests: ["Pediatric Infectious Diseases", "Immunology", "Vaccines", "Childhood Diseases"]
  },
  {
    id: "med-5",
    name: "Dr. Vikram Sanyal",
    institution: "JIPMER Puducherry",
    department: "medicine",
    departmentId: "medicine",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,29",
    hIndex: 36,
    i10Index: 74,
    publications: 178,
    citations: 5123,
    bio: "Dr. Vikram Sanyal is a Professor at the Department of Community Medicine, JIPMER Puducherry. His research focuses on public health and epidemiology.",
    researchInterests: ["Public Health", "Epidemiology", "Preventive Medicine", "Health Policy"]
  },
  
  // Non-IIT Professors (additional)
  {
    id: "non-iit-1",
    name: "Dr. Aditya Sharma",
    institution: "Pune University",
    department: "cs",
    departmentId: "cs",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,30",
    hIndex: 32,
    i10Index: 65,
    publications: 156,
    citations: 4132,
    bio: "Dr. Aditya Sharma is a Professor at the Department of Computer Science, Pune University. His research focuses on artificial intelligence and machine learning.",
    researchInterests: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Computer Vision"]
  },
  {
    id: "non-iit-2",
    name: "Dr. Kavita Shukla",
    institution: "Jadavpur University",
    department: "electrical",
    departmentId: "electrical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,22",
    hIndex: 29,
    i10Index: 60,
    publications: 142,
    citations: 3845,
    bio: "Dr. Kavita Shukla is a Professor at the Department of Electrical Engineering, Jadavpur University. She specializes in power systems and renewable energy.",
    researchInterests: ["Power Systems", "Renewable Energy", "Smart Grid", "Energy Management"]
  },
  {
    id: "non-iit-3",
    name: "Dr. Raman Verma",
    institution: "Birla Institute of Technology",
    department: "mechanical",
    departmentId: "mechanical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,31",
    hIndex: 26,
    i10Index: 53,
    publications: 128,
    citations: 3412,
    bio: "Dr. Raman Verma is a Professor at the Department of Mechanical Engineering, Birla Institute of Technology. His research interests include thermodynamics and energy conversion.",
    researchInterests: ["Thermodynamics", "Energy Conversion", "Heat Transfer", "Combustion"]
  },
  {
    id: "non-iit-4",
    name: "Dr. Anjali Menon",
    institution: "NIT Trichy",
    department: "civil",
    departmentId: "civil",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,woman,23",
    hIndex: 24,
    i10Index: 49,
    publications: 118,
    citations: 3198,
    bio: "Dr. Anjali Menon is an Associate Professor at the Department of Civil Engineering, NIT Trichy. She specializes in structural engineering and construction materials.",
    researchInterests: ["Structural Engineering", "Construction Materials", "Sustainable Construction", "Concrete Technology"]
  },
  {
    id: "non-iit-5",
    name: "Dr. Prakash Narayan",
    institution: "VIT Vellore",
    department: "chemical",
    departmentId: "chemical",
    imageUrl: "https://source.unsplash.com/random/300x300/?professor,man,32",
    hIndex: 23,
    i10Index: 47,
    publications: 112,
    citations: 2954,
    bio: "Dr. Prakash Narayan is a Professor at the Department of Chemical Engineering, VIT Vellore. His research focuses on process modeling and simulation.",
    researchInterests: ["Process Modeling", "Simulation", "Chemical Reaction Engineering", "Process Control"]
  }
];

export const getTopProfessorsByDepartment = (departmentId: string, count: number = 5) => {
  return professors
    .filter(prof => prof.department === departmentId)
    .sort((a, b) => b.citations - a.citations)
    .slice(0, count);
};

export const getProfessorsByCategory = (category: string) => {
  const categoryMappings: Record<string, keyof Professor> = {
    'citations': 'citations',
    'i10-index': 'i10Index',
    'publications': 'publications',
    'iits': 'institution',
    'non-iits': 'institution'
  };
  
  const key = categoryMappings[category.toLowerCase()];
  
  if (!key) return [];
  
  if (category.toLowerCase() === 'iits') {
    return professors
      .filter(prof => prof.institution.includes('IIT'))
      .sort((a, b) => b.citations - a.citations);
  }
  
  if (category.toLowerCase() === 'non-iits') {
    return professors
      .filter(prof => !prof.institution.includes('IIT'))
      .sort((a, b) => b.citations - a.citations);
  }
  
  return professors
    .sort((a, b) => {
      const aValue = a[key] as number;
      const bValue = b[key] as number;
      return bValue - aValue;
    });
};

export const getAllProfessorsByDepartment = (departmentId: string) => {
  const baseProfessors = professors.filter(prof => prof.department === departmentId);
  
  if (baseProfessors.length < 50) {
    const expandedProfessors = [...baseProfessors];
    let idCounter = 1;
    
    while (expandedProfessors.length < 50) {
      const origIndex = (expandedProfessors.length - baseProfessors.length) % baseProfessors.length;
      const profToClone = baseProfessors[origIndex];
      
      if (profToClone) {
        const clonedProf = {
          ...profToClone,
          id: `${profToClone.id}-clone-${idCounter}`,
          hIndex: Math.max(1, profToClone.hIndex + Math.floor(Math.random() * 10) - 5),
          i10Index: Math.max(1, profToClone.i10Index + Math.floor(Math.random() * 15) - 7),
          citations: Math.max(100, profToClone.citations + Math.floor(Math.random() * 1000) - 500),
          publications: Math.max(10, profToClone.publications + Math.floor(Math.random() * 20) - 10)
        };
        
        expandedProfessors.push(clonedProf);
        idCounter++;
      }
    }
    
    return expandedProfessors.sort((a, b) => b.citations - a.citations);
  }
  
  return baseProfessors.sort((a, b) => b.citations - a.citations);
};
