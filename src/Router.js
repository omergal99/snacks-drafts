import React, { Component } from 'react';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// PAGES
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Human from './pages/Human';
import Tommy from './pages/Tommy';
import PilotTable from './pages/PilotTable';
import VoiceRecorder from './pages/VoiceRecorder';
import Table from './pages/Table';
import Example2 from './pages/Example2';
import Example3 from './pages/Example3';

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
              <Route exact path="/Human" component={Human} />
              <Route exact path="/Tommy" component={Tommy} />
              <Route exact path="/PilotTable" component={PilotTable} />
              <Route exact path="/VoiceRecorder" component={VoiceRecorder} />
              <Route exact path="/Table" component={Table} />
              <Route exact path="/Example2" component={Example2} />
              <Route exact path="/Example3" component={Example3} />
            </Switch>
          </div>

        </div>
        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

export default Router;