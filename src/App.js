import React, { Component } from 'react';
import './App.css';

class Pad extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
     console.log(e.key)
  }
  
  playSound(e) {
    const audio = e.target.children[0];
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    const { stuff } = this.props;
    return (
        <div className="drum-pad" onClick={this.playSound}>
					{stuff.keyTrigger}
					<audio className='clip' id={stuff.keyTrigger} src={stuff.url}></audio>
				</div>
    )
  }

}

class Padbank extends Component {

  state = {
    keys: [
      {
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ]
  }


  render() {
    const items = this.state.keys.map(item => (
      <Pad key={item.keyTrigger} stuff={item}/>
    ));
    return(
    <div className="pad-container">
      {items}
    </div>
    ) 
  }
}

class App extends Component {
	render() {
		return (
			<div id="drum-machine" className="drum-machine">
        <Padbank />
				<div id="display" className="display" />
			</div>
		);
	}
}

export default App;
