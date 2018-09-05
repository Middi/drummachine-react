import React, { Component } from 'react';
import './App.css';


const keys = [
	{
		keyCode: 81,
		keyTrigger: "Q",
		id: "Heater-1",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
	},
	{
		keyCode: 87,
		keyTrigger: "W",
		id: "Heater-2",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
	},
	{
		keyCode: 69,
		keyTrigger: "E",
		id: "Heater-3",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
	},
	{
		keyCode: 65,
		keyTrigger: "A",
		id: "Heater-4",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
	},
	{
		keyCode: 83,
		keyTrigger: "S",
		id: "Clap",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
	},
	{
		keyCode: 68,
		keyTrigger: "D",
		id: "Open-HH",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
	},
	{
		keyCode: 90,
		keyTrigger: "Z",
		id: "Kick-n'-Hat",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
	},
	{
		keyCode: 88,
		keyTrigger: "X",
		id: "Kick",
		url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
	},
	{
		keyCode: 67,
		keyTrigger: "C",
		id: "Closed-HH",
		url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
	}
];


class Pad extends Component {
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
  render() {
    const items = keys.map(item => (
      <Pad stuff={item}/>
    ));
    return(
    <div className="pad-container">
      {items}
    </div>
    ) 
  }
}

class App extends Component {
  

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.key === this.props.keycode) {
      // this.playSound();
    }
    console.log(e.key);
  }
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
