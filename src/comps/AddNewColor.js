import React from 'react';

class AddNewColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: ''
    }
  }

  validInput = () => {
    const regex = /#[a-f0-9]{6}/i;
    return regex;
  }

  handleInput = (e) => {
    this.setState({
      newColor: e.target.value
    })
  }

  onClick = () => {
    const { addColor, allColors } = this.props;
    const { newColor } = this.state;

    if (allColors.indexOf(newColor) === -1 && newColor.match(this.validInput())) {
      addColor(newColor);
    }

    this.setState({
      newColor: ''
    })
  }

  render() {
    const { newColor } = this.state;
    return (
      <div>
        <h2>Add new color</h2>
        <input
          type="text"
          value={newColor}
          onInput={this.handleInput}
        />
        <button onClick={this.onClick}>
          Submit!
        </button>
      </div>
    );
  }
}

export default AddNewColor;