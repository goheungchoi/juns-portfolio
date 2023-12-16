import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Style from '../../style/main_modules/Main.module.css'

import BackgroundScene from './Scene'
import Content from './Content.js'
import Nav from './Nav.js'

import Sleep from '../../utils/Sleep.js'

class Main extends React.Component {

  FIRST_INDEX = 0;
  LAST_INDEX = 3;

  constructor(props) {
    super(props);
    this.state = {
      contentTrig: false,
      open: false,
      nav: 0,
    };
  }

  mount = async() => {
    await Sleep(1000);
    await this.setState({open: true});
    await Sleep(500);
    await this.setState({contentTrig: true});
  }

  changeNavIndex = (index) => {
    this.setState({nav: index});
    console.log(this.state.nav);
  }

  componentDidMount() {
    this.mount();
  }

  componentDidUpdate() {

  }

  handleUpButtonClick() {
    this.changeNavIndex(this.state.nav-1);
  }

  handleDownButtonClick() {
    this.changeNavIndex(this.state.nav+1);
  }

  render() {
    const {  open, nav } = this.state;
    return (
      <div className={Style.Body}>

        {/* Curtain */}
        <div className={`${open ? Style.inactive : Style.Curtain}`}></div>

        {/* Navbar */}
        <Nav nav={nav} notifyItemChange={this.changeNavIndex}/>

        {/* Background container */}
        <div className={Style.Background}>
          <BackgroundScene nav={nav}/>
        </div>
        
        {/* Content container */}
        <section className={`${Style.Content}`}>
          {/* If nav is the first index, disable the up button. */
            (nav === this.FIRST_INDEX) ? null :
            <div 
              role='button' 
              className={`${Style.button} ${Style.fixed__up}`}
              onClick={()=>this.handleUpButtonClick()}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          }
          
          {/* Centent Component */}
          <Content nav={nav}/>

          {/* If nav is the last index, disable the down button. */
            (nav === this.LAST_INDEX) ? null :
            <div 
              role='button' 
              className={`${Style.button} ${Style.fixed__down}`}
              onClick={()=>this.handleDownButtonClick()}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          }
        </section>

      </div>
    )
  }
}

export default Main;