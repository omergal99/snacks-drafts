import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {

  state = {
    pages: ['NewZelandTest', 'JustRectangle', 'Human', 'Tommy', 'PilotTable', 'VoiceRecorder', 'Table', 
    'CodeSandbox', 'Coutries', 'Coutries2',
     'ScrollAndFab','UiHudBoxCorner'],
  }

  render() {
    const list = this.state.pages.map(page => {
      return <Link className="link" to={`/${page}`} activeClassName="activeRoute">{page}</Link>
    })
    return (
      <section className="main">
        {list}
      </section>
    )
  }
}


export default Main