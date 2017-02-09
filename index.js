import React from 'react';

class countUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      partial: 0,
      steps: Math.ceil(this.props.duration / 30)
    };

    this.upValue = this.upValue.bind(this);
  }

  upValue(countTo, step = 0, value = 0) {
    const increment = countTo / this.state.steps;
    value = this.state.value + increment;
    const partial = Math.floor(value)

    const timer = window.setTimeout(() => {
      step++;

      if(step >= this.state.steps || value > countTo )
        this.setState({
          value: countTo,
          partial: countTo
        });
      else {
        this.setState({
          value: value,
          partial: partial
        });
        this.upValue(countTo, step, value);
      }
    }, 30);
  }

  render() {
    if(this.props.countTo && this.props.countTo > 0 && this.state.value == 0)
      this.upValue(this.props.countTo);

    return (
      <span>{this.state.partial}</span>
    );
  }
}

countUp.propTypes = {
  countTo: React.PropTypes.number.isRequired,
  duration: React.PropTypes.number.isRequired
};

export default countUp;
