import React from 'react';
import styled from 'styled-components';
import AddNewColor from './comps/AddNewColor';
import ColorFlipper from './comps/ColorFlipper';

const Container = styled.div`
background-color: ${props => props.actColor};
width: 50vw;
height: 50vh;
margin: 25vh 0 0 25vw;
border: 5px ridge red;
display: flex;
`
const AppHolder = styled.div`

`
const ListOfColors = styled.div`

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
        <AppHolder>
        <AddNewColor
          addColor={this.addColor}
          allColors={allColors}
        />
        <ColorFlipper
          allColors={allColors}
          getRandomNumber={this.getRandomNumber}
          setNewColor={this.setNewColor}
        />
        </AppHolder>
        <ListOfColors>
        {
          allColors.length>0 && ( <ul>
            {allColors.map(color =>
              <li key={color}>{color}</li>
            )}
          </ul>)
        }
        </ListOfColors>
      </Container>
    );
  }
}

export default App;