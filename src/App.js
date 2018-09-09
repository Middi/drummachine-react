import React, { Component } from 'react';
import './App.css';

class Pad extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress = (e) => {
    if (e.key === this.props.stuff.key.toLowerCase()) {
      this.callSample();
    }
  }
  
  callSample = () => {
    this.props.playSample(this.props.stuff.key, this.props.stuff.name);
  }

  render() {
    const { stuff } = this.props;
    return (
        <div className="drum-pad" id={stuff.name} onClick={this.callSample}>
					{stuff.key}
					<audio className='clip' id={stuff.key} src={stuff.url}></audio>
				</div>
    )
  }

}

class Padbank extends Component {

  render() {
    const pads = this.props.keys.map(item => (
      <Pad playSample={this.props.playSample} key={item.key} stuff={item}/>
    ));
    return(
    <div className="pad-container">
      {pads}
    </div>
    ) 
  }
}


class Display extends Component {
	render() {
		return (
      <div id="display" className="display">
        <div className="lcd">
          {this.props.name}
        </div>
      </div>
    )
    }
  }

class App extends Component {

  state = {
    keys: [
      {
        key: "Q",
        name: "Guitar1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        key: "W",
        name: "Guitar2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        key: "E",
        name: "Guitar3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        key: "A",
        name: "Guitar4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        key: "S",
        name: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        key: "D",
        name: "Open-Hats",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        key: "Z",
        name: "Kick-&-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        key: "X",
        name: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        key: "C",
        name: "Closed-Hats",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ],
    display: ' '
  }

  updateDisplay = (name) => {
    this.setState({...this.state, display: name})
  }

  playSample = (trigger, name) => {
    const audio = document.getElementById(trigger);
    audio.currentTime = 0;
    audio.play();
    this.updateDisplay(name);
  }

	render() {
		return (
			<div id="drum-machine" className="drum-machine">
        <Padbank playSample={this.playSample} keys={this.state.keys} />
        <Display name={this.state.display} />

			</div>
		);
	}
}

export default App;
