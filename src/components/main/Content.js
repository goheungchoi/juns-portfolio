import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

import sleep from "../../utils/Sleep";
import Dialog from "./Dialog";
import InnerSlides from "./sub/InnerSlides";
import Timeline from "./sub/Timeline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  ISOCPPLogo,
  JavaLogo,
  PythonLogo,
  JSLogo,
  TSLogo,
  ReactLogo,
  DjangoLogo,
  PostgreSQLLogo,
  GraphQLLogo,
  AWSLogo,
  OpenGLLogo,
  WebGLLogo,
  VulcanLogo,
  OpenMPLogo,
  OpenMPILogo,
  OpenCLLogo,
  CUDALogo,
  UnrealLogo,
  ThreeJSLogo,
  SWIcon,
  RenderingIcon,
  GameDevIcon,
} from "../../data/logos";
import cartoon_pic from "../../data/cartoon_pic.png";

import projectData from "../../scripts/projects";

import style from "../../style/main_modules/Content.module.css";
import layout from "../../style/main_modules/Content.Work.module.css";

/**
 * Provides vertical slide-out and slide-in effects of components.
 * @param {*} props nav - the index of current slide
 * @returns slides that wrap up the child components
 */
function Slides(props) {
  const refs = [useRef(null), useRef(null)];
  const [swapper, setSwapper] = useState({ curr: 0, next: 1 });
  const [currNav, setCurrNav] = useState(0);
  const [div1Nav, setDiv1Nav] = useState(0);
  const [div2Nav, setDiv2Nav] = useState(0);

  const slideActive = `${style.slide_active}`;
  const slideInactive = `${style.slide_inactive}`;
  const slideInFromBottom = `${style.slide_in__from_bottom}`;
  const slideInFromTop = `${style.slide_in__from_top}`;
  const slideInDone = `${style.slide_in__done}`;
  const slideOutToBottom = `${style.slide_out__to_bottom}`;
  const slideOutToTop = `${style.slide_out__to_top}`;

  async function activeNextSlide(startPosition) {
    if (swapper.next === 1) {
      setDiv2Nav(props.nav);
    } else {
      setDiv1Nav(props.nav);
    }
    refs[swapper.next].current.className = `${slideActive} ${startPosition}`;
  }

  async function slideInNextSlide() {
    refs[swapper.next].current.className = `${slideActive} ${slideInDone}`;
  }

  async function slideOutCurrentSlide(endPosition) {
    refs[swapper.curr].current.className = `${slideActive} ${endPosition}`;
  }

  async function deactivateCurrentSlide() {
    refs[swapper.curr].current.className = `${slideInactive}`;
  }

  async function updateSlideAnimation() {
    const init = () => {
      if (currNav < props.nav) {
        return [slideInFromBottom, slideOutToTop];
      } else {
        return [slideInFromTop, slideOutToBottom];
      }
    };
    const pos = await init();
    await activeNextSlide(pos[0]);
    await sleep(50);
    await slideInNextSlide();
    await slideOutCurrentSlide(pos[1]);
    await sleep(500);
    await deactivateCurrentSlide();
    await console.log(swapper);
    await swapDiv();
    await setCurrNav(props.nav);
  }

  async function swapDiv() {
    const tmpCurr = swapper.curr;
    const tmpNext = swapper.next;
    setSwapper({ curr: tmpNext, next: tmpCurr });
  }

  useEffect(() => {
    if (props.nav !== currNav) {
      updateSlideAnimation();
    }
  }, [props.nav]);

  return (
    <>
      <div ref={refs[0]} className={`${slideActive} ${slideInDone}`}>
        {props.children[div1Nav]}
      </div>
      <div ref={refs[1]} className={`${slideInactive}`}>
        {props.children[div2Nav]}
      </div>
    </>
  );
}

/** Main Component */
function Main() {
  return (
    <section className={style.left_box}>
      <div className={`${style.header} ${style.font__Nunito}`}>
        Welcome, <br></br>
        I'm Jun
      </div>
      <div className={`${style.headline} ${style.font__PTSans}`}>
        <strong>Computer Science Graduate</strong>
      </div>
      <div className={`${style.info} ${style.font__PTSans}`}>
        Passionate about&nbsp;
        <font color="#372925">
          <strong>Software Development</strong>
        </font>
        &nbsp;and&nbsp;
        <font color="#372925">
          <strong>Game Development</strong>
        </font>
      </div>
    </section>
  );
}

/** About Component */
function About() {
  function SkillBar({ icon, color, proficiency }) {
    /* beginner basic intermediate advanced expert */
    const NUM_LEVELS = 5;
    const proficiencyLevels = [
      "Beginner",
      "Basic",
      "Intermediate",
      "Advanced",
      "Expert",
    ];
    const partStyle = style.progress_bar__part;
    const partStart = style.progress_bar__part__start;
    const partMiddle = style.progress_bar__part__middle;
    const partEnd = style.progress_bar__part__end;

    return (
      <div className={`${style.skillbar}`}>
        <div>{icon}</div>

        <div className={`${style.progress_bar}`}>
          {proficiencyLevels.map((v, i) => {
            const partColor = i <= proficiency ? color : "gray";
            let classNames = `${partStyle} `;
            if (i === 0) classNames += `${partStart} `;
            else if (i === NUM_LEVELS - 1) classNames += `${partEnd} `;
            else classNames += `${partMiddle} `;

            return (
              <div
                key={i}
                className={classNames}
                style={{
                  backgroundColor: partColor,
                }}
              ></div>
            );
          })}
        </div>
        {/* <div className={`${style.font__Helvetica}`}
         style={{fontSize: '0.8rem', fontWeight: 'lighter'}}>
          {proficiencyLevels[proficiency]}
        </div> */}
      </div>
    );
  }

  function AboutMe() {
    return (
      <div className={`${style.flex_column} ${style.full_size}`}>
        <div className={`${style.headline} ${style.font__PTSans}`}>
          AboutMe
          <div className={`${style.bar}`}></div>
        </div>

        {/* profile div */}
        <div className={`${style.profile}`}>
          <div className={`${style.brief_info}`}>
            <div className={`${style.profile_img}`}>
              <img src={cartoon_pic} alt="My_Profile_Pic" />
            </div>
            <div className={`${style.contact_info}`}>
              <a href="https://www.github.com/goheungchoi">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/goheungchoi/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.discordapp.com/users/888217652273750016">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>

          <div className={`${style.introduction}`}>
            <div className={`${style.name} ${style.font__PTSans}`}>
              Jun Choi
            </div>
            <div className={`${style.major} ${style.font__PTSans}`}>
              UMN '23 B.S. Comp Sci Major
            </div>
            <div className={`${style.tell_about_myself} ${style.font__PTSans}`}>
              Hello! I'm Jun Choi, a computer science graduate with a passion
              for software development and computer graphics. My interests span
              various fields of computer science study, including software
              architecture, algorithm design, and parallel programming. Lately,
              my primary focus lies in real-time rendering technology and game
              development. I am actively seeking opportunities where I can
              contribute meaningfully with my diverse skillset.
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Expertise() {
    /* Row boxes open or close */
    const [states, setStates] = useState([false, false, false]);
    function handleEachClick(index) {
      setStates(states.map((_, i) => (i === index ? !states[i] : false)));
    }
    return (
      <div className={`${style.flex_column} ${style.full_size}`}>
        <div className={`${style.headline} ${style.font__PTSans}`}>
          Expertise
          <div className={`${style.bar}`}></div>
        </div>

        <div
          className={`${style.row} ${
            states[0] ? style.row__active : style.row__inactive
          } ${style.font__PTSans}`}
          onClick={() => handleEachClick(0)}
        >
          <div className={`${style.title}`}>
            <div
              className={`${style.disc} ${states[0] ? style.disc__active : ""}`}
            ></div>
            <div className={`${style.subheader} ${style.font__PTSans}`}>
              Software Development
            </div>
          </div>
          <div></div>

          {states[0] && (
            <div
              className={`${states[0] ? style.main : style.main__inactive} ${
                style.font__PTSans
              }`}
            >
              <SWIcon />
              Experienced in both front-end and back-end development with a
              strong grasp of the development process of software or web
              applications. Proficient in multiple programming languages, such
              as C, C++17, Java, Python, JavaScript, etc. Eager problem-solver
              with a knack for identifying and addressing complex software
              problems. Avic and proactive learner, continuously seeking to
              acquire new skills and knowledge to effectively tackle emerging
              challenges.
            </div>
          )}
        </div>
        <div
          className={`${style.row} ${
            states[1] ? style.row__active : style.row__inactive
          } ${style.font__PTSans}`}
          onClick={() => handleEachClick(1)}
        >
          <div className={`${style.title}`}>
            <div
              className={`${style.disc} ${states[1] ? style.disc__active : ""}`}
            ></div>
            <div className={`${style.subheader}`}>Game Development</div>
          </div>
          <div></div>

          {states[1] && (
            <div
              className={`${states[1] ? style.main : style.main__inactive} ${
                style.font__PTSans
              }`}
            >
              <GameDevIcon />
              Proficient in using leading game engines like Unreal Engine.
              Knowledgeable in scripting interactive game mechanics, AI
              behaviors, and user interfaces. Ability to integrate and
              manipulate game assets and audio elements. Deeply committed to
              innovating and advancing game technology and enhancing player
              experience, leveraging cutting-edge technologies to push the
              boundaries of what is possible in gaming.
            </div>
          )}
        </div>
        <div
          className={`${style.row} ${
            states[2] ? style.row__active : style.row__inactive
          } ${style.font__PTSans}`}
          onClick={() => handleEachClick(2)}
        >
          <div className={`${style.title}`}>
            <div
              className={`${style.disc} ${states[2] ? style.disc__active : ""}`}
            ></div>
            <div className={`${style.subheader}`}>
              Animation & Computer Graphics
            </div>
          </div>
          <div></div>

          {states[2] && (
            <div
              className={`${states[2] ? style.main : style.main__inactive} ${
                style.font__PTSans
              }`}
            >
              <RenderingIcon />
              In-depth knowledge of real-time rendering techniques, including
              GPU-driven rendering, shading, and lighting, with exceptional
              knowledge in 3D math, particularly in linear algebra. Strong
              skills in graphics programming using shaders (GLSL), and APIs such
              as OpenGL, and Vulkan. Knowledge of physics-based animation
              techniques, including rigid body simulation, cloth simulation, and
              fluid dynamics, adding more realism to game scenes.
            </div>
          )}
        </div>
      </div>
    );
  }

  function Skills() {
    return (
      <>
        <div className={style.grid_container}>
          <div
            className={`
            ${style.grid_header}
            ${style.info} 
            ${style.text__capital}
            ${style.font__Helvetica}
          `}
            style={{ letterSpacing: "0.2rem" }}
          >
            Technical Skills
          </div>

          <div className={`${style.grid_item_a} ${style.sector}`}>
            <h1 className={`${style.font__Helvetica} ${style.text__capital}`}>
              Programming Languages
            </h1>

            <SkillBar icon={<ISOCPPLogo />} color={"#004482"} proficiency={3} />
            <SkillBar icon={<JavaLogo />} color={"#ED8B00"} proficiency={2} />
            <SkillBar icon={<PythonLogo />} color={"#366A96"} proficiency={1} />
            <SkillBar icon={<JSLogo />} color={"#F0DB4F"} proficiency={1} />
          </div>

          <div className={`${style.grid_item_b} ${style.sector}`}>
            <h1 className={`${style.font__Helvetica} ${style.text__capital}`}>
              Frameworks
            </h1>
            <div>
              {<ReactLogo />}&nbsp;+&nbsp;{<TSLogo />}
            </div>
            <div>{<DjangoLogo />}</div>
          </div>

          <div className={`${style.grid_item_c} ${style.sector}`}>
            <h1 className={`${style.font__Helvetica} ${style.text__capital}`}>
              DB & Cloud
            </h1>
            <div>
              {<PostgreSQLLogo />}
              {<GraphQLLogo />}
            </div>
            <div>{<AWSLogo />}</div>
          </div>

          <div className={`${style.grid_item_d} ${style.sector}`}>
            <h1 className={`${style.font__Helvetica} ${style.text__capital}`}>
              Game Dev &<br></br> Parallel Computing
            </h1>
            <div>
              <OpenGLLogo />
              <WebGLLogo />
              <VulcanLogo />
            </div>
            <div>
              <OpenCLLogo />
              <OpenMPLogo />
              <CUDALogo />
            </div>
            <div>
              <OpenMPILogo />
              <ThreeJSLogo />
              <UnrealLogo />
            </div>
          </div>

          <div className={`${style.grid_item_e} ${style.sector}`}>
            <h1 className={`${style.font__Helvetica} ${style.text__capital}`}>
              Others
            </h1>

            <h3>Testing</h3>
            <div>
              <span>GTest</span> <span>Catch2</span> <span>JUnit</span>
            </div>

            <h3>Build Tools</h3>
            <div>
              <span>CMake</span> <span>GNU Make</span>
            </div>

            <h3>Project Management</h3>
            <div>
              <span>Git</span>
              <span>GitHub</span>
              <span>Agile</span>
              <span>Scrum</span>
            </div>

            <h3>OS</h3>
            <div>
              <span>Windows</span> <span>Linux</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className={style.column_box}>
      <div className={`${style.column}`}>
        <InnerSlides>
          <AboutMe />
          <Timeline />
          <Expertise />
          <Skills />
        </InnerSlides>
      </div>
    </section>
  );
}

/** Work Component */
function Work() {
  // const gridCellPositions = [
  //   layout.grid_item_normal,
  //   layout.grid_item_vertical_long,
  // ];

  const projects = [
    projectData.Razanya33,
    projectData.alcove,
    projectData.unreal_projects,
    projectData.pft,
    projectData.graphGame,
    projectData.clothSimulation,
    projectData.parallelKMeans,
    projectData.IKSimulation,
    projectData.pathPlanningAndCrowdSimulation,
    projectData.raytracer,
    projectData.top20Movies,
  ];

  function Card({ gridPos, project }) {
    const [hover, setHover] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    function setMessage(list) {
      return list.map((v, i) => {
        return (
          <div key={i} className={layout.tag}>
            {v}
          </div>
        );
      });
    }

    function handleMouseOver() {
      setHover(true);
    }

    function handleMouseOut() {
      setHover(false);
    }

    function handleDetailButtonClick() {
      setOpenDialog(true);
    }

    function handleCloseDialog() {
      setOpenDialog(false);
    }

    return (
      <div
        className={`
          ${layout.card}
          ${gridPos}
        `}
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
      >
        <div
          className={`
          ${layout.card__thumbnail}
          ${hover ? layout.card_thumbnail_active : null}
        `}
        >
          {project.thumbnail}
        </div>

        <div
          className={`
          ${layout.card__header}
        `}
        >
          {project.title}
        </div>

        <div
          className={`
          ${layout.card__cover}
          ${hover ? layout.card__cover_active : null}
          ${style.font__PTSans}
        `}
        >
          {project.description}
          <div
            className={`${layout.button} ${style.font__PTSans}`}
            onClick={() => handleDetailButtonClick()}
          >
            See Details
          </div>
        </div>

        {openDialog ? (
          <Dialog
            title={project.title}
            message={setMessage(project.skills)}
            detail={project.detail}
            onCloseButtonClick={handleCloseDialog}
          />
        ) : null}
      </div>
    );
  }

  return (
    <section className={style.left_box}>
      <div
        className={`
        ${style.headline}
        ${style.text__capital}`}
      >
        Representative Projects
      </div>

      <div
        className={`
        ${layout.container} 
        ${layout.container_layout}`}
      >
        {projects.map((v, i) => {
          return <Card key={i} gridPos={layout.grid_item_normal} project={v} />;
        })}
      </div>
    </section>
  );
}

/** Contact Component */
function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ao6qv3f', 'contact_form', form.current, '3_IIM6LtMD87rKm2b')
    .then((result) => {
      window.confirm(result.text);
    }, (error) => {
      window.alert(error.text)
    });
  }

  return (
    <form className={`${style.email_form}`} ref={form} onSubmit={sendEmail}>
      <input type="text" placeholder="Your Name *" name="user_name" required/>
      <input type="email" placeholder="Your Email *" name="user_email" required/>
      <textarea name="message" placeholder="Your Message *" required/>
      <p>powered by <a href="www.emailjs.com" >EmailJS</a></p>
      <button type="submit" >Send Message</button>
    </form>
  )
}

function Contact() {
  return (
    <div className={style.center_box}>
      <div className={`${style.header} ${style.font__Nunito}`}>Contact Me</div>

      <div className={`${style.contact_section} ${style.font__PTSans}`}>
        Email: choi147157@gmail.com <br></br>
        Phone: {"(+82)"}10-7339-5016 || {"(+01)"}612-615-2415 <br></br>

        <p style={{fontSize: "calc(var(--text-para)*0.65)"}}>
          Or drop your email via this form. I'll response as soon as possible.
        </p>
        <ContactMe />
      </div>
    </div>
  );
}

/**
 *
 * @param {*} props nav - the navigation index for component switch.
 * @returns
 */
function Content(props) {
  return (
    <div className={style.body}>
      <Slides nav={props.nav}>
        <Main />
        <About />
        <Work />
        <Contact />
      </Slides>
    </div>
  );
}

export default Content;
