import React, { Component } from 'react';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// PAGES
import Main from './pages/Main';
import NewZelandTest from './pages/NewZelandTest';
import JustRectangle from './pages/JustRectangle';
import Human from './pages/Human';
import Tommy from './pages/Tommy';
import Coutries from './pages/Coutries';
import Coutries2 from './pages/Coutries2';
import ScrollAndFab from './pages/ScrollAndFab';
import PilotTable from './pages/PilotTable';
import VoiceRecorder from './pages/VoiceRecorder';
import Table from './pages/Table';
import CodeSandbox from './pages/CodeSandbox';
import UiHudBoxCorner from './pages/UiHudBoxCorner';
import GridDrafts from './pages/GridDrafts';

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
              <Route exact path="/NewZelandTest" component={NewZelandTest} />
              <Route exact path="/JustRectangle" component={JustRectangle} />
              <Route exact path="/Human" component={Human} />
              <Route exact path="/Tommy" component={Tommy} />
              <Route exact path="/PilotTable" component={PilotTable} />
              <Route exact path="/VoiceRecorder" component={VoiceRecorder} />
              <Route exact path="/Table" component={Table} />
              <Route exact path="/CodeSandbox" component={CodeSandbox} />
              <Route exact path="/Coutries" component={Coutries} />
              <Route exact path="/Coutries2" component={Coutries2} />
              <Route exact path="/ScrollAndFab" component={ScrollAndFab} />
              <Route exact path="/UiHudBoxCorner" component={UiHudBoxCorner} />
              <Route exact path="/GridDrafts" component={GridDrafts} />
            </Switch>
          </div>

        </div>
        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

export default Router;