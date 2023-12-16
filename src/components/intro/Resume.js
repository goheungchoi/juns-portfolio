import style from "../../style/intro_modules/Resume.module.css";

import resume from "../../data/resume_summer23.pdf";

function Resume() {
  return (
    <a
      href={resume}
      rel="noreferrer"
      target="_blank"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div className={`${style.Resume}`}>Résumé</div>
    </a>
  );
}

export default Resume;
