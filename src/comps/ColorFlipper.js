import React from 'react';
import Color from './Color';

class ColorFlipper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      actColor: 'none'
    }
  }

  onClick = () => {
    const { allColors, getRandomNumber, setNewColor } = this.props;
    const { actColor } = this.state;

    const RandomNumber = getRandomNumber();
    console.log(RandomNumber);
    //actColor=allColors[RandomNumber];
    this.setState({
      actColor: allColors[RandomNumber]
    });

    setNewColor(actColor);
  }

  render(){
    const {allColors, getRandomNumber, setNewColor} = this.props;
    const {actColor} = this.state;

    return (
      <div>
        <h2>Background Color:
          <Color value={actColor}/>
        </h2>
        <button onClick={this.onClick}>
          Click me!
        </button>
      </div>
    );
  }
}

export default ColorFlipper;