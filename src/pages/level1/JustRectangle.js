import React, { Component } from 'react';


class JustRectangle extends Component {

  state = {
    idx: 2,
    colors: ['red', 'green', 'blue']
  }

  render() {

    return (
      <section className="JustRectangle">

        <div>
          <div className="poligon"
            style={{ backgroundColor: this.state.colors[this.state.idx], color: '#fff' }}>
          </div>
        </div>

      </section>
    )
  }
}


export default JustRectangle