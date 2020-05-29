import React from 'react';
import styled from 'styled-components';
import AddNewColor from './comps/AddNewColor';
import ColorFlipper from './comps/ColorFlipper';

const Container = styled.div`
background-color: ${props => props.actColor};
`

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
      <Container actColor={newBg}>
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
      </Container>
    );
  }
}

export default App;