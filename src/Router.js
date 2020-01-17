import React, { Component } from 'react';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// PAGES
import Main from './pages/Main';

import NewZelandTest from './pages/level1/NewZelandTest';
import JustRectangle from './pages/level1/JustRectangle';
import Human from './pages/level1/Human';
import Tommy from './pages/level1/Tommy';
import ScrollAndFab from './pages/level1/ScrollAndFab';
import PilotTable from './pages/level1/PilotTable';
import VoiceRecorder from './pages/level1/VoiceRecorder';
import Table from './pages/level1/Table';
import CodeSandbox from './pages/level1/CodeSandbox';

import UiHudBoxCorner from './pages/boxCorner/UiHudBoxCorner';

import GridDrafts from './pages/countries/GridDrafts';
import Coutries from './pages/countries/Coutries';
import Coutries2 from './pages/countries/Coutries2';
import Countries3 from './pages/countries/Countries3';

import ImportImgs from './pages/level2/ImportImgs';
import ElectronLogin from './pages/level2/ElectronLogin';
import ApproveScreen from './pages/level2/ApproveScreen';

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
              <Route exact path="/ScrollAndFab" component={ScrollAndFab} />
              <Route exact path="/UiHudBoxCorner" component={UiHudBoxCorner} />
              <Route exact path="/GridDrafts" component={GridDrafts} />
              <Route exact path="/Coutries" component={Coutries} />
              <Route exact path="/Coutries2" component={Coutries2} />
              <Route exact path="/Countries3" component={Countries3} />
              <Route exact path="/ImportImgs" component={ImportImgs} />
              <Route exact path="/ElectronLogin" component={ElectronLogin} />
              <Route exact path="/ApproveScreen" component={ApproveScreen} />
            </Switch>
          </div>

        </div>
        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

export default Router;