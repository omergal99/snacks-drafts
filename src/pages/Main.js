import React, { Component } from 'react';


class Main extends Component {
  state = {
    isOverlayOpen: false,
    imgNumber: '1'
  }

  componentDidMount() {
  }

  imgSelected(ev) {
    // console.log('hiii',ev.target.getAttribute('data-number'))
    console.log('hiii', ev.target.dataset.number)
    this.setState({ isOverlayOpen: true, imgNumber: ev.target.dataset.number })
  }
  
  closeOverlay(){
    this.setState({ isOverlayOpen: false })
  }

  render() {
    return (
      <section className="main">

        <header>
          <h2>New Zeland</h2>
          <p>The project may be tricier then it seems, look aroud carfully.</p>
        </header>

        <div className="img-container flex wrap space-even align-center">
          <div onClick={this.imgSelected.bind(this)} data-number="1" className="circle"></div>
          <div onClick={this.imgSelected.bind(this)} data-number="2" className="reactangle"></div>
          <div onClick={this.imgSelected.bind(this)} data-number="3" className="square"></div>
          <div onClick={this.imgSelected.bind(this)} data-number="4" className="triangle"> </div>
        </div>

        {this.state.isOverlayOpen &&
          <div className="overlay">
            <h2>New Zeland</h2>
            <div className="btn-close" onClick={this.closeOverlay.bind(this)}>X</div>
            <div className="img-Extended"
              style={{ backgroundImage: `url("assets/img/new-zealand-${this.state.imgNumber}.jpg")` }}>
            </div>
          </div>
        }

      </section>
    )
  }
}


export default Main