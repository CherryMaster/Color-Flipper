import React from 'react';
import ReactDOM from 'react-dom';
import AddNewColor from './comps/AddNewColor';
import ColorFlipper from './comps/ColorFlipper';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allColors: [],
      newBg: ''
    }
  }

  addColor = (newColor) => {
    this.setState({
      allColors: [newColor, ...this.state.allColors]
    });
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * this.state.allColors.length);
  }

  setNewColor = (newColor) => {
    this.setState({
      newBg: newColor
    })
  }

  render(){
    const {allColors, newBg} = this.state;
    //console.log("In render: "+newBg);
    return (
      <div>
        <AddNewColor
          addColor={this.addColor}
          allColors={allColors}
        />
        <ColorFlipper
          allColors={allColors}
          getRandomNumber={this.getRandomNumber}
          setNewColor={this.setNewColor}
        />
        {
          allColors.length>0 && ( <ul>
            {allColors.map(color =>
              <li key={color}>{color}</li>
            )}
          </ul>)
        }
      </div>
    );
  }
}

export default App;