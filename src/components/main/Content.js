
import style from '../../style/main_modules/Content.module.css'

function Section(props) {
  return (
    <section>
      {props.children}
    </section>
  )
}


function main() {
  return (
    <div className={style.left_box}>
      <div className={`${style.name} ${style.font__country}`}>
        Hi, <br></br>
        I'm Jun
      </div>
      <div className={style.info}>
        Software Engineer  <br></br>
        Computer Graphics
      </div>
    </div>
  )
}

// function 

// function about() {
//   return (
//     <div>

//     </div>
//   )
// }

function compSwitch(nav) {
  switch (nav) {
    case 0:
      return main()
    case 1:
      return (null)

    case 2:
      return (null)

    case 3:
      return (null)
    default:
      return (null)

  }
}


function Content(props) {

  return (
    <div className={style.body}>
      <Section>
        {compSwitch(props.nav)}
      </Section>
    </div>
  )

}

export default Content;