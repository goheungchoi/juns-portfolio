import React from 'react'

import Style from '../../style/main_modules/Main.module.css'

import BackgroundScene from './Scene'
import Content from './Content.js'
import Nav from './Nav.js'

import Sleep from '../Sleep.js'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contentTrig: false,
      open: false,
      nav: 0,
    };
  }

  mount = async() => {
    await Sleep(3500);
    await this.setState({open: true});
    await Sleep(1000);
    await this.setState({contentTrig: true});
  }

  changeNavIndex = (index) => {
    this.setState({nav: index});
    console.log(this.state.nav);
  }

  handleResize() {
    
  }

  componentDidMount() {
    this.mount();
  }

  componentDidUpdate() {

  }

  render() {
    const {} = this.props;
    const { contentTrig, open, nav } = this.state;
    return (
      <div className={Style.Body}>
        <div className={`${open ? Style.inactive : Style.Curtain}`}>
        </div>

        <div className={Style.Background}>
          <BackgroundScene />
        </div>

        <Nav 
          notifyItemChange={this.changeNavIndex}
        />

        <div className={`${Style.Content}`}>
          <Content 
            nav={nav}
          />
        </div>

      </div>
    )
  }


}

export default Main;