import pft_screenshot from "../data/pft_screenshot.png"
import graph_game_screenshot from "../data/graph_game_screenshot.png"
import cloth_simulation_screenshot from "../data/cloth_simulation_screenshot.png"
import parallel_kmeans_screenshot from "../data/cuda_screenshot.png"
import ik_simulation_screenshot from "../data/ik_simulation_screenshot.png"
import path_planning_and_crowd_simulation from "../data/path_planning_crowd_simulation_screenshot.png"
import raytracing_screenshot from "../data/refraction.png"
import top_20_movies_screenshot from "../data/top_20_movies_screenshot.png"

const projectData = {
  pft: {
    title: "Personal Financial Tracker",
    thumbnail: 
      <img 
        src={pft_screenshot} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '0em',
          left: '0em',
          width: "16em",
        }}
      />,
    github: "https://github.com/goheungchoi/personal-finance-tracker/tree/develop",
    description: "A comprehensive web application designed to organize and analyze personal financial activities for users",
    skills: ["Full-stack", "REST API", "Python", "Django", "React", "TypeScript", "Bulma"],
    detail: 
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Pellentesque ac scelerisque nunc, in pretium metus.
      Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
      Praesent dapibus mi eget neque eleifend volutpat. 
      Donec id nisi sapien. Nullam ut interdum tellus. 
      In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
      Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
    </>,
  },
  graphGame: {
    title: "Graph Game",
    thumbnail: 
      <img 
        src={graph_game_screenshot} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '-2em',
          left: '0em',
          height: "32em"
        }}
      />,
    github: "https://github.com/goheungchoi/graph-game",
    description: "A web-based game application where users compete with an AI powered by complex server-side logic and algorithms",
    skills: ["Back-end", "Software Architecture", "Algorithm", "WebSocket", "Unit Test", "C++17", "Boost", "React", "Redux"],
    detail: 
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ac scelerisque nunc, in pretium metus.
        Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
        Praesent dapibus mi eget neque eleifend volutpat. 
        Donec id nisi sapien. Nullam ut interdum tellus. 
        In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
        Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>,
  },
  clothSimulation: {
    title: "Cloth Simulation",
    thumbnail: 
      <img 
        src={cloth_simulation_screenshot} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '-4em',
          left: '-8em',
          height: "32em"
        }}
      />,
    github: "https://github.com/goheungchoi/graph-game",
    description: "A cloth simulation program that utilizes parallel programming for fast computation of spring-mass model via OpenCL",
    skills: ["Parallel Computing", "Computer Graphics", "C++14", "OpenGL", "OpenCL", "GLSL"],
    detail: 
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ac scelerisque nunc, in pretium metus.
        Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
        Praesent dapibus mi eget neque eleifend volutpat. 
        Donec id nisi sapien. Nullam ut interdum tellus. 
        In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
        Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>,
  },
  parallelKMeans: {
    title: "Parallel K-Means Classification",
    thumbnail: 
      <img 
        src={parallel_kmeans_screenshot} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '-2em',
          left: '-2em',
          height: "32em"
        }}
      />,
    github: null,
    description: "A parallelized K-means clustering tool optimized for various computing environments with enhanced speed and efficiency",
    skills: ["Parallel Computing", "Multithreading", "OpenMP", "MPI", "CUDA",  "C/C++"],
    detail: 
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ac scelerisque nunc, in pretium metus.
        Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
        Praesent dapibus mi eget neque eleifend volutpat. 
        Donec id nisi sapien. Nullam ut interdum tellus. 
        In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
        Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>,
  },
  IKSimulation: {
    title: "IK Simulation",
    thumbnail: 
      <img 
        src={ik_simulation_screenshot} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '0em',
          left: '-4em',
          height: "16em"
        }}
      />,
    github: null,
    description: "A real-time inverse kinematic (IK) simulation program using Processing, a free graphical library in Java",
    skills: ["Real-Time Simulation", "Inverse Kinematics", "Algorithm", "JAVA", "Processing"],
    detail: 
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ac scelerisque nunc, in pretium metus.
        Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
        Praesent dapibus mi eget neque eleifend volutpat. 
        Donec id nisi sapien. Nullam ut interdum tellus. 
        In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
        Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>,
  },
  pathPlanningAndCrowdSimulation: {
    title: "Path Planning & Crowd Simulation",
    thumbnail: 
      <img 
        src={path_planning_and_crowd_simulation} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '-8em',
          left: '-8em',
          height: "32em"
        }}
      />,
    github: null,
    description: "A real-time crowd simulation of agents capable of collision-free pathfinding by using the combination of A* and TTC algorithms",
    skills: ["Real-Time Simulation", "Motion Planning", "Algorithm", "JAVA", "Processing"],
    detail: 
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ac scelerisque nunc, in pretium metus.
        Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
        Praesent dapibus mi eget neque eleifend volutpat. 
        Donec id nisi sapien. Nullam ut interdum tellus. 
        In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
        Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>,
  },
  raytracer: {
    title: "Raytracer",
    thumbnail: 
      <img 
        src={raytracing_screenshot} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '-32em',
          left: '-16em',
          height: "64em"
        }}
      />,
    github: null,
    description: "A 3D rendering program to generate photorealistic 3D images using the Bling-Phong illustration and recursive raytracing",
    skills: ["C++17", "Optimization", "OOP", "Computer Graphics", "Lexical Analysis"],
    detail: 
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ac scelerisque nunc, in pretium metus.
        Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
        Praesent dapibus mi eget neque eleifend volutpat. 
        Donec id nisi sapien. Nullam ut interdum tellus. 
        In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
        Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>,
  },
  top20Movies: {
    title: "Top 20 Movies",
    thumbnail: 
      <img 
        src={top_20_movies_screenshot} 
        alt='thumbnail' 
        style={{
          position: 'relative',
          top: '0em',
          left: '0em',
          width: "26em"
        }}
      />,
    github: null,
    description: "An interactive website showcasing the top 20 movies sourced from TMDB API with diverse visual effects",
    skills: ["ReactJS", "HTML/CSS"],
    detail: 
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque ac scelerisque nunc, in pretium metus.
        Duis suscipit aliquet odio, ut lobortis turpis porttitor ac. 
        Praesent dapibus mi eget neque eleifend volutpat. 
        Donec id nisi sapien. Nullam ut interdum tellus. 
        In semper pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. 
        Ut eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>,
  }
}

export default projectData;