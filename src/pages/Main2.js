import React, { Component } from 'react';


class Main2 extends Component {

  state={
    i: 0,
    colors:['red','green','blue']
  }

  render() {

    return (
      <section className="main2">

        <div>
          <div style={{ backgroundColor: this.state.colors[this.state.i] , color: '#fff' }} className="poligon"></div>
        </div>

      </section>
    )
  }
}


export default Main2