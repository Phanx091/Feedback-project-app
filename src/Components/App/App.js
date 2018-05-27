import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageOne from '../Page_one/Page_one';
import PageTwo from '../Page_two/Page_two';
import PageThree from '../Page_three/Page_three';
import PageFour from '../Page_four/Page_four';
import PageFive from '../Page_five/Page_five';
// import Admin from '../Admin/Admin';
// import axios from 'axios';






class App extends Component {
    render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/admin' component={PageOne} />
          <Route exact path='/' component={PageOne} />
          <Route exact path='/2' component={PageTwo} />
          <Route exact path='/3' component={PageThree} />
          <Route exact path='/4' component={PageFour} />
          <Route exact path='/5' component={PageFive} />
          {/* <Link exact path='/admin' component={Admin}/> */}
        </div>
      </Router>
    );
  }
}


export default connect()(App);
