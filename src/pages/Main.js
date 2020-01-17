import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {

  state = {
    pages: ['NewZelandTest', 'JustRectangle', 'Human', 'Tommy', 'PilotTable', 'VoiceRecorder', 'Table',
      'CodeSandbox', 'Coutries', 'Coutries2',
      'ScrollAndFab', 'UiHudBoxCorner', 'GridDrafts', 'Countries3',
      'ImportImgs', 'ElectronLogin','ApproveScreen'],
  }

  render() {
    const list = this.state.pages.map(page => {
      return <Link key={page} className="link" to={`/${page}`} activeclassname="activeRoute">{page}</Link>
    })
    return (
      <section className="main">
        {list}
      </section>
    )
  }
}


export default Main