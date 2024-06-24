// Thumbnails
import razanya_screenshot from "../data/razanya/razanya_entry.png";
import pft_screenshot from "../data/pft_screenshot.png";
import graph_game_screenshot from "../data/graph_game_screenshot.png";
import cloth_simulation_screenshot from "../data/cloth_simulation_screenshot.png";
import parallel_kmeans_screenshot from "../data/cuda_screenshot.png";
import ik_simulation_screenshot from "../data/ik_simulation_screenshot.png";
import path_planning_and_crowd_simulation from "../data/path_planning_crowd_simulation_screenshot.png";
import raytracing_screenshot from "../data/refraction.png";
import top_20_movies_screenshot from "../data/top_20_movies_screenshot.png";

// Graph Game UML Diagram
import graph_game_uml from "../data/Graph_Game_UML.png";
// Razanya UML Diagram
import razanya_uml from "../data/razanya/Lazanya33_UML_Diagram.png"
import razanya_bricks_uml from "../data/razanya/Lazanya33_Bricks_UML_Diagram.png"
import razanya_irenderable_uml from "../data/razanya/Lazanya33_IRenderable_UML_Diagram.png"
import razanya_iplayer_uml from "../data/razanya/Lazanya33_IPlayer_UML_Diagram.png"

// Path Planning & Crowd Simulation
import agent_navigation from "../data/crowd_simulation/agent_navigation.mp4";
import stationary_agents_collisions from "../data/crowd_simulation/stationary_agents_collisions.gif";
import ttc_force from "../data/crowd_simulation/ttc_force.gif";

//Zip files
import fabrik from "../data/FABRIK.zip";
import jacobian from "../data/JacobianIK.zip";
import crowd from "../data/JacobianIK.zip";

// Razanya GridDeque examples
import grid_deque_example1 from "../data/razanya/GridDequeExample1.png";
import grid_deque_example2 from "../data/razanya/GridDequeExample2.png";
import grid_deque_example3 from "../data/razanya/GridDequeExample3.png";
import grid_deque_example4 from "../data/razanya/GridDequeExample4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import hljs from "highlight.js/lib/core";
import elm from "highlight.js/lib/languages/elm";
import python from "highlight.js/lib/languages/python";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css"; // Import a style. Choose the one you prefer.

import { MathComponent } from "mathjax-react";

import style from "../style/scripts/projects.module.css";
import Image from "../components/Image";

hljs.registerLanguage("python", python);
hljs.registerLanguage("elm", elm);
hljs.highlightAll();

{
  // template: {
  //   title: "project_name",
  //   thumbnail: (
  //     <img
  //       alt="No Image"
  //     />
  //   ),
  //   github: "github/link",
  //   description: "description",
  //   skills: [
  //     "My",
  //     "Skills",
  //   ],
  //   detail: (
  //     <>
  //       <section className={style.detail_section}>
  //         <h1>Header</h1>
  //         <h2>Headline</h2>
  //         <p>Context</p>
  //       </section>
  //     </>
  //   ),
  // },
}
{
  /* TODO: Unreal Projects */
}

const projectData = {
  Razanya33: {
    title: "Razanya33",
    thumbnail: (
      <img
        src={razanya_screenshot}
        alt="No Image"
        style={{
          position: "relative",
          top: "0em",
          left: "0em",
          height: "16em",
        }}
      />
    ),
    github: null,
    description:
      "A casual endless-dig game made with a light-weight custom-built game engine powered by GDI+ Win32 API.",
    skills: [
      "Project Management",
      "Game Development",
      "Software Architecture",
      "Algorithm",
      "C++",
    ],
    detail: (
      <>
        <section className={style.detail_section}>
          <ul>
            <li>
              Go to the Source Code&nbsp;
              <a href="https://github.com/goheungchoi/Lazanya33">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>Overview</h1>

          <abbr>
            Razanya33 is a casual time-limited endless digging game. In this
            game, players take on the role of Razanya who wants to dig into the
            Mooktinee mine as deeply as possible and explore underground while
            avoiding detonating bombs. The deeper Razanya goes, the scarcer
            oxygen gets, so players will need to go deeper as fast as they can
            to secure more air or find the Wind stones in the mine. Also,
            players should be aware that the tricky Gold stones are out there to
            fool them.
          </abbr>

          <p>
            This is the result of my first team project at KOCCA Game Academy.
            For the project, students were given 2 weeks to finish their games
            and were only allowed to use GDI+, which is the graphics library
            utilizing only CPU-side functionalities, made by Microsoft to be
            used in WindowsXP. The purpose of the limitations was to see the
            capability of game designers to plan games if only quite constrained
            performance is available. These constraints made the projects much
            more interesting. The designers had to part with many ideas, and the
            programmers were asked to hugely optimize their code to keep the
            games running stably. This was so much enjoyable as well as an
            exceptional experience for me as a programmer.
          </p>
          <p>
            The teams consist of 8-10 people, about 2-3 designers, 3-4
            programmers, and 3 artists. Designers play a part in communicating
            between programmers and artists, devising new features, and managing
            the overall project plan. On the other hand, programmers and artists
            realize the in-game features proposed by the designers and sometimes
            request adjustments in plans. My team’s communication went very
            well. I was the leader of my programming team, and my team quite
            well managed to overcome numerous technical difficulties. The
            designers came up with brilliant ideas. The artists did a good job.
            Everything went so smoothly. As a result, we ended up taking third
            place in the final project assessment.
          </p>
          <p>
            Unfortunately, the assessment was done only by the game itself, not
            looking into the code side of the project. However, the main
            struggle while working on the project was optimization, and my team
            had to come up with and try various optimization ideas. For this
            reason, I can’t help but introduce some marvelous programmable ideas
            that my programming team adapted to the project implementation
            personally via my portfolio website. Some of them sound somewhat
            rudimentary, though, please be patient with us. My team and I had
            not ever made any games before, and this was our very first game
            project. Any small tweaks or tricks in the code mean so much to us,
            so bear with me to the end of this article.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Game Engine Design Core</h1>

          <p>
            As the leader of my programming team, I designed the overall
            structure of the game engine. If we had been given more than 1
            month, I could’ve made it more complicated. However, the time was
            limited, so I had to simplify the structure. Basically, my approach
            to the simplification involved merging small methods into one class
            and abstracting away unnecessarily complicated parts of the engine,
            while leaving classes decoupled and cohesive. There were two
            accomplishments of this. First, because our game primarily revolves
            around a single interaction, the one between the player and bricks,
            I streamlined the engine by focusing exclusively on this core
            interaction system and filtering out less essential components.
            Secondly, in order to further integrate and optimize the rendering
            process flexibly, I created an interface called IRenderable,
            enabling game objects to be inherited from and passed down to the
            rendering system later. As a result, we were able to efficiently
            manage and update the visual elements of our game by tailoring the
            drawing operation of each different game object to its specific
            needs. Plus, these approaches not only enhanced the performance of
            the game but also significantly reduced the development time by
            minimizing and concentrating the overall system.
          </p>

          <p>
            Here is the UML diagram of the engine core architecture.
          </p>

          <Image
            src={razanya_uml}
            alt="razanya_uml"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />

          <p>
            Now, I would like to explain how the Player and Bricks classes, the
            two main objects in our game, are structured. First, the Player
            class is based on the IPlayer interface. I’ll further clarify why we
            needed the IPlayer interface as we proceed. The Player class is
            merely a data container with a bunch of setters and getters. For
            example, the variables, such as health, oxygen level, and attack
            damage, are stored in the Player class. These attributes are then
            processed by various systems within the game engine to handle
            specific aspects of game dynamics, such as oxygen level management
            and player-bricks interaction control. For example,
            OxygenLevelSystem interacts directly with the oxygen attribute to
            manage the player’s ability to survive as they dig deeper into the
            mine. Likewise, the Bricks class, which is named Wall in the game
            engine, also primarily serves as the data container for multiple
            rows of bricks, and diverse systems across the gameplay access and
            manipulate the data in the class for the game dynamics. For example,
            BricksGenerationSystem is associated with Wall and generates new
            rows of bricks following the predefined patterns when the player
            advances in the game, adjusting the difficulty level by varying the
            types and arrangements of bricks. Also, the Wall class includes the
            attributes of each brick, such as the brick’s type and durability,
            that can interact with the player’s actions. For instance, when the
            player strikes a brick, the PlayerBricksInteractionSystem evaluates
            the player’s attack damage and the brick’s durability to determine
            whether the brick will be destroyed or not. If a brick is destroyed,
            the system rewards the player and occasionally triggers a special
            effect based on the brick’s type.
          </p>

          <h2>Data-Oriented Programming</h2>
          <p>
            Throughout the discussion of the Player and Bricks classes, it
            becomes apparent that objects in our game structure typically fall
            into two major categories, a data container and a system. The data
            containers, such as the Player and Wall classes, refer to the data
            models, storing and managing attributes, and the systems govern the
            behaviors or actions of the game objects. This design principle is
            rooted in data-oriented programming and is inspired by, though not
            entirely based on, the Entity-Component-System(ECS) model, which
            promotes the separation of data and behavior to enhance flexibility
            and performance. The Wall class, particularly, shows the
            representative features and strengths of data-oriented programming
            very well.
          </p>
          <p>
            As I mentioned before, the Wall class is itself a big collection of
            data on individual Bricks; notably, different categories of large
            datasets in the Wall class are broken down into separate arrays. For
            one, the visual data of bricks are independently stored in one array
            of Bitmap pointers. By consolidating brick data in this way, we
            ensure data locality, which optimizes memory usage and access
            patterns. Also, this arrangement allows us to efficiently manage the
            brick generation and rendering processes, utilizing the power of
            data-oriented programming to handle large sets of data with high
            performance.
          </p>

          <Image
            src={razanya_bricks_uml}
            alt="razanya_bricks_uml"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />

          <p>
            To be more specific, the use of data-oriented programming
            significantly facilitates the clear separation of data and behavior,
            enhancing the ease of use of systems. This approach enables several
            key advantages in system implementation and maintenance.
          </p>
          <p>
            First, as behaviors are strictly separated from data, systems can
            realize several behaviors using the same underlying data structure
            without any modifications to the data. For example, the Player class
            in the project can interact with different game systems that handle
            specific tasks like oxygen consumption, or damaging bricks. Each of
            these systems accesses the same player data but performs entirely
            separate functions. This isolation of concerns not only simplifies
            code management but also allows for easier updates and debugging.
          </p>
          <p>
            Second, the data-oriented approach allows easier scaling of the size
            of the game as the complexity of the game grows. Since systems
            operate on separate components, increasing the number of
            interactions among game objects typically results in linear scaling
            of systems rather than steep complexity growth of functionalities of
            the game objects themselves. For instance, let’s assume that a boss
            battle system was included in our game. In this case, the existing
            game object classes remain intact, and only the battle system and a
            Boss game object could be included. In other words, this
            architecture of the system enables the extension or addition of new
            systems without disruption of the existing data structure, even if
            new game features or new gameplay mechanics are introduced.
          </p>
          <p>
            Lastly, as aforementioned when discussing the Wall class, by
            enhancing data locality and organizing data following usage
            patterns, this method of structuring data and systems ensures that
            the program can process data more efficiently, For instance, the
            Wall class defines its own Render() function, consumed by
            RenderSystem during the rendering process, in order to optimize the
            process of rendering multiple bricks simultaneously by accessing and
            drawing bricks sprite data stored in one contiguous array of Sprite
            objects. Additionally, since some bricks share the same sprite data,
            consolidating the drawing process into a single location can also
            improve cache coherence. In short, this setup minimizes the cost of
            irregular accesses of memory and maximizes the throughput of data
            processing in systems. It is a crucial improvement for high
            performance where real-time processing is important.
          </p>
          <p>
            This approach of design was the key factor of the performance
            enhancement in our game engine as well as the central strategy to
            speed up the development and debugging procedures. By following this
            design pattern, my team was able to quickly break down the work and
            distribute tasks effectively. As the implementation of each behavior
            consists of a system, my team managed to swiftly sketch the next
            plan and realize requested features in a short term. This modular
            architecture not only facilitated fast adaptations to changing
            requirements but also enhanced the collaborative synergy among
            programmers.
          </p>

          <h2>Renderer & IRenderable</h2>
          <p>
            Continuing to explain the overall structure of the game engine, the
            RenderSystem and IRenderable are indispensably central to
            understanding how rendering operations are effectively and flexibly
            managed in our game. When changing scenes, the RenderSystem cleans
            up existing render data and registers new IRenderable objects to be
            drawn in a certain scene. Next, during the gameplay, the system
            renders them every frame via passing the Graphics instance from GDI+
            to the Render() function of the IRenderables. Then, the actual
            rendering operations are processed directly in the Render()
            functions overridden by the objects inherited from the IRenderable
            interface. This architecture was to tailor the rendering operations
            to meet the specific needs of different objects. The Wall is a
            representative example. Besides that, the Player’s sprites are
            static, which means there is no need for scaling or rotation of the
            visual data of the Player. In this case, the Player’s sprite images
            can be cached through GDI+, further optimizing the drawing process
            by skipping the conversion of images to the specific image format
            easily processable by Windows API. To realize this, we can override
            a Render() function in the Player class and specialize the rendering
            operation to render only cached bitmap data. For another example of
            rendering process customization, the Render() function of the
            SingleSpriteRenderable class is optimized to effectively render one
            static background image. Also, to handle complex layout of UI
            components, the UIComponent class has its own Render() function with
            the distinct order of rendering process. Through this approach of
            managing draw operations, our game engine ensures efficient
            rendering cycles and the flexibility for the customization of
            rendering behaviors to optimize performance and visual quality
            according to the specific needs of each game object.
          </p>
          <Image
            src={razanya_irenderable_uml}
            alt="razanya_irenderable_uml"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />
        </section>

        <section className={style.detail_section}>
          <h1>GridMap Data Structure & Algorithm</h1>
          <p>
            In our game, Razanya33, rapid transition and frequent modification
            of bricks are crucial due to the dynamic nature of the gameplay. As
            players dig deeper, rows of bricks need to be efficiently added and
            removed from the screen to reflect the visual changes of the ground.
            To handle these operations effectively, my team developed a
            specialized data structure called GridDeque, inspired by the
            apparatus of the standard deque, double-ended queue.
          </p>
          <p>
            The primary design requirement for GridDeque was the ability to
            perform efficient push and pop operations across entire rows of
            bricks, mimicking the behavior seen in traditional deques but on a
            two-dimensional grid. Furthermore, it was essential for GridDeque to
            allow direct access to any element, similar to a 2D array, to
            facilitate rapid game state updates and changes.
          </p>
          {/* GridDeque Example Diagrams */}
          <Image
            src={grid_deque_example1}
            alt="grid_deque_example1"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />
          <Image
            src={grid_deque_example2}
            alt="grid_deque_example2"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />
          <Image
            src={grid_deque_example3}
            alt="grid_deque_example3"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />
          <Image
            src={grid_deque_example4}
            alt="grid_deque_example4"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />
          <p>
            To realize this requirement, first, GridDeque organizes data in a
            grid of the fixed numbers of m rows and n columns, which is
            internally implemented as a 1D array, enabling both efficient linear
            data storage and quick access to any row or column. Next, two
            pointers, hd and tl, mark the current head and tail of the queue
            within the array. When PopFront() is called, the hd pointer is moved
            forward to effectively remove the first row, and when PushBack() is
            executed, new rows are added at the tl pointer, then which adjusts
            to the new end of the queue. Thus, the mechanism of push and pop in
            GridDeque achieves O(1) time complexity, as it doesn’t involve
            linear data movement or copy in memory of multiple elements but mere
            memory address calculation. Lastly, the subscribe operator is
            overloaded to allow direct element access like a 2D array. This
            capability not only simplifies the code and debugging steps but also
            ensures that frequent element-wise accesses and updates can be
            handled efficiently.
          </p>
          <h2>Pseudo-code of GridDeque Member Functions</h2>
          <Highlight language="python">
            {`def POP_FRONT():
  # Find the end address of the total array.
  endAddr  = POINTER_TO_ADDRESS(hdPtr + nrows*ncols)

  # Calculate the next memory space
  nextPtr = hdPtr + ncols
  nextAddr = POINTER_TO_ADDRESS(nextPtr)
  
  # If the next memory block is out of range
  IF nextAdd > endAdd:
    # Go to the most front
    nextAdd -= endAdd

  # Update the head pointer
  hdPtr = nextAdd
`}
          </Highlight>
          <Highlight language="python">
            {`def PUSH_BACK(elems):
  # Assign elements to the array
  FOR i = 0 to elems.length:
    tlPtr[i] = elems[i];

  # Find the end address of the total array
  endAddr  = POINTER_TO_ADDRESS(hdPtr + nrows*ncols)

  # Calculate the next memory space
  nextPtr = tlPtr + ncols
  nextAddr = POINTER_TO_ADDRESS(nextPtr)
  
  # If the next memory block is out of range
  IF nextAdd > endAdd:
    # Go to the most front
    nextAdd -= endAdd

  # Update the head pointer
  tlPtr = nextAdd
`}
          </Highlight>
          <Highlight language="python">
            {`def GET(row, col):
  # Get the address of the element
  elemAddr = POINTER_TO_ADDRESS(hdPtr + (col + row*ncols))

  # Find the end address of the total array
  endAddr  = POINTER_TO_ADDRESS(hdPtr + nrows*ncols)

  # If the next memory block is out of range
  if elemAddr > endAdd:
    # Go to the most front
    elemAddr -= endAdd

  return DEREF(ADDRESS_TO_POINTER(elemAddr))
`}
          </Highlight>
        </section>

        <section className={style.detail_section}>
          <h1>Player Decorator</h1>
          <p>
            In Razanya33, before the game starts, players can choose one special
            ability among 7 different kinds of abilities, and each ability
            provides both unique advantages and challenges to the players. This
            feature of the game not only provides a distinct gameplay experience
            but also enriches the player’s strategic choices, thereby
            significantly increasing the replay value and depth of the game by
            allowing players to customize their gameplay challenges according to
            their preferences and play styles.
          </p>
          <p>Here is the list of special effects.</p>
          <ul>
            <li>
              Anaerobic: Reduces oxygen gain but increases score from certain
              blocks.
            </li>
            <li>Naughty: Flips control keys and standardizes combo counts.</li>
            <li>Wimp: Slightly reduces attack damage.</li>
            <li>Pummeler: Extends the duration of combos.</li>
            <li>
              SugarGirl: Prolongs the effect duration of specific power-ups.
            </li>
            <li>
              Tenacious Dwarf: Decreases maximum oxygen but increases recovery
              rate when digging.
            </li>
            <li>
              GoldSeeker: Enhances rewards from gold bricks but reduces standard
              oxygen recovery."
            </li>
          </ul>

          <p>
            To implement this feature, our programming team needed to introduce
            PlayerDecorator. PlayerDecorator, as self-explanatory, utilizes the
            standard decorator design pattern to allow dynamic modification of
            the player’s actions and states during runtime. The decorator design
            pattern is particularly useful in games for adding new behaviors or
            states to objects without altering the code of the existing classes.
            For example, the Anaerobic decorator in our game modifies the amount
            of oxygen that players can gain from specific blocks, but increases
            the score multiplier for those. This function can be realized by
            overriding the GetOxygenFromOxyBlock() and GetScoreFromOxyBlock() of
            the Player class in the Anaerobic decorator. In this regard, each
            decorator can modify the player’s behaviors whereas the code in the
            Player class remains intact.
          </p>
          <Image
            src={razanya_iplayer_uml}
            alt="razanya_iplayer_uml"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />
          <p>
            To be more specific, in the code, both Player class and the
            PlayerDecorator class inherit from the IPlayer interface, ensuring
            that any decorators based on the PlayerDecorator share the same
            overridden methods as in the Player class. The PlayerDecorator class
            acts as a base class for all decorators, and when a decorator is
            created, a reference to an IPlayer object that it decorates should
            be passed as a pointer. Then, the PlayerDecorator calls the specific
            functions via the pointer of the decorated IPlayer object. Such
            architecture allows for easy stacking of decorators on the Player
            object and altering the player’s behaviors in certain ways. Also,
            this approach follows the Open/Closed principle, one of the SOLID
            rules in OOP, which means to open for extension but closed for
            modification. Therefore, even if we find some extension of the game
            necessary later in the future, adding or modifying the special
            abilities of the Player can be done easily, as such operations
            involve only changes in small snippets of the code or attaching more
            decorator classes.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Button & Event Listener</h1>
          <p>
            In Razanya33, the Button class extends the UIComponent and serves as
            the interactive elements on the user interface, allowing players to
            execute variant actions such as starting the game, or navigating
            menus.The Button class is equipped with a series of event states
            such as MouseEnter, MouseLeave, MouseDown, and MouseUp. It
            incorporates an unordered map to hold event handlers, enabling the
            button to execute specific functions when interacted with. This
            modular design allows for easy customization of button behaviors on
            different screens within the game. Then, the HitTest method checks
            if the mouse coordinates fall within the button’s boundaries. When a
            mouse event occurs, the corresponding handler, like OnMouseEnter or
            OnMouseUp, is called, which then checks for registered events in the
            eventHandlers map and executes the bound function if available.
          </p>
          <p>
            To manage multiple buttons efficiently, especially in a game where
            several UI elements might be active simultaneously, the
            ButtonEventHandler class oversees all button interactions in a
            scene. It holds references to all buttons and processes mouse events
            by iterating through each button, determining if an action should be
            triggered based on the mouse’s position and state. For example, in
            the EntryScene, buttons are initialized with specific roles, such as
            starting a new game, or showing the credit scene. Each button is
            linked to its respective function via the AddEventListener method.
            Consider the button starting the new game when clicked. The start
            button might bind an event listener functor that contains the
            operations to go to the gameplay scene with an event, "mouseClick".
            This implementation of button event handling logic streamlines the
            development process by enabling developers to easily customize the
            event listeners bound to buttons and flexibly implement intuitive
            navigation and control systems within the scenes.
          </p>

          {/* TODO: Button Pseudo-code */}
          <Highlight language="python">
            {`def ADD_EVENT_LISTENER(event, callback):
  eventHandler[event] = callback;
`}
          </Highlight>

          <Highlight language="python">
            {`def ON_MOUSE_ENTER():
  if eventHandler.find["mouseEnter"]:
    execute(eventHander["mouseEnter"])
  isHover = true
`}
          </Highlight>

          <Highlight language="python">
            {`def ON_MOUSE_LEAVE():
  if eventHandler.find["mouseLeave"]:
    execute(eventHander["mouseLeave"])
  isHover = false
  isPressed = false
`}
          </Highlight>

          <Highlight language="python">
            {`def ON_MOUSE_DOWN():
  isPressed = true
  if eventHandler.find["mouseDown"]:
    execute(eventHander["mouseDown"])
`}
          </Highlight>

          <Highlight language="python">
            {`def ON_MOUSE_UP():
  if isPressed:
    if eventHandler.find["mouseClick"]:
      execute(eventHandler["mouseClick"])

    # Reset isPressed
    isPressed = false

  else:
    ON_MOUSE_ENTER()
`}
          </Highlight>

          <Highlight language="python">
            {`# AABB hit test
def HIT_TEST(button, mouseX, mouseY):
  return mouseX >= button.x && 
    mouseX <= (button.x + button.width) &&
    mouseY >= button.y && 
    mouseY <= (button.y + button.height)
`}
          </Highlight>

          <Highlight language="python">
            {`def HANDLE_MOUSE_EVENT():
  for button in buttons:
    if HIT_TEST(button, mouseX, mouseY) is true:
      if mouseDown:
        button.ON_MOUSE_DOWN()
      elif mouseUp:
        button.ON_MOUSE_UP()
    elif button.isHover:
      button.ON_MOUSE_LEAVE()
`}
          </Highlight>
        </section>
      </>
    ),
  },

  alcove: {
    title: "PROJECT: Alcove",
    thumbnail: <img src={null} alt="In Progress" />,
    github: null,
    description:
      "An game graphics engine powered by Vulcan with the state-of-the-art rendering technologies",
    skills: ["Vulcan", "C++"],
    detail: (
      <>
        <section className={style.detail_section}>
          <p>Still In Progress...</p>
        </section>
      </>
    ),
  },

  unreal_projects: {
    title: "Unreal Projects",
    thumbnail: <img src={null} alt="No Image" />,
    github: null,
    description: "Unreal Projects",
    skills: ["Unreal Engine", "C++"],
    detail: (
      <>
        <section className={style.detail_section}>
          <p>Need update.</p>
        </section>
      </>
    ),
  },

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
        <section className={style.detail_section}>
          <ul>
            <li>
              Go to the Source Code&nbsp;
              <a href="https://github.com/goheungchoi/personal-finance-tracker/tree/develop">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>Overview</h1>
        </section>

        <section className={style.detail_section}>
          <h1>Showcase</h1>
        </section>

        <section className={style.detail_section}>
          <h1>Agile and Scrum</h1>
        </section>
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
        <section className={style.detail_section}>
          <ul>
            <li>
              Go to the Source Code&nbsp;
              <a href="https://github.com/goheungchoi/graph-game">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>Overview</h1>
          <p>
            This project is inspired by the Blood Web in Dead By Daylight. The
            Blood Web is a unique shopping system in Dead By Daylight. A player
            purchases items and perks on the web. After a certain amount of
            moves, the Entity, the mighty evil being who rules the DBD world,
            awakens and starts interfering player’s moves.
          </p>
          <p>
            The detailed rules about the Blood Web are well explained in the DBD
            fandom wiki
            <a href="https://deadbydaylight.fandom.com/wiki/Bloodweb">
              <FontAwesomeIcon icon={faLink} />
            </a>
            .
          </p>
          <p>
            In this project, the overarching concepts are similar to those of
            the Blood Web. The web looks similar, and the rules remain the same.
            The key difference lies in that some behavioral patterns of the
            Entity are more specific in this project. Its actions are more
            tailored towards a singular goal, to maximize the player’s
            expenditure. DBD players often want to save blood points as many as
            possible when playing blood web to level up without spending too
            many blood points. One of the strategies to save blood points is to
            herd the Enity to engulf a chunk of nodes at a single time. The
            Entity eats up the entire tree of nodes if the nodes are no longer
            accessible by the player. In this regard, the Entity in this project
            will try to avoid consuming too many nodes at the same time at all
            costs.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Algorithm Explained</h1>
          <p>
            The implementation of the smarter Entity can vary depending on
            specific requirements. For example, the minimax algorithm would
            stand out as a preferable choice for formulating a highly
            intelligent system capable of reasoning and finding optimal
            solutions in any case. However, this way of designing AI is
            computationally intensive and difficult to use in real-time
            applications. On the other hand, we could consider leveraging a
            greedy algorithm for the Entity’s decision-making, such as choosing
            a node that has the lowest possible points, yet this algorithm could
            lead to completely inaccurate decisions and not serve as we intend.
            Therefore, there is a need to build an algorithm that can run fast
            and provide decent accuracy.
          </p>
          <p>
            From this perspective, I adopted several custom rules and
            constraints in my AI algorithm. First, starting nodes will be chosen
            randomly from the outermost available circle. Next, the Entity’s
            choices will exhibit some greedy features, but the algorithm will
            consider more reasonable decisions in this case. For details, the
            Entity will look for the longest path with fewer bottleneck nodes.
            Though this algorithm, however, cannot predict the opponent’s
            movements, it shows better stability and optimality than mere greedy
            algorithms. I will prove this below. Lastly, the Entity won’t
            consider the rarities of nodes. In DBD, each node possesses a
            distinct rarity, demanding varying amounts of blood points, ranging
            from the lowest at 2000 to the highest at 5000. Therefore, in actual
            cases, taking one bottleneck node may require fewer blood points
            than going to a path with some expensive nodes. However, such cases
            barely occur, and generally, consuming many nodes at once is
            considered uneconomical.
          </p>
          <h2>Proof</h2>
          <p>
            Considering the proof of the optimality of this algorithm, I will
            assume that the graph is huge enough so that the player and the
            Entity don’t interfere with each other. Like in the real Blood Web,
            the player can take one node at each time. Also, for simplicity, the
            rarities of the nodes on the graph are uniform. As previously
            mentioned, rarity often is not a significant factor. The starting
            nodes are always chosen randomly, but for the sake of simplicity, we
            are going to assume that the random number generator is always
            initialized with the same seed every new game and generates the same
            sequence of random numbers.
          </p>
          <p>
            The ultimate goal of the Entity is to force the player to spend as
            many blood points as possible.
          </p>
          <p>
            Let's assume there are {<MathComponent display={false} tex="n" />}{" "}
            nodes.<br></br>
            And, we have a path {
              <MathComponent display={false} tex="P_1" />
            }{" "}
            with the least number of closed nodes. The path{" "}
            {<MathComponent display={false} tex="P_1" />} obtains{" "}
            {<MathComponent display={false} tex="c_1" />} closed nodes in the
            total of {<MathComponent display={false} tex="t_1" />} turns.
            <br></br>
            Let's say the path {<MathComponent display={false} tex="P_1" />} is
            not optimal.<br></br>
            Then, there exists an optimal path,{" "}
            {<MathComponent display={false} tex="P_2" />}. <br></br>
            The path {<MathComponent display={false} tex="P_2" />} obtains{" "}
            {<MathComponent display={false} tex="c_2" />} closed nodes in the
            total of {<MathComponent display={false} tex="t_2" />}. <br></br>
            As we assumed that the path{" "}
            {<MathComponent display={false} tex="P_1" />} has the least closed
            nodes, {<MathComponent display={false} tex="c_1 < c_2" />}.{" "}
            <br></br>
            <br></br>
            <strong>Case 1</strong> The number of player's nodes is{" "}
            {<MathComponent display={false} tex="t_1" />}.<br></br>
            In this case,{" "}
            {<MathComponent tex="n = (t_1 + c_1) + t_1 = 2 t_1 + c_1" />}
            Therefore, {<MathComponent tex="t_1 = \frac{n - c_1}{2}" />},
            meaning that the player takes{" "}
            {<MathComponent display={false} tex="\frac{n - c_1}{2}" />} nodes.
            <br></br>
            <br></br>
            In order to compare the number of player's nodes when the path{" "}
            {<MathComponent display={false} tex="P_2" />}, we need to consider
            two different cases.<br></br>
            <strong>First</strong>, when the number of player's nodes is{" "}
            {<MathComponent display={false} tex="t_2" />}.<br></br>
            As in the previous case,{" "}
            {<MathComponent tex="n = (t_2 + c_2) + t_2 = 2 t_2 + c_2" />}
            Therefore, {<MathComponent tex="t_2 = \frac{n - c_2}{2}" />}
            <strong>Second</strong>, when the number of player's nodes is one
            more than {<MathComponent display={false} tex="t_2" />}, thereby,{" "}
            {<MathComponent display={false} tex="t_2 + 1" />}.<br></br>
            In this case,{" "}
            {
              <MathComponent tex="n = (t_2 + c_2) + (t_2 + 1) = 2 t_2 + c_2 + 1" />
            }
            Therefore, {<MathComponent tex="t_2 = \frac{n - c_2 - 1}{2}" />}
            Now, let's compare the number of player's nodes taken each case. For
            the first case, as{" "}
            {<MathComponent display={false} tex="c_1 < c_2" />},
            {
              <MathComponent tex="t_1 = \frac{n - c_1}{2} > t_2 = \frac{n - c_2}{2}" />
            }
            For the second case,
            {
              <MathComponent tex="t_1 = \frac{n - c_1}{2} > t_2 = \frac{n - c_2 - 1}{2}" />
            }
            In both cases, the player takes more nodes when the path{" "}
            {<MathComponent display={false} tex="P_1" />} is taken by the
            Entity, making the player spend more blood points.<br></br>
            However, as we assume that the path{" "}
            {<MathComponent display={false} tex="P_2" />} should be optimal than
            any other paths, the conclusion conflict with the assumption.
            <br></br>
            Thus, it is a contradiction.
            <br></br>
            <strong>Case 2</strong> The number of player's nodes is{" "}
            {<MathComponent display={false} tex="t_1 + 1" />}.<br></br>
            Likewise, we need to compare two different cases of the path{" "}
            {<MathComponent display={false} tex="P_2" />}.<br></br>
            For the first case, as{" "}
            {<MathComponent display={false} tex="c_1 < c_2" />},
            {
              <MathComponent tex="t_1 = \frac{n - c_1 - 1}{2} \ge t_2 = \frac{n - c_2}{2}" />
            }
            For the second case,
            {
              <MathComponent tex="t_1 = \frac{n - c_1 - 1}{2} > t_2 = \frac{n - c_2 - 1}{2}" />
            }
            Thus, in the <strong>Case 2</strong>, the path{" "}
            {<MathComponent display={false} tex="P_1" />} is also optimal than
            the path {<MathComponent display={false} tex="P_2" />}.<br></br>
            This is also contradiction.<br></br>
            <br></br>
            As both <strong>Case 1</strong> and <strong>Case 2</strong> are
            contradictions,{" "}
            <strong>
              the path {<MathComponent display={false} tex="P_1" />} is optimal
            </strong>
            .
          </p>
          <h2>Implementation</h2>
          <p>
            Now, let’s take a look at the pseudo-code of the actual algorithm.
          </p>
          <p>
            The `ACTION` procedure is where the Entity plans the next move and
            consumes a node on the given graph. As mentioned, the procedure
            consists of two distinct steps; the planning step and the performing
            step. In the planning step, the Entity assesses the current state of
            the graph and builds an optimal path. Unfortunately, this AI is
            incapable of memorizing the previous states of the environment, so
            it will calculate paths every single turn. Such a limitation may be
            improved and optimized in future projects. In the performing step,
            the Entity consumes the next node on the path and closed nodes if
            exist.
          </p>
          <Highlight>
            {`PROCEDURE ACTION(g, curr):
  -- 1. Plan the next move
  node := NULL
  node <- SEARCH_NEXT_CONSUMPTION(curr)
  IF node == NULL
    node <- SEARCH_NEXT_STARTING_NODE(g)
  IF node == NULL
    return FAIL


  -- 2. Execute the plan and consume the next node
  CONSUME_NODE(node)
  CONSUME_CLOSED_PATHS(node)
  return SUCCESS`}
          </Highlight>
          <p>
            The `SEARCH_NEXT_CONSUMPTION` procedure searches through the graph
            and finds the next optimal path with the least number of closed
            nodes. The procedure facilitates a helper procedure, `TRAVERSAL`, to
            determine which neighboring node yields the optimal result.
          </p>
          <Highlight language="elm">
            {`-- Find the longest path with the least number of closed nodes.
-- It minimizes the number of nodes taken in a single turn.
-- Minimize the number of nodes to be closed
-- Maximize the number of nodes to be traveled
PROCEDURE SEARCH_NEXT_CONSUMPTION(curr):
  -- If curr is null, it means Entity is not in the web.
  -- Go search the next starting node.
  IF curr is NULL return NULL


  res := NULL
  totalMax := -INF
  totalNumClosedNodes := INF


  FOR n in curr.neighbors
    IF n.color is NOT TAKEN
      max := 0
      count := 0
      numClosedNodes := 0


      isLocallyClosed := TRAVERSAL(n, max, count, numClosedNodes)


      IF NOT isLocallyClosed
        IF numClosedNodes < totalNumClosedNodes
          res <- n
          totalMax <- max
          totalNumClosedNodes <- numClosedNodes
        ELSE IF numClosedNodes == totalNumClosedNodes
          IF max > totalMax
            res <- n
            totalMax <- max
            totalNumClosedNodes <- numClosedNodes
  RETURN res`}
          </Highlight>
          <p>
            The `SEARCH_NEXT_STARTING_NODE` procedure returns a random starting
            node in cases where the Entity reaches the end of its current path.
            The procedure searches from the outermost circle until it finds any
            untaken node. If there are no remaining nodes, it returns NULL,
            indicating that the game is over.
          </p>
          <Highlight>
            {`PROCEDURE SEARCH_NEXT_STARTING_NODE(g):
  FOR i in range(3, 1, -1)
    nodes = GET_UNVISITED_NODES_ON_LAYER(g, i)
    IF unvisitedNodes is EMPTY
      CONTINUE
   
    res := GET_RANDOM_NODE_FROM_(nodes)


    -- Check if this is the first turn of Entity
    IF origin is NULL AND i is 3
      -- Generate Entity and connect it with the res
      GENERATE_ENTITY(g, res)


    RETURN res
  RETURN NULL;`}
          </Highlight>
          <p>
            The `TRAVERSAL` procedure is a helper procedure for the
            `SEARCH_NEXT_CONSUMPTION` procedure. It traverses the graph
            recursively and returns the possible minimum closed nodes and the
            number of nodes to be traversed. For details, the procedure returns
            `TRUE` if the current path is closed and returns `FALSE` if the path
            is opened. {/* TODO: Add a figure */}
          </p>
          <Highlight>
            {`PROCEDURE TRAVERSAL(curr, max, count, numClosedNodes):
  tempColor := curr.color


  curr.color <- BLACK
  count <- count + 1


  -- Goes to adjacent nodes which are not visited or taken
  -- Check if there is at least one open child path
  -- If it is, this path is not closed
  isDeadend := TRUE
  isClosed := TRUE


  FOR n in curr.neighbors
    IF n.color is NOT TAKEN
      isLocallyClosed := TRAVERSAL(n, max, count, numClosedNodes)
      isClosed <- isClosed AND isLocallyClosed


      isDeadend <- FALSE


    -- If there is an adjacent node colored red, taken by the player
    -- This path is not closed yet
    IF n.color is RED
      isClosed <- FALSE


  -- If every local path is closed, this node is closed
  IF isClosed
    numClosedNodes <- numClosedNodes + 1
  ELSE  -- This node is opened
    IF isDeadend  -- This node is at the end of a path
      IF max < count  -- Find the max count
        max <- count


  -- Reset properties when terminate
  curr.color <- tempColor
  count <- count - 1


  RETURN isClosed`}
          </Highlight>
        </section>

        <section className={style.detail_section}>
          <h1>MVC Design Pattern</h1>
          <p>
            The Model-View-Controller (MVC) design pattern is commonly used to
            implement the user interface, control logic, and data structure of
            an application. Working on a real industry project entails frequent
            debugging steps and seamless integration of new features. The famous
            low-coupling and high-cohesion guideline eases such processes by
            enhancing the readability, maintainability, and testability of a
            program. The MVC pattern helps achieve these goals by separating the
            application into three interconnected components. First, the Model
            involves the internal functionalities of an application. For one,
            the Model may represent the data structure, manipulate the server
            database, and execute corresponding business logic. The View
            interacts with user inputs and visualizes data or responses received
            from the Model. Lastly, the Controller contributes to orchestrating
            the interaction between the View and Model. It listens to the inputs
            received from the View and converts them into commands that the
            Controller can process. Once these commands are successfully
            executed, the Controller sends the corresponding results back to the
            View.
          </p>
          <p>
            This separation not only makes the application more organized but
            also simplifies the modification or extension of each component
            without affecting the others. For example, changes in the user
            interface do not impact the data handling logic, and vice versa.
            Additionally, the MVC pattern enhances application scalability by
            enabling independent extensions of different facets. For instance,
            to support a broad range of devices or operating systems, a web
            application might require multiple views, which can be created
            without altering the existing server logic. Moreover, in a
            collaborative development environment, this separation allows for
            teams to work simultaneously on different components with minimal
            overlap or conflict. This approach improves efficiency and reduces
            the risk of errors, as well as speeds up the development process and
            facilitates future maintenance of the application.
          </p>
          <p>
            In this project, the view aspect is designed as a web application,
            while the remaining components are developed using C++. The view
            visualizes the structure of the graph and receives inputs from a
            user. The user inputs are packed into a JSON format to send to the
            server. The server converts the JSON packet into processible data
            types and runs the appropriate program instructions. Once the
            scheduled tasks have been finished, the server sends back the
            updated information as a response to the view, and the view adjusts
            the UI in accordance with the returned data. To sum up, the
            controller helps communicate between the view and the model. The
            model runs some complex logic under the hood, and the view simply
            enables users to interact with the program.
          </p>
          <p>The overall structure of this project is as follows.</p>
          <Image
            src={graph_game_uml}
            alt="graph_game_uml"
            style={{
              width: "100%",
            }}
            bstyle={{
              width: "95%",
            }}
          />
        </section>

        <section className={style.detail_section}>
          <h1>WebSocket</h1>
          <p>
            WebSocket is a communication protocol that opens a bidirectional
            communication channel, enabling real-time interaction between client
            and server. Whereas, via HTTP, a server can send responses only when
            requests are sent by users, WebSocket allows a server to dynamically
            transfer data to a client. Also, after a TCP handshake, WebSocket
            persists in the connection, reducing network latency and unnecessary
            communication overhead. For these reasons, WebSocket is widely used
            in applications like online gaming, live streaming services, and
            chat applications where two-way communication between client and
            server is crucial.
          </p>
          <p>
            First thing first, this project actually didn’t need the WebSocket
            connect. It is a single-player game, and the AI responds only when
            the player takes some action. However, I wanted to try something new
            other than the conventional HTTP connection.
          </p>
          <p>
            In this project, the Boost library has been used for the
            establishment of network connections. Boost provides essential
            functions for C++ network programming, such as JSON, HTTP, and
            asynchronous operations. First, in the main function, the server
            setup begins with the instantiation of boost::asio::io_context, a
            core class in ‘Boost.Asio’ library. This class is used to manage I/O
            services, such as socket operations. It's responsible for
            dispatching handlers for asynchronous operations. Next, we create a
            tcp::acceptor object, which is bound to a specific IP address and
            port number. This acceptor listens for incoming TCP connections at
            the specified address and port. When a client attempts to connect,
            the acceptor object accepts the connection, creating a tcp::socket
            instance for this particular connection. This socket is then used
            for further communication with the connected client. The program
            then enters a while loop, continuously listening for new
            connections. For each incoming connection, a new thread is launched
            to handle it. This multi-threading approach ensures that the server
            can handle multiple clients simultaneously without blocking the main
            thread.
          </p>
          <p>
            In the `do_session()` function, the server uses Boost
            websocket::stream to wrap around a tcp::socket. The `ws.accept()`
            call upgrades the TCP connection to a WebSocket connection. This
            upgrade is essential for transitioning from the simple
            request-response model of HTTP to the persistent, full-duplex
            communication channel of WebSocket. Once the WebSocket connection is
            established, the server enters another loop, constantly waiting for
            messages from the client. When a message is received, it's read into
            a buffer, converted to a string, and then parsed as a JSON object.
            This JSON object contains commands and data sent by the client,
            which are then processed by the Controller. After processing the
            command, the Controller returns the result to the `do_session()`
            function, where it's converted into a JSON string and sent back to
            the client over the WebSocket connection. This completes the cycle
            of receiving a command, processing it, and sending back a response.
          </p>
          <p>
            Using WebSocket in this project, despite being a single-player game,
            showcases an exploration of advanced network programming techniques
            in C++. It demonstrates how real-time communication can be
            effectively implemented, potentially paving the way for future
            enhancements like multiplayer features or live data updates.
          </p>
        </section>
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
    github: "https://github.com/goheungchoi/cloth-simulation",
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
        <section className={style.detail_section}>
          <ul>
            <li>
              Go to the Source Code&nbsp;
              <a href="https://github.com/goheungchoi/cloth-simulation">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>The Mass-Spring Cloth Model</h1>
          <p>
            The mass-spring model is one of the physics-based cloth simulation
            models rigorously studied for decades due to its computational
            effectiveness and lifelike outputs. The fundamental concept of the
            mass-spring model involves forming a flexibly deformable piece of
            cloth using the elasticity of a mesh of springs. Imagine a grid made
            out of springs connected to each other with masses at the
            intersections of spring segments. Unlike a cloth consisting of rigid
            strings and masses, this garment can bend and flutter as the springs
            can change their lengths in response to forces, such as gravity and
            internal tensions, exerted onto them, in accordance with Hooke’s
            law. In this regard, the mass-spring model can appropriately exhibit
            the quite realistic movement and natural look of various types of
            clothes, such as flags and tablecloths.
          </p>
          <p>
            However, this model has somewhat critical flaws inherited from the
            algorithm itself that remain unable to be unsolved even today,
            leading researchers to move on to more advanced state-of-the-art
            approaches to cloth simulation, such as position-based dynamics or
            finite element method. First, the use of springs may not suffice for
            simulating the behaviors of complex materials due to their
            behavioral simplicity. The elasticity of the springs often makes
            clothes represented by the mass-spring model look bouncy and oily,
            and this feature is not desirable for a more precise and realistic
            representation of the physical properties of cloth. Also, robust
            collision detection, which is one of the common challenges in cloth
            simulation, is quite difficult to realize in the mass-spring model
            compared to other methods. On the other hand, modern cloth models,
            such as the position-based dynamics model, for example, are
            well-suited for handling exhaustive constraints and collisions
            without high computational load. In addition to this, the
            mass-spring model can be numerically unstable on occasion. For one,
            as mentioned by Provot in his paper(link:
            <a href="https://www.cs.rpi.edu/~cutler/classes/advancedgraphics/S14/papers/provot_cloth_simulation_96.pdf">
              <FontAwesomeIcon icon={faLink} />
            </a>
            ), the numerical resolution can diverge if the force, in particular
            for the internal restoring force, exerted on springs is too strong.
            This problem is rooted in the use of the explicit method and
            commonly occurs when implementing force-based ordinary differential
            equations in a discrete numerical system. The explicit method
            denotes the system where the next state is defined explicitly in
            terms of known current and previous variables; for example, the
            explicit Euler method determines the next position by adding up the
            current position and the current velocity. However, if the solution
            of the first-order differential equation of Euler’s equation surges
            up rapidly, it is likely to overshoot the next position than where
            it actually should be. Consequently, simulating a stiffer cloth
            necessitates impractically small time steps to avert the equation
            from becoming volatile, and this numerical instability makes the
            model unusable for real-time applications. This issue can be
            addressed to some extent by using the internal Euler method, but the
            implementation can become more challenging. For these reasons, the
            mass-spring cloth model is considered obsolete, and nowadays, people
            have shifted toward up-to-date solutions that fit modern
            technological requirements.
          </p>
          <p>
            Despite these drawbacks, the mass-spring cloth model is still
            noteworthy for its remarkable approach to one of the long-standing
            demanding problems in the field of computer graphics. And, the
            foundational principles of the mass-spring model provided the
            theoretical cornerstone of modern clothes simulation techniques. For
            example, some particle models still adopt the physical framework of
            the mass-spring model but directly interact with the masses instead
            of using springs. Meanwhile, its conceptual simplicity and
            implementation ease of using springs to represent the flexibility of
            cloth make it an excellent stepping stone for delving into the field
            of physics-based simulation. Also, a deeper understanding of the
            model can give a brighter insight into the common challenges in
            realistic simulation and the historical context of the development
            of physics-based cloth models, as its limitations and strengths form
            the basis of the advent of more sophisticated methods. From this
            point of view, the mass-spring model can serve as a crucial tool and
            foundation upon which advanced simulation techniques have been
            developed.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Deformation Constraints</h1>
          <p>
            The concept of the deformation constraints in the mass-spring model
            was first introduced by Xavior Provot in his paper, “Deformation
            Constraints in a Mass-Spring Model to Describe Rigid Cloth
            Behavior.” First of all, Provot constructed the cloth mesh with
            three different types of springs. The springs linking the masses
            right next to each other are called “structural springs.” The
            springs linking masses diagonally are called “shear springs.” And,
            the springs linking masses one next to the other are called “flexion
            springs.” Also, he defined the deformation rate as the extended
            length divided by the original length. Therefore, the greater the
            deformation rate is, the more the cloth is stretched. In conclusion,
            the deformation constraint means a mechanism that restricts springs
            from being far-stretched over a certain deformation rate. For
            instance, let’s say the original length of a spring is 10cm, and
            it’s extended to 12cm. Then, the deformation rate of this spring is
            0.2. Furthermore, if the deformation constraint with a critical
            deformation rate of 10% is applied to this case, the length of the
            spring will be shrunk down to 11cm. The operation to do this magic
            under the hood will be explained in the next section.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Dynamic Inverse Procedures</h1>
          <p>
            The dynamic inverse procedure is the operation where the adjustment
            of lengths takes place. If the deformation rate of a spring is
            greater than the critical rate, the length of the spring will be
            corrected, ensuring that the deformation rate is always capped under
            the limit. There are a few assumptions about the dynamic inverse
            constraints in this project. First, the inverse procedure only
            applies to the “structural springs” and “shear springs.” Also, it
            corrects only the lengths and assumes that the directions of the
            springs are reasonable. Lastly, the sequence in which the springs
            are corrected will be disregarded. However, Provot mentioned that
            the order of the adjustment is not important only in cases where
            “constraints are locally distributed,” thus, further research would
            be necessary regarding the last assumption.
          </p>
          <p>
            Let’s take a closer look at how it actually works. First, we will
            assume that there are two masses linked by one spring, and the upper
            bound of the length is 5. In the current step,{" "}
            {<MathComponent display={false} tex={`t`} />}, the masses, are
            positioned at {<MathComponent display={false} tex="(1, 0)" />} and{" "}
            {<MathComponent display={false} tex="(6, 1)" />} respectively,
            therefore, the length of the spring is exactly 5. However, in the
            next step, {<MathComponent display={false} tex="t + \Delta t" />},
            the velocities of the masses were{" "}
            {<MathComponent display={false} tex="\langle -1, 6 \rangle" />} and{" "}
            {<MathComponent display={false} tex="\langle 1, 7 \rangle" />}, so
            they were placed at the points of{" "}
            {<MathComponent display={false} tex="(0, 6)" />} and{" "}
            {<MathComponent display={false} tex="(7, 7)" />}, leading to a
            distance exceeding the upper bound. In this case, like the
            abovementioned, we will assume that the direction of the spring is
            correct, meaning that only the position of each end of the spring
            will be modified without a change in the position of the spring
            itself. When {<MathComponent display={false} tex="t + \Delta t" />},
            the length of the spring is{" "}
            {<MathComponent display={false} tex="5 \sqrt{2}" />}. Thus, we are
            going to pull each end of the spring as much as{" "}
            {
              <MathComponent
                display={false}
                tex="( \sqrt{2} - 1) / 2 \sqrt{2}"
              />
            }{" "}
            toward the center of the spring. As a result, the new position of
            the masses will be approximately{" "}
            {<MathComponent display={false} tex="(1.025, 6.146)" />} and{" "}
            {<MathComponent display={false} tex="(5.975, 6.854)" />}{" "}
            respectively.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Parallelization</h1>
          <p>
            One advantage of the mass-spring model is that the algorithm is
            relatively easy to parallelize. With that being said, the simulation
            can achieve a noticeable speed-up of the runtime by fully leveraging
            the power of the concurrency. Moreover, the decrease in the
            execution time is of advantage to faster simulations with shorter
            delta time intervals, enabling the representation of stiffer
            clothes’ behaviors.
          </p>
          <p>
            The parallelization is possible thanks to the inherent independence
            of calculations for each mass point and spring in the cloth. The
            cloth in the mass-spring model is represented as a 2D grid of points
            connected by springs. Each point and spring can be treated as an
            independent computational task. For example, calculating the force
            on a point due to the tension of its connected springs can be done
            independently by measuring the distances from the point to the
            neighboring points and applying Hooke’s law. What’s more, as the
            dynamic constraints will be implemented locally, it will not
            compromise the performance of the parallelized algorithm.
          </p>
          <p>
            Hence, the pseudo-code of the parallel mass-spring algorithm will
            appear as follows.
          </p>
          <Highlight>
            {`Main()
 	Execute UpdateCurrentPositions For each position
 	Execute ApplyDynamicConstraints For each position
 	Execute UpdateOldPosition For each position

UpdateCurrentPosition(id, dt, extAcc, mass, oldPos, oldVel, newPos, newVel):
	netForce = 0
 	For n in neighbors[id]:
 		l := dist(oldPos[id], oldPos[n])
                e := (oldPos[n] - oldPos[id]) / l
 		v := dot(e, oldVel[n]) - dot(e, oldVel[id])
 		f := -ks(l0 - l) - kd*v
 		netForce += f*e
	acc = netForce / mass
 	newVel[id] = oldVel[id] + (acc + extAcc)*dt
 	newPos[id] = oldPos[id] + newVel[id]*dt 

DynamicInverse(p1, p2):
 	l := dist(p1, p2)
 	deformRate := (l0 - l)/l0
        a := abs(deformRate) - critRate
 	If a > 0
 		e := (p2 - p1)
 		diff := deformRate > 0 ? -a : a   // toward or away from p2
 		Return e * diff / 2	
        Else 	
                Return 0

ApplyDynamicConstraints(id, dt, oldPos, newPos, newVel, finalPos, finalVel):
	totalDelta := 0
 	For s in structuralSpringNeighbors[id]
 		totalDelta += DynamicInverse(newPos[id], newPos[s])
 	For s in shearStringNeighbors[id]
 		totalDelta += DynamicInverse(newPos[id], newPos[s]) 
	finalPos[id] = newPos[id] + totalDelta 
	finalVel[id] = (finalPos[id] - oldPos[id]) / dt

UpdateOldPosition(id, oldPos, oldVel, finalPos, finalVel):
	oldVel[id] ← finalVel[id]
 	oldPos[id] ← finalPos[id] `}
          </Highlight>
          <p>
            There are a few things to note in the pseudo-code. First, in order
            to prevent memory deadlocks and false sharing in parallel computing,
            three separate memory blocks are created for storing the updated
            states of positions and velocities at each step. This enhances data
            independence across threads and minimizes disruptions during data
            processing. Next, velocities must be recalculated after being
            adjusted by dynamic constraints. The fixed velocities can be
            obtained by dividing the vector from the previous positions to the
            corrected new positions by delta time. Lastly, this algorithm lacks
            the accuracy required for real-life applications due to its poor
            stability and realism. For this reason, I have facilitated some
            advanced techniques in this project for better performance and
            better accuracy.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>Implementation</h1>
          <p>
            Regarding the implementation, the project is written in C++,
            especially in C++11. I leveraged OpenGL for a graphical
            representation and OpenCL for the parallelization part of the
            algorithm. Also, I applied some supplemental features in addition to
            Provot’s mass-spring model for a more realistic and seamless
            simulation. The additional features will be clearly unraveled in the
            following sections, so first, I will crack down on the overall
            structure of the program in detail.
          </p>
          <h2>OpenGL structure</h2>
          <p>
            For the most part, the project follows the object-oriented
            programming paradigm except for the OpenGL and OpenCL integrations;
            OpenGL and OpenCL are developed in C, and their API functions are
            pretty much like switches turning on and off their state machine.
            The <code>TriMesh</code> class represents the drawable objects with
            multiple triangle meshes. It utilizes the RAII(Resource Acquisition
            Is Initialization) technique in C++. The creation of a{" "}
            <code>TriMesh</code> object loads an OBJ file to store properties of
            a 3D model in memory, and the destruction closes the file and frees
            up memory properly. RAII reduces the pain of tracking down all the
            places where memory allocations take place to check memory leaks, as
            all memory management steps in RAII follow the lifecycle of objects.
            In addition to this, the class itself directly manages OpenGL
            resources. The class has OpenGL buffer objects as class variables
            for binding buffers and storing vertex attributes. Also, methods,
            such as <code>initBuffers</code> and <code>bindElementBuffers</code>
            , handle creating OpenGL buffers and uploading data to them. Lastly,
            the <code>draw</code> function in each <code>TriMesh</code> object
            will execute the OpenGL draw call to render the triangles.{" "}
          </p>
          <p>
            However, this strategy of having one class responsible for storing
            object properties as well as rendering operations is not a good
            practice for managing 3D resources though it might be considered as
            a good software design in terms of the Object-Oriented Programming
            principles. This is because the data encapsulation and operation
            abstraction usually considered as fundamental concepts in OOP can
            actually lead to some significant performance overhead. For
            cutting-edge rendering programs these days, the Entity Component
            System (ECS) is often used for better memory management and seamless
            consistency with GPU-Driven Rendering. In this regard, the program
            can be refactored for better performance in future updates, but for
            now, that much runtime overhead doesn’t hurt the performance of the
            simulation, so it should be fine.
          </p>

          <h2>Semi-implicit Euler method</h2>
          <p>
            One of the additional features included in this project is the
            semi-implicit Euler method. The semi-implicit Euler method offers
            better numerical stability than the explicit Euler method. It is
            called “semi-implicit” because it computes velocities using the
            positions from the previous time steps. This method corresponds
            suitably with the dynamic constraints mass-spring cloth model. As
            shown above, in the algorithm suggested by Xavior Provot, the
            velocities and positions of masses should be adjusted at the end of
            the procedure. Indeed, this re-calculation process can be integrated
            with the early part of the algorithm, updating the current position,
            using the semi-implicit Euler method.
          </p>
          <p>
            First, we need three different position buffers; previous positions,
            current position, and next position. Since velocities are to be
            determined by positions, there is no longer a need for velocity
            buffers. The method then proceeds to calculate the new position in
            two steps; initially deriving the new velocity from the previous and
            current position, followed by evaluating the new position using the
            recently computed velocity and external forces. Next up, it updates
            the previous position with the current position. Lastly, the dynamic
            constraints procedure runs through the new positions, concluding the
            appropriately adjusted position, and finally, the current position
            will be updated using the adjusted position. The overall pseudo-code
            should be as shown below.
          </p>
          <Highlight>
            {`Main()
 	Execute UpdateNextPosition For each position
	Execute UpdatePrevPosition For each position
 	Execute ApplyDynamicConstraints For each position

UpdateNextPosition(id, dt, extForce, mass, prevPos, currPos, nextPos):
	netForce = extForce
 	For n in neighbors[id]:
 		l := dist(currPos[id], currPos[n])
                e := (currPos[n] - currPos[id]) / l
 		f := -ks(l0 - l)
 		netForce += f*e
	acc = netForce / mass
	currVel := (currPos[id] - prevPos[id]) / dt
        // need a damping constant to diminish the speed of itself.
 	nextVel := (1 - kd) * currVel + acc * dt	
 	nextPos[id] = currPos[id] + nextVel*dt 

UpdatePrevPosition(id, dt, prevPos, currPos):
	prevPos[id] = currPos[id]

DynamicInverse(p1, p2):
 	l := dist(p1, p2)
 	deformRate := (l0 - l)/l0
        a := abs(deformRate) - critRate
 	If a > 0
 		e := (p2 - p1)
 		diff := deformRate > 0 ? -a : a
 		Return e * diff / 2	// toward or away from p2
        Else 	
                Return 0

ApplyDynamicConstraints(id, dt, currPos, nextPos):
	totalDelta := 0
 	For s in structuralSpringNeighbors[id]
 		totalDelta += DynamicInverse(nextPos[id], nextPos[s])
 	For s in shearStringNeighbors[id]
 		totalDelta += DynamicInverse(nextPos[id], nextPos[s]) 
	// The currPos will be imminently updated here to avoid race conditions
        currPos[id] = nextPos[id] + totalDelta `}
          </Highlight>
          <h2>Iterative solver</h2>
          <p>
            Real-world applications often leverage the strength of iterative
            solvers. For example, in a complex and massive system with high
            dimensionality, retrieving exact results might be computationally
            excessive or even sometimes impossible. In such scenarios, an
            iterative solver comes into play. By iterating through a series of
            refinement steps, results will converge towards more accurate
            solutions. Once the process falls within the acceptable error
            tolerance or reaches the maximum number of iterations, the loop will
            terminate and return the approximate solution. An iterative solver
            is particularly useful in situations where stability significantly
            matters. From this aspect, our semi-implicit Euler method can
            benefit from using an iterative solver. Not only does it improve the
            stability of the simulation, but it also simplifies the algorithm
            further. Let’s take a look at a pseudo-code first.
          </p>
          <Highlight>
            {`Main()
 	Execute UpdateNextPosition For each position
	Execute UpdatePrevPosition For each position
	For i in range from 1 to ODD_ITER_NUM:
		If i is odd
 			Execute ApplyDynamicConstraintsOdd For each position
		Else
			Execute ApplyDynamicConstraintsEven For each position

UpdateNextPosition(id, dt, extForce, mass, prevPos, currPos, nextPos):
	acc = extForce / mass
	currVel := (currPos[id] - prevPos[id]) / dt
 	nextVel := (1 - kd) * currVel + acc * dt
 	nextPos[id] = currPos[id] + nextVel*dt 

UpdatePrevPosition(id, dt, prevPos, currPos):
	prevPos[id] = currPos[id]

DynamicInverse(p1, p2):
	V := p2 - p1
 	l := length(v)
 	deformRate := (l0 - l)/l0
	Return stiffness * deformRate * v
 
ApplyDynamicConstraints(id, dt, currPos, nextPos):
	totalDelta := 0
 	For s in structuralSpringNeighbors[id]
 		totalDelta += DynamicInverse(nextPos[id], nextPos[s])
 	For s in shearStringNeighbors[id]
 		totalDelta += DynamicInverse(nextPos[id], nextPos[s]) 
        currPos[id] = nextPos[id] + totalDelta `}
          </Highlight>

          <p>
            Note that the main, at this time, has a loop. We need two different{" "}
            <code>ApplyDynamicConstraints()</code> procedures because the even
            number iterations require the positions updated previously in the
            odd number iterations. Simply put, in the first iteration, the
            current position buffer contains the new positions. If we execute
            the same kernel operation in the second iteration, the results won’t
            be changed since it will just end up overwriting the current
            position buffer with the same values. Therefore, we need to swap the
            current position buffer and the next position buffer for each
            iteration in order to apply the up-to-date results to the next
            iteration. It can be realized by creating two kernel operations with{" "}
            <code>currPos</code> and <code>nextPos</code> being swapped
            mutually. Also, as you can see, the <code>DynamicInverse()</code>{" "}
            operation now just approximates the adjusted position by multiplying
            the current deformation rate by the stiffness between two masses
            instead of explicitly correcting positions. This is possible because
            the iterative process inherently corrects any variance over multiple
            passes. The efficiency of this method lies in the cumulative
            adjustments from its repetitive application of constraints, ensuring
            the system’s stability as well as reliability. Consequently, putting
            all these supplemental approaches together in the algorithm, the
            actual simulation shows notable improvements in numerical stability
            and runtime efficiency.
          </p>
        </section>
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
        <section className={style.detail_section}>
          <ul>
            <li>
              This was a school project. The Source code can't be provided.
            </li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>K-means Clustering</h1>
          <h2>Headline</h2>
          <p>Context</p>
        </section>

        <section className={style.detail_section}>
          <h1>Parallel Programming</h1>
          <h2>Headline</h2>
          <p>Context</p>
        </section>
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
        <section className={style.detail_section}>
          <ul>
            <li>
              Download Source Files: FABRIK
              <a href={fabrik} download>
                <FontAwesomeIcon icon={faLink} />
              </a>
              &nbsp;JacobianIK
              <a href={jacobian} download>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>Inverse Kinematics</h1>
          <p>
            Imagine a robot arm that can grab something. The arm consists of
            multiple bones and joints, and some joints may cap the range of
            motion due to their structural limitations. The robot’s hand has to
            be moved to a specific spot to touch an object, thus there is a
            necessity to figure out how to position and rotate the robot’s arm
            joints to achieve this hand position. In such cases, the kinematics
            equation becomes relevant.
          </p>
          <p>
            The kinematics equation is a mathematical framework that defines the
            transformations of a serial chain of links. It involves variables
            such as the positions, lengths, and angles of the limbs. A series of
            rotations and translations of joints can be represented as a
            sequential multiplication of transformation matrices. Kinematics
            equations are often leveraged to show the position of a certain
            joint following rotations or translations of the robot’s arms.
          </p>
          <p>
            Forward Kinematics (FK) is a method to determine the orientation of
            the end-effector, which is the robot’s hand in this instance, based
            on the transformations of the joints as defined by the kinematics
            equation. Each joint’s rotation or translation contributes to the
            final position of the end-effector. Thus, by applying the
            transformation matrices sequentially from the base to the tip of the
            arm, the position of the end-effector can be computed in 3D space.
            This process is straightforward as the calculation follows an
            intuitive linear pattern of the joint’s movements.
          </p>
          <p>
            However, there are some real-world scenarios where animators want to
            move the end-effector of a character’s arm to a certain position. In
            this case, the transformation matrices of the joints have to be
            determined first to locate the robot’s end-effector at a desired
            position. This problem sounds simple; we just need to reverse the
            calculation of the FK! The reality is not as simple as it sounds.
            First, we should consider if transformation matrices are invertible.
            Rotation matrices are obviously invertible since they are
            orthogonal. Therefore, R^-1 = R^T. Also, as the bottom row of
            translation matrices for 3D transformation is [0, 0, 0, 1], the
            determinants of transformation matrices are non-zero, hence they are
            invertible. These results prove that transformation matrices are
            typically invertible, therefore, the reciprocal computation of the
            kinematics equation is surely possible. In spite of this fact, the
            reverse calculation of the FK is more complex than FK because the
            problem itself is non-linear, involving multiple solutions or
            sometimes an undefined solution. This is where Inverse Kinematics
            (IK) becomes essential.
          </p>
          <p>
            IK is a method to compute the joint angles or positions to achieve a
            desired configuration of the robot’s end-effector. It involves
            complex mathematical formulations and often relies on iterative
            algorithms to find a viable solution. The computation starts with
            the goal position of the end-effector and works backward throughout
            the arm’s structure to determine the necessary joint angles. To
            solve the reciprocal multiplications of transformation matrices,
            Jacobian Inverse or Gradient Descent is commonly employed. These
            algorithms adjust the joint parameters iteratively to ensure that
            the difference between the end-effector’s current position and the
            desired position is inside the error tolerance rate. The challenge
            in IK lies in the fact that the implemented algorithms are often not
            fast enough, and finding the optimal solution that respects joint
            limits and avoids possible collisions with the surroundings is not
            trivial. Therefore, addressing IK problems necessitates careful
            optimization and fine-tuning of the algorithms for efficiency and
            accuracy.
          </p>
        </section>

        <section className={style.detail_section}>
          <h1>FABRIK</h1>
          <p>
            The FABRIK (Forward And Backward Reaching Inverse Kinematics)
            algorithm is one of the widely used IK algorithms these days. Unlike
            traditional IK methods that often rely on complex matrix
            calculations, FABRIK exhibits a more intuitive approach to IK
            problems. Instead of calculating joint angles, it uses a geometric
            approach.<br></br>
            Paper Reference
            <a href="http://www.andreasaristidou.com/publications/papers/FABRIK.pdf">
              <FontAwesomeIcon icon={faLink} />
            </a>
            .
          </p>
        </section>
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
          <ul>
            <li>
              Download Source Code&nbsp;
              <a href={crowd} download>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

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
            through to avoid generating false paths. C-Space can be obtained
            simply by disregarding the points around collision meshes plus the
            radius of the agent. And, the rest of the steps are to place
            obstacles randomly and test if A* properly works in the grid system.
          </p>
          <video controls width="100%">
            <source src={agent_navigation} type="video/mp4" />
            <p>
              Your browser doesn't support HTML video.
              <a href={agent_navigation}>link to the video</a>.
            </p>
          </video>
        </section>

        <section className={style.detail_section}>
          <h1>Crowd Simulation</h1>
          <p>
            I referenced some of the crowd interaction mechanisms from Starcraft
            2, a famous RTS game by Blizzard. In Starcraft, each moveable object
            (called a ‘unit’ in the game), especially for flying objects,
            constantly detects objects around it and prevents them from
            overlapping. Blizzard, of course, developed and used more complex
            algorithms than my own algorithms here, which are just of the
            ‘imitation’ of the seeming movements, to exhibit natural formations
            and patterns of the units. With that being said, I did my best to
            analyze the patterns and enable the agents in this crowd simulation
            to function similarly to them. From what I inspected in Starcraft2,
            the crowd interaction model of moving objects consists of two parts.
            One is the interaction between moving objects, and the other is the
            interaction between moving objects and stationary objects. First,
            moving objects ignore stationary objects, however, the stationary
            objects recognize either moving objects or other stationary objects
            around them. In this regard, if a moving object approaches a
            stationary object, the stationary object moves away from the way
            that the moving object passes on to avoid collision with. Also,
            stationary objects overlapping each other push others away in the
            opposite direction. In sum, these operations can be put in one
            procedure.
          </p>
          <Highlight language="elm">
            {`MoveAway(agent, deltaTime) 
  If agent.stationary == True Then Return
    For otherAgent in agents 
      If otherAgent.isCollidingWith(agent)
        outwardDirection = otherAgent.pos - agent.pos
        outwardDirection.setToLength(maxSpeed) 
        outwardDirection.negate()
        agent.pos += outwardDirection * deltaTime`}
          </Highlight>
          <p>
            As a result, agents will always prevent collisions at least with
            other stationary agents.
          </p>
          <img
            src={stationary_agents_collisions}
            alt="stationary_agents_collisions.gif"
            style={{
              width: "60%",
            }}
          />
          <p>
            In addition to this mechanism from Starcraft2, I had
            Time-To-Collision(TTC) force in action for perfect collision
            avoidance even among moving agents. The TTC force model decides an
            anticipatory behavior of agents in accordance with the estimated
            time until two agents collide. Namely, TTC calculates the
            time-to-collision (tau) between two agents, If the value of tau is
            small, which means they are going to collide soon, a stronger
            avoidance force will be applied to the agents to change their
            directions. On the other hand, if the value of tau is large, the
            magnitude of the avoidance force will be exponentially decreased.
            Also, infinity will be returned as the value of tau if there is no
            predicted collision between two agents or if the speed of agents is
            zero (the agents are stationary), resulting in nearly zero avoidance
            force. Consequently, the TTC force completely manages to prevent
            moving agents from bumping each other, while leaving the stationary
            agent interaction mechanism intact.
          </p>
          <img
            src={ttc_force}
            alt="ttc_force.gif"
            style={{
              width: "55%",
            }}
          />
        </section>

        {/* <section className={style.detail_section}>
          <h1>Object Rendering</h1>
        </section>

        <section className={style.detail_section}>
          <h1>Incorporate Particle System</h1>
        </section>

        <section className={style.detail_section}>
          <h1>Orientation Smoothing</h1>
        </section> */}
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
    github: "https://github.com/goheungchoi/raytracer",
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
        <section className={style.detail_section}>
          <ul>
            <li>
              Go to the Source Code&nbsp;
              <a href="https://github.com/goheungchoi/raytracer">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>

        <section className={style.detail_section}>
          <h1>Ray Tracing</h1>
          <h2>Headline</h2>
          <p>Context</p>
        </section>
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
    github: "https://github.com/goheungchoi/top-20-movies",
    description:
      "An interactive website showcasing the top 20 movies sourced from TMDB API with diverse visual effects",
    skills: ["ReactJS", "HTML/CSS"],
    detail: (
      <>
        <section className={style.detail_section}>
          <ul>
            <li>
              Go to the Source Code&nbsp;
              <a href="https://github.com/goheungchoi/top-20-movies">
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </section>
      </>
    ),
  },
};

export default projectData;
