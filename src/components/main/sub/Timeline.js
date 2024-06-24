import style from "../../../style/main_modules/sub/Timeline.module.css";

function Milestone(icon, title, region, stime, ftime, description) {
  return (
    <div>
      
    </div>
  )
}

function Timeline() {
  return (
    <div className={`${style.timeline}`}> 
      <div className={`${style.headline}`}>Timeline</div>

      <div className={`${style.milestone}`}>
        <div className={`${style.title}`}>
          <span>2018-2023</span> University of Minnesota, Minneapolis, MN
        </div>
        <div className={`${style.content}`}>
          During my time at UMN, I laid a solid foundation for my future in
          computer science. In the early years, I delved into core concepts
          like algorithm analysis, programming optimization from the machine
          architectural view, and software design patterns. In my senior
          years, I shifted my focus towards the study of computer graphics
          and rendering. Courses like Interactive Computer Graphics, Motion
          Planning & Animation, Advanced Linear Algebra, and Parallel
          Computing, broadened my technical knowledge and fueled my passion
          about this field. This academic journey helps me hone my
          problem-solving skills and creative thinking.
        </div>
      </div>
      
      <div className={`${style.milestone}`}>
        <div className={`${style.title}`}>
          <span>2022-2023</span> UMN CS&E - Teaching Assistant
        </div>
        <div className={`${style.content}`}>
          My role as a Teaching Assistant in the CS&E department further
          sharpened my leadership and mentoring abilities, allowing me to
          give back to the academic community while solidifying my own
          understanding. I delivered lectures about machine architecture and 
          operating system. I also created auto-graders in C to evaluate 
          students' projects for effective and reliable assessment, 
          leveraging the unit test methodology. Collaborating with fellow 
          TAs, I tried to contribute to the improvement of students' learning
          experience in the college.
        </div>
      </div>

    </div>
  )
}

export default Timeline;