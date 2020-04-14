import React, { Component } from 'react';

class RefsButtom extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      value: 'haha',
      active: false,
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      if (e.target && e.target.matches('.cat')) return;
      this.setState({ active: false });
    });
  }

  componentDidUpdate(preProps, preState) {
    // console.log('preState :', preState);
    // console.log('this.state :', this.state);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click');
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
    if (this.textContent !== null) {
      this.textInput.current.focus();
    }
  };

  handleQr = (e) => {
    // e.preventDefault();
    e.stopPropagation();
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          ref={this.textInput}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>click me!</button>
        <img
          className="cat"
          onClick={this.handleQr}
          src="../images/cat.pnt"
          alt="cat"
          style={{ display: this.state.active ? 'block' : 'none', width: 50, height: 50 }}
        />
      </div>
    );
  }
}

export default RefsButtom;
