import React, { Component } from 'react';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// PAGES
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Main3 from './pages/Main3';
import Main4 from './pages/Main4';
import pilotTable from './pages/pilotTable';
import VoiceRecorder from './pages/VoiceRecorder';

//CMPS
import NavBar from './cmps/NavBar';

class Router extends Component {

  render() {
    return (
      <HashRouter>
        {/* <BrowserRouter> */}
        <div className="app-nav-route">

          <div >
            <NavBar />
          </div>

          <div className="route">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/Main2" component={Main2} />
              <Route exact path="/Main3" component={Main3} />
              <Route exact path="/Main4" component={Main4} />
              <Route exact path="/pilotTable" component={pilotTable} />
              <Route exact path="/VoiceRecorder" component={VoiceRecorder} />
            </Switch>
          </div>

        </div>
        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

export default Router;