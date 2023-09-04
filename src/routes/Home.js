import React from 'react'
import style from '../style/Home.module.css'

import Intro from '../components/intro/Intro.js'
import Main from '../components/main/Main.js'


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false,

    };
  }

  startTour = (b) => {
    this.setState({start: b});
  }

  handleResize() {
    
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    const { start } = this.state;
    return (
      <div className={style.Home}>
        <div className={`${start?style.disable:style.active}`}>
          <Intro 
            startTour={this.startTour}
          />
        </div>

        <div className={`${start?style.active:style.disable}`}>
          {start?<Main />:null}
        </div>
      </div>
    )
  }

}

export default Home;