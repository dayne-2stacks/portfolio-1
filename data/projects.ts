export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Coin Detection Script",
    des: "Created a python program that scans an image file and uses a user implemented hough transform function to detect coins and classify based on average color, hsv profile and coin radius using manual thresholding and Support Vector Machines. This program reported a classification rate of 97.81%, false detection rate of 0% and detection rate of 95.54%.",
    img: "/projects/coin-detection.png",
    iconLists: [],
    link: "/projects/1",
  },
  {
    id: 2,
    title: "RAG Employer Assistant",
    des: "Created a RAG based personal assistant that retrieves all my prior experiences and projects from an online server and communicates with interested employers by answering a tree of thought prompt that answers how my skills (if applicable) could be applied to their business model or job opening.",
    img: "/projects/rag-model.png",
    iconLists: [],
    link: "#footer",
  },
  {
    id: 3,
    title: "Fingerprint Classification using GCN",
    des: "Used SMOTE to balance an unbalanced dataset and created a Graph Convolution Network with node embeddings to classify fingerprints with an accuracy of 86.5%",
    img: "/projects/finger-gcn.png",
    iconLists: [],
    link: "/projects/3",
  },
  {
    id: 4,
    title: "5-bit Parallel Multiplier ASIC Design",
    des: "Developed a multiplier using 5nm transistor technology within a 900um x 900um area using custom transistor gate layouts.",
    img: "/projects/multiplier.png",
    iconLists: [],
    link: "/projects/4",
  },
  {
    id: 5,
    title: "Object Localization",
    des: "This project identifies a specific object in an image using keypoint matching and geometric transformations. The solution can locate any object given a proper reference image.",
    img: "/projects/object-local.png",
    iconLists: [],
    link: "https://github.com/dayne-2stacks/object-localization",
  },
];
