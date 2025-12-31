import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | "Ongoing";
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "digital-companion",
    companyName: "Emotion & Context-Aware Digital Companion",
    type: "Professional",
    category: ["Mobile Dev"],
    shortDescription: "Building a wearable digital companion that combines low-latency emotion recognition with contextual awareness. Implementing motion-artifact removal for EEG and PPG to improve signal reliability. Developing emotion recognition models using BVP and EEG spectral features.",
    websiteLink: "https://drive.google.com/drive/folders/1PIQLxkDkNhg01yAgFJQ7mo5pL60lbKNn",
    techStack: ["Python", "TensorFlow", "Data Analysis"],
    startDate: new Date("2024-01-01"),
    endDate: "Ongoing",
    companyLogoImg: "/fyp.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Building a wearable digital companion that combines low-latency emotion recognition with contextual awareness.",
        "Implementing motion-artifact removal for EEG and PPG to improve signal reliability.",
        "Developing emotion recognition models using BVP and EEG spectral features.",
        "Integrating personalized feedback based on emotional state and context.",
      ],
    },
  },
  {
    id: "ecg-arrhythmia",
    companyName: "ECG Arrhythmia Classification Using Adaptive Multi-Window STFT and CNN",
    type: "Personal",
    category: [],
    shortDescription: "Built a deep-learning pipeline using multi resolution STFT features and a 2D CNN classifier. Improved arrhythmia detection accuracy through adaptive time frequency representation.",
    githubLink: "https://github.com/rnsfernando/ECG_Arrhythmia_Classification_Using_Adaptive_Multi-Window_STFT_and_CNN",
    techStack: ["Python", "TensorFlow", "Data Analysis"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-01"),
    companyLogoImg: "/projects/ecg-arrhythmia.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Built a deep-learning pipeline using multi resolution STFT features and a 2D CNN classifier.",
        "Improved arrhythmia detection accuracy through adaptive time frequency representation.",
      ],
    },
  },
  {
    id: "faster-vit",
    companyName: "Experimental Study and Performance Analysis of Faster Vision Transformers (FasterViT) for Computer Vision Tasks",
    type: "Personal",
    category: [],
    shortDescription: "Reproduced and evaluated the FasterViT architecture through benchmarking, fine-tuning, and comparison with CNNs and Swin Transformer across classification and detection tasks.",
    githubLink: "https://github.com/rnsfernando/FasterViT-OCI--Boundary-Aware-Hierarchical-Vision-Transformer",
    techStack: ["Python", "PyTorch"],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/fastervit.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Reproduced and evaluated the FasterViT architecture through benchmarking, fine-tuning, and comparison with CNNs and Swin Transformer across classification and detection tasks.",
        "Implemented experiments, ran throughput and accuracy evaluations, fine-tuned models on CIFAR-10, and proposed lightweight architectural improvements to enhance performance under limited hardware constraints.",
      ],
    },
  },
  {
    id: "clre-net",
    companyName: "CLRerNet - Improving Confidence of Lane Detection with LaneIoU",
    type: "Personal",
    category: [],
    shortDescription: "Developing an advanced lane detection system using the LaneIoU method to improve the accuracy of lane confidence scores. This method significantly improves lane detection accuracy on challenging datasets, such as CULane and CurveLanes.",
    githubLink: "https://github.com/Team-Visionary-Innovators/CLRerNet-Improving-Confidence-of-Lane-Detection-with-LaneloU-",
    techStack: ["Python", "Data Analysis"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-11-01"),
    companyLogoImg: "/projects/clrernet.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Developing an advanced lane detection system using the LaneIoU method to improve the accuracy of lane confidence scores.",
        "This method significantly improves lane detection accuracy on challenging datasets, such as CULane and CurveLanes.",
      ],
    },
  },
  {
    id: "liver-segmentation",
    companyName: "Liver Segmentation with U-Net and PyTorch",
    type: "Personal",
    category: [],
    shortDescription: "Implemented liver segmentation using 3D U-Net with Monai and PyTorch. Used 3D Slicer and ITK-SNAP for data preparation and scan visualization.",
    githubLink: "https://github.com/rnsfernando/Liver-Segmentation",
    techStack: ["Python", "PyTorch", "Monai"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/liversegmentation.PNG",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Implemented liver segmentation using 3D U-Net with Monai and PyTorch.",
        "Used 3D Slicer and ITK-SNAP for data preparation and scan visualization.",
        "Trained and tested the model with custom scripts, evaluated using loss and Dice coefficient.",
      ],
    },
  },
  {
    id: "brain-tumor",
    companyName: "Brain Tumor Detection using SVC",
    type: "Personal",
    category: [],
    shortDescription: "This project focuses on the detection of brain tumors using a Support Vector Classifier (SVC) model.",
    githubLink: "https://github.com/rnsfernando/Brain-tumor-detection-using-SVC",
    techStack: ["Python"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/braintumor.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: ["This project focuses on the detection of brain tumors using a Support Vector Classifier (SVC) model."],
    },
  },
  {
    id: "transformer-system",
    companyName: "Transformer-Management-System",
    type: "Personal",
    category: [],
    shortDescription: "Developing a full-stack web platform for transformer thermal inspections, including image management, AI-based anomaly detection, interactive annotation, and automated maintenance report generation.",
    githubLink: "https://github.com/rnsfernando/Transformer-Management-System",
    techStack: ["React", "Python"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-01"),
    companyLogoImg: "/projects/transformermanagement.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Developing a full-stack web platform for transformer thermal inspections, including image management, AI-based anomaly detection, interactive annotation, and automated maintenance report generation.",
        "Designed the front-end interface for the system.",
      ],
    },
  },
  {
    id: "smart-soldering",
    companyName: "Smart Soldering Station",
    type: "Personal",
    category: [],
    shortDescription: "The Smart Solder Station is a high-performance soldering solution equipped with both a soldering iron and a hot air gun. It features advanced PID temperature control and multiple operational modes.",
    githubLink: "https://github.com/rnsfernando/Smart-Soldering-Staion",
    techStack: ["C", "C++"],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/projects/solderingStation.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "The Smart Solder Station is a high-performance soldering solution equipped with both a soldering iron and a hot air gun. It features advanced PID temperature control and multiple operational modes, providing precise, efficient, and reliable soldering capabilities.",
        "Implementing AVR programming for the microcontroller in C, designing the enclosure, assisting in circuit design, testing, and conducting soldering tasks.",
      ],
    },
  },
  {
    id: "electronic-stethoscope",
    companyName: "Design and Development of an Electronic Stethoscope",
    type: "Personal",
    category: [],
    shortDescription: "Designed an electronic stethoscope using a microphone-based acoustic front end with Wi-Fi transmission to a web application for real-time waveform visualization, audio playback, and data storage.",
    githubLink: "https://github.com/rnsfernando/Electronic_Stethoscope",
    techStack: [],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/electronics_stethoscope.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Designed an electronic stethoscope using a microphone-based acoustic front end with Wi-Fi transmission to a web application for real-time waveform visualization, audio playback, and data storage.",
        "Led the complete hardware and mechanical design, including acoustic chestpiece design and resonance frequency calculations to optimize heart sound capture.",
      ],
    },
  },
  {
    id: "diabetic-insole",
    companyName: "Insole System for Early Detection of Diabetic Foot Ulcers",
    type: "Personal",
    category: [],
    shortDescription: "First bench model prototype. Conducted regulatory pathway analysis and IP analysis.",
    githubLink: "https://github.com/rnsfernando/Advanced-Insole-System-for-Early-Detection-of-Diabetic-Foot-Ulcers",
    techStack: [],
    startDate: new Date("2023-12-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/insolesystem.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "First bench model prototype.",
        "Conducted regulatory pathway analysis and IP analysis.",
      ],
    },
  },
  {
    id: "physiological-systems",
    companyName: "Modelling and Analysis of Physiological Systems",
    type: "Personal",
    category: ["Simulation"],
    shortDescription: "Analysis of cardiac physiology. Branched Cylinders: Dendritic tree approximation. Hodgkin-Huxley equation. Investigate compartmental systems. Simulation of respiratory mechanism.",
    githubLink: "https://github.com/rnsfernando/Modelling-and-Analysis-of-Physiological-Systems",
    techStack: ["Matlab"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/modeling.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Analysis of cardiac physiology.",
        "Branched Cylinders: Dendritic tree approximation.",
        "Hodgkin-Huxley equation.",
        "Investigate compartmental systems.",
        "Simulation of respiratory mechanism.",
      ],
    },
  },
  {
    id: "sleep-inducer",
    companyName: "Biomedical Sleep Inducer",
    type: "Personal",
    category: [],
    shortDescription: "A biomedical device enhancing sleep quality through non-invasive brain activity modulation, aimed at providing a portable, cost-effective solution for insomnia sufferers.",
    githubLink: "https://github.com/rnsfernando/Dream_Guard-Biomedical_Sleep_Inducer",
    techStack: ["Altium Designer"],
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-07-01"),
    companyLogoImg: "/projects/sleepinducer.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "A biomedical device enhancing sleep quality through non-invasive brain activity modulation, aimed at providing a portable, cost-effective solution for insomnia sufferers.",
        "Designed schematics and PCB layout to ensure reliable operation, and contributed to the assembly process for functional integration.",
      ],
    },
  },
  {
    id: "medi-box",
    companyName: "MediBox- IoT based Smart Medicine Storage System",
    type: "Personal",
    category: ["IoT"],
    shortDescription: "The Smart MediBox is an IoT based device that manages medication schedules with reminders, environmental monitoring, and remote control via a web based dashboard, ensuring adherence and optimal storage conditions.",
    githubLink: "https://github.com/rnsfernando/Medi-Box/tree/main",
    techStack: ["Node-RED", "ESP32", "C++"],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/projects/medibox.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The Smart MediBox is an IoT based device that manages medication schedules with reminders, environmental monitoring, and remote control via a web based dashboard, ensuring adherence and optimal storage conditions.",
      ],
      bullets: [
        "PCB design.",
        "Dashboard design using Node-RED.",
        "Programming ESP32 microcontroller.",
      ],
    },
  },
  {
    id: "equalizer",
    companyName: "Five Band Equilizer",
    type: "Personal",
    category: [],
    shortDescription: "Designed and implemented a five-band analog audio equalizer, including PCB layout, enclosure design, and circuitry with five filters, five amplifiers, and an adder to regulate and modify audio signals over five frequency ranges using only analog components.",
    githubLink: "https://github.com/rnsfernando/FiveBandEquilizer",
    techStack: ["Altium Designer"],
    startDate: new Date("2023-12-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/fivebandequalizer.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Designed and implemented a five-band analog audio equalizer, including PCB layout, enclosure design, and circuitry with five filters, five amplifiers, and an adder to regulate and modify audio signals over five frequency ranges using only analog components.",
        "Designed enclosures and assisted in system integration, circuit design, and conducting soldering tasks.",
      ],
    },
  },
  {
    id: "uart-fpga",
    companyName: "UART Transceiver Implementation in FPGA",
    type: "Personal",
    category: [],
    shortDescription: "Implemented a UART transceiver using FPGA, enabling reliable serial communication for data transmission and reception.",
    githubLink: "https://github.com/rnsfernando/FPGA_UART",
    techStack: ["Verilog", "FPGA"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/projects/uart.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [
        "Implemented a UART transceiver using FPGA, enabling reliable serial communication for data transmission and reception.",
        "Used Verilog hardware description language (HDL) to design.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
