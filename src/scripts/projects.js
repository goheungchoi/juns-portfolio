import pft_screenshot from "../data/pft_screenshot.png";
import graph_game_screenshot from "../data/graph_game_screenshot.png";
import cloth_simulation_screenshot from "../data/cloth_simulation_screenshot.png";
import parallel_kmeans_screenshot from "../data/cuda_screenshot.png";
import ik_simulation_screenshot from "../data/ik_simulation_screenshot.png";
import path_planning_and_crowd_simulation from "../data/path_planning_crowd_simulation_screenshot.png";
import raytracing_screenshot from "../data/refraction.png";
import top_20_movies_screenshot from "../data/top_20_movies_screenshot.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import style from "../style/scripts/projects.module.css";

const projectData = {
  pft: {
    title: "Personal Financial Tracker",
    thumbnail: (
      <img
        src={pft_screenshot}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "-4em",
          left: "0em",
          width: "16em",
        }}
      />
    ),
    github:
      "https://github.com/goheungchoi/personal-finance-tracker/tree/develop",
    description:
      "A comprehensive web application designed to organize and analyze personal financial activities for users",
    skills: [
      "Full-stack",
      "REST API",
      "Python",
      "Django",
      "React",
      "TypeScript",
      "Bulma",
    ],
    detail: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        scelerisque nunc, in pretium metus. Duis suscipit aliquet odio, ut
        lobortis turpis porttitor ac. Praesent dapibus mi eget neque eleifend
        volutpat. Donec id nisi sapien. Nullam ut interdum tellus. In semper
        pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. Ut
        eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>
    ),
  },
  graphGame: {
    title: "Graph Game",
    thumbnail: (
      <img
        src={graph_game_screenshot}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "-2em",
          left: "0em",
          height: "32em",
        }}
      />
    ),
    github: "https://github.com/goheungchoi/graph-game",
    description:
      "A web-based game application where users compete with an AI powered by complex server-side logic and algorithms",
    skills: [
      "Back-end",
      "Software Architecture",
      "Algorithm",
      "WebSocket",
      "Unit Test",
      "C++17",
      "Boost",
      "React",
      "Redux",
    ],
    detail: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        scelerisque nunc, in pretium metus. Duis suscipit aliquet odio, ut
        lobortis turpis porttitor ac. Praesent dapibus mi eget neque eleifend
        volutpat. Donec id nisi sapien. Nullam ut interdum tellus. In semper
        pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. Ut
        eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>
    ),
  },
  clothSimulation: {
    title: "Cloth Simulation",
    thumbnail: (
      <img
        src={cloth_simulation_screenshot}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "-4em",
          left: "-8em",
          height: "32em",
        }}
      />
    ),
    github: "https://github.com/goheungchoi/graph-game",
    description:
      "A cloth simulation program that utilizes parallel programming for fast computation of spring-mass model via OpenCL",
    skills: [
      "Parallel Computing",
      "Computer Graphics",
      "C++14",
      "OpenGL",
      "OpenCL",
      "GLSL",
    ],
    detail: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        scelerisque nunc, in pretium metus. Duis suscipit aliquet odio, ut
        lobortis turpis porttitor ac. Praesent dapibus mi eget neque eleifend
        volutpat. Donec id nisi sapien. Nullam ut interdum tellus. In semper
        pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. Ut
        eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>
    ),
  },
  parallelKMeans: {
    title: "Parallel K-Means Classification",
    thumbnail: (
      <img
        src={parallel_kmeans_screenshot}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "-2em",
          left: "-2em",
          height: "32em",
        }}
      />
    ),
    github: null,
    description:
      "A parallelized K-means clustering tool optimized for various computing environments with enhanced speed and efficiency",
    skills: [
      "Parallel Computing",
      "Multithreading",
      "OpenMP",
      "MPI",
      "CUDA",
      "C/C++",
    ],
    detail: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        scelerisque nunc, in pretium metus. Duis suscipit aliquet odio, ut
        lobortis turpis porttitor ac. Praesent dapibus mi eget neque eleifend
        volutpat. Donec id nisi sapien. Nullam ut interdum tellus. In semper
        pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. Ut
        eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>
    ),
  },
  IKSimulation: {
    title: "IK Simulation",
    thumbnail: (
      <img
        src={ik_simulation_screenshot}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "0em",
          left: "-4em",
          height: "16em",
        }}
      />
    ),
    github: null,
    description:
      "A real-time inverse kinematic (IK) simulation program using Processing, a free graphical library in Java",
    skills: [
      "Real-Time Simulation",
      "Inverse Kinematics",
      "Algorithm",
      "JAVA",
      "Processing",
    ],
    detail: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        scelerisque nunc, in pretium metus. Duis suscipit aliquet odio, ut
        lobortis turpis porttitor ac. Praesent dapibus mi eget neque eleifend
        volutpat. Donec id nisi sapien. Nullam ut interdum tellus. In semper
        pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. Ut
        eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>
    ),
  },
  pathPlanningAndCrowdSimulation: {
    title: "Path Planning & Crowd Simulation",
    thumbnail: (
      <img
        src={path_planning_and_crowd_simulation}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "-8em",
          left: "-8em",
          height: "32em",
        }}
      />
    ),
    github: null,
    description:
      "A real-time crowd simulation of agents capable of collision-free pathfinding by using the combination of A* and TTC algorithms",
    skills: [
      "Real-Time Simulation",
      "Motion Planning",
      "Algorithm",
      "JAVA",
      "Processing",
    ],
    detail: (
      <>
        <section className={style.detail_section}>
          <h1>List of Resources</h1>
          <ul>
            <li>
              Kenney - 3D Space Kit&nbsp;
              <a href="https://www.kenney.nl/assets/space-kit/">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>3DCamera (created by professor Liam Tyler)</li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>Agent Path Planning</h1>
          <p>
            Navigating agents to certain points seamlessly in the real world is
            one of the challenging problems in computer science. Due to the
            complexity and unpredictability of environments, finding optimal
            paths sounds even somewhat impossible. Fortunately, thanks to the
            endeavors of many computer scientists for decades, now we know how
            to deal with this sort of problem. Also, in simulation worlds, the
            navigation problem gets simpler as they are at least vastly informed
            and predictable to a certain degree. In this regard, the navigating
            agent problem of this project becomes a matter of how to find the
            shortest path to a goal.
          </p>
          <p>
            The well-known solution to pathfinding problems is the A* algorithm.
            Considering the algorithm's completeness and optimality, A* seems
            the perfect fit for any application. In most cases, especially in
            any Euclidean space, we know the heuristic function that is always
            admissible, the Euclidean distance formula, guaranteeing the
            solution found by the algorithm to be complete and optimal. Due to
            this desirable feature, A* is widely used in various fields.
          </p>
          <p>
            However, the problem is not yet to be solved because the algorithm
            is designed to be applicable only on “graphs” where vertices,
            so-called nodes, play the role of locations. In other words, in
            real-world applications, we need to build a special system to
            provide information about locations that can be recognizable by the
            agents. Researchers came up with many different solutions to this
            issue. One of the common choices in games and real-time simulations
            is generating paths via triangulation of navigation meshes (navmesh)
            prior to the actual runtime of the programs. The triangulation
            process creates a fine-tuned graph with vertices and edges that are
            compatible with the shape of the world, enabling the A* algorithm to
            operate on any terrain in the world properly. For example, the
            actual algorithm might simplify some vertices around obstacles and
            walls, and then connect the vertices using any triangulation
            algorithm. The constrained Delaunay triangulation is often used as
            the triangulation algorithm due to its ability to generate
            relatively uniform-sized triangles of meshes.
          </p>
          <p>
            The key advantage of the triangulation with navmesh is that it does
            not overpopulate edges. Imagine we have 5 vertices on a map. If we
            connect all the vertices, there will be 5! number of edges. In more
            realistic and practical cases, there are often thousands and
            millions of vertices. Then, it will result in v! space complexity,
            and it is not favorable. On the other hand, the triangulation
            algorithms generally produce a reasonable amount of lines among
            vertices, thereby saving a lot of memory space.
          </p>
          <p>
            In spite of the space efficiency of the navmash triangulation, there
            is one critical drawback of it; the implementation of the Delaunay
            triangulation algorithm is a pain. The constrained Delaunay
            triangulation algorithm itself is a very complicated algorithm,
            therefore, its implementation is very error-prone and demands
            careful debugging steps. Even worse, many helper procedures must be
            defined first in order for the algorithm to actually function. For
            example, the collision meshes around objects and navigation meshes
            may be needed to generate nodes around obstacles and walls.
          </p>
          <p>
            To avoid this complexity, I chose an alternative way of building
            paths, a grid system. The implementation of the grid system is not
            as arduous as that of the Delaunay triangulator. Although the grid
            system might not be the best solution to store the geographical
            information of a world in many situations, it suffices for a small
            project like mine. Also, the triangulation of meshes is not the main
            goal of this project, so I decided to trade off some run-time
            efficiency for faster development time.
          </p>
          <p>
            For details, the grid subdivides the map into equal-sized small
            squares. In this project, one side of a square is as long as 8
            pixels. To achieve more accurate path planning, we can make the tile
            size decrease, but this would intensify the computational loads of
            the pathfinding algorithm. In addition to this, we should consider
            the configuration space of the agents. Configuration space (C-Space)
            refers to the areas where agents can move around without collision.
            It is important to cull away paths that the agents cannot pass
            through to avoid generating false paths. C-Space can be obtained simply by disregarding the points
            around collision meshes plus the radius of the agent. And, the rest
            of the steps are to place obstacles randomly and test if A* properly
            works in the grid system.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Crowd Simulation</h1>I referenced the crowd interaction model from
          Starcraft, a famous RTS game by Blizzard. In Starcraft, each
        </section>

        <section className={style.detail_section}>
          <h1>Object Rendering</h1>
        </section>

        <section className={style.detail_section}>
          <h1>Incorporate Particle System</h1>
        </section>

        <section className={style.detail_section}>
          <h1>Orientation Smoothing</h1>
        </section>
      </>
    ),
  },
  raytracer: {
    title: "Raytracer",
    thumbnail: (
      <img
        src={raytracing_screenshot}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "-32em",
          left: "-16em",
          height: "64em",
        }}
      />
    ),
    github: null,
    description:
      "A 3D rendering program to generate photorealistic 3D images using the Bling-Phong illustration and recursive raytracing",
    skills: [
      "C++17",
      "Optimization",
      "OOP",
      "Computer Graphics",
      "Lexical Analysis",
    ],
    detail: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        scelerisque nunc, in pretium metus. Duis suscipit aliquet odio, ut
        lobortis turpis porttitor ac. Praesent dapibus mi eget neque eleifend
        volutpat. Donec id nisi sapien. Nullam ut interdum tellus. In semper
        pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. Ut
        eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>
    ),
  },
  top20Movies: {
    title: "Top 20 Movies",
    thumbnail: (
      <img
        src={top_20_movies_screenshot}
        alt="thumbnail"
        style={{
          position: "relative",
          top: "0em",
          left: "0em",
          width: "26em",
        }}
      />
    ),
    github: null,
    description:
      "An interactive website showcasing the top 20 movies sourced from TMDB API with diverse visual effects",
    skills: ["ReactJS", "HTML/CSS"],
    detail: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        scelerisque nunc, in pretium metus. Duis suscipit aliquet odio, ut
        lobortis turpis porttitor ac. Praesent dapibus mi eget neque eleifend
        volutpat. Donec id nisi sapien. Nullam ut interdum tellus. In semper
        pulvinar elit et dictum. Phasellus efficitur in ex eget lobortis. Ut
        eget massa suscipit, bibendum tellus nec, placerat nibh.
      </>
    ),
  },
};

export default projectData;
