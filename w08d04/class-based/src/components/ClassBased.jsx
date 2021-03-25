import {Component} from 'react';
// React.Component

class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'jstamos',
      internalCounter: props.counter + 1,
      something: 2,
      interviewers: {},
      appointments: []
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  launchAlert() {
    alert('does this work?');
  }

  clickHandler() {
    // alert('everything is working?');
    // this.state.internalCounter += 1; // this is wrong
    this.setState({
      internalCounter: this.state.internalCounter + 1,
      someNewKey: 'new value'
    });

    // this.launchAlert();
  }

  onAdd(interview) {
    this.setState({interview});
  }

  // onAdd={onAdd}
  
  render() {
    // this.setState({}); // don't do this

    // this.props.setCounter();
    return (
      <div>
        <h2>This is a class-based component</h2>
        <h3>Username: {this.state.username}</h3>
        <h3>Current counter: {this.props.counter}</h3>
        <h3>Current internal counter: {this.state.internalCounter}</h3>

        <button onClick={this.clickHandler}>Increment</button>
      </div>
    );
  }
}

export default ClassBased;

// const component = new ClassBased(props);
// component.props = props;