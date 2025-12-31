import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export interface SkillCategory {
  title: string;
  skills: skillsInterface[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        description: "Versatile language for AI, ML, and backend development.",
        rating: 5,
        icon: Icons.python,
      },
      {
        name: "C++",
        description: "High-performance language for systems and game development.",
        rating: 4,
        icon: Icons.cpp,
      },
      {
        name: "MATLAB",
        description: "Numeric computing platform for engineering and science.",
        rating: 4,
        icon: Icons.page,
      },
      {
        name: "Java",
        description: "Robust, object-oriented language for enterprise applications.",
        rating: 4,
        icon: Icons.java,
      },
      {
        name: "JavaScript",
        description: "Interactive web development and dynamic content.",
        rating: 5,
        icon: Icons.javascript,
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for scalable application development.",
        rating: 5,
        icon: Icons.typescript,
      },
      {
        name: "SQL",
        description: "Standard language for relationship database management.",
        rating: 4,
        icon: Icons.page,
      },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      {
        name: "React",
        description: "Library for web and native user interfaces.",
        rating: 5,
        icon: Icons.react,
      },
      {
        name: "Next.js",
        description: "The React Framework for the Web.",
        rating: 5,
        icon: Icons.nextjs,
      },
      {
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine.",
        rating: 4,
        icon: Icons.nodejs,
      },
      {
        name: "TensorFlow",
        description: "End-to-end open source platform for machine learning.",
        rating: 4,
        icon: Icons.tensorflow,
      },
      {
        name: "PyTorch",
        description: "Deep learning framework for fast, flexible experimentation.",
        rating: 4,
        icon: Icons.pytorch,
      },
      {
        name: "Scikit-learn",
        description: "Simple and efficient tools for predictive data analysis.",
        rating: 4,
        icon: Icons.scikit,
      },
      {
        name: "Pandas",
        description: "Fast, powerful, flexible and easy to use data analysis tool.",
        rating: 5,
        icon: Icons.pandas,
      },
      {
        name: "NumPy",
        description: "Fundamental package for scientific computing with Python.",
        rating: 5,
        icon: Icons.numpy,
      },
      {
        name: "Monai",
        description: "Model development and medical imaging tasks.",
        rating: 4,
        icon: Icons.simulation,
      },
      {
        name: "Matplotlib",
        description: "Visualizing results.",
        rating: 4,
        icon: Icons.chart,
      },
    ],
  },
  {
    title: "Software & Tools",
    skills: [
      {
        name: "Altium Designer",
        description: "PCB design software.",
        rating: 3,
        icon: Icons.altium,
      },
      {
        name: "SolidWorks",
        description: "3D CAD design software.",
        rating: 3,
        icon: Icons.solidworks,
      },
      {
        name: "Blender",
        description: "Open source 3D creation suite.",
        rating: 3,
        icon: Icons.blender,
      },
      {
        name: "Rhino",
        description: "3D modeling software.",
        rating: 3,
        icon: Icons.media,
      },
      {
        name: "Grasshopper",
        description: "Graphical algorithm editor for Rhino.",
        rating: 3,
        icon: Icons.code,
      },
      {
        name: "COMSOL Multiphysics",
        description: "Simulation and multiphysics modeling.",
        rating: 3,
        icon: Icons.simulation,
      },
      {
        name: "LTspice",
        description: "High performance SPICE simulator.",
        rating: 3,
        icon: Icons.simulation,
      },
      {
        name: "Quartus Prime",
        description: "FPGA programming software.",
        rating: 3,
        icon: Icons.hardware,
      },
      {
        name: "Arduino",
        description: "Open-source electronics platform.",
        rating: 4,
        icon: Icons.arduino,
      },
      {
        name: "Atmel Studio",
        description: "Integrated development platform for Atmel AVR and ARM.",
        rating: 3,
        icon: Icons.hardware,
      },
      {
        name: "Canva",
        description: "Graphic design platform.",
        rating: 4,
        icon: Icons.canva,
      },
      {
        name: "Git & GitHub",
        description: "Version control and collaboration for code.",
        rating: 5,
        icon: Icons.git,
      },
      {
        name: "3D Slicer",
        description: "Data preparation, visualization, and contrast adjustment.",
        rating: 3,
        icon: Icons.media,
      },
      {
        name: "ITK-SNAP",
        description: "Medical image segmentation tool.",
        rating: 3,
        icon: Icons.simulation,
      },
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database system.",
        rating: 4,
        icon: Icons.postgres,
      },
      {
        name: "Firebase",
        description: "Google's mobile platform that helps you quickly develop high-quality apps.",
        rating: 4,
        icon: Icons.firebase,
      },
    ],
  },
];

export const skills = skillsCategories.flatMap((cat) => cat.skills);

export const featuredSkills = skills.slice(0, 9); // Increased to 9 to show more variety
