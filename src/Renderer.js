import React, { Component } from 'react';
import rxpng from './assets/rxjs.png';
import './assets/css/animation.css';
import './assets/css/additionalStyling.css';
import CheckboxWithLabel from './CheckboxWithLabel.js';
import { NodeCalculationsRxjs } from './NodeCalculationsRxjs.js'

// import {TestSuiteIntroduction} from './testSuiteIntroduction/OldTestSuiteIntroduction.js'

function determineComponents(currRoute) {
  console.log(currRoute)
  switch (currRoute) {
    case '/': return (<CheckboxWithLabel rxpng={'are these the right props'}/>);
    case '/calc.html': return (<NodeCalculationsRxjs rxpng={rxpng}/>);

    // case '/main_rxjs_page.html': return (<RxjsRunner/>); break;
    default: return (<CheckboxWithLabel rxpng={'are these the right props'}/>);
  }
}

class Renderer extends Component {
  render() {
    console.log(this.props.route)
  let currRoute = window.location.href.substring(21)
    return (
      <div>
        { this.props.route ? determineComponents(this.props.route) :  determineComponents(currRoute)}
      </div>
    );
  }
}

export default Renderer;
