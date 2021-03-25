import {Component} from 'react';

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      interval: null
    };

    this.onChange = this.onChange.bind(this);
  }

  // make an AJAX request, establish a socket connection, set up an interval
  // only called once
  componentDidMount() {
    console.log('component has mounted!');

    const interval = setInterval(() => {
      // make an ajax request
      console.log('interval has fired');
    }, 5000);

    this.setState({ interval });
  }

  // called every time the component updates, changes to props or state
  // compare current state to previous state
  componentDidUpdate(prevProps, prevState) {
    // this.props
    // this.state
    console.log('component has updated');
  }

  // cleanup, remove socket connection, clear intervals
  // only called once
  componentWillUnmount() {
    console.log('component will be unmounted');

    clearInterval(this.state.interval);
  }

  onChange(event) {
    this.setState({ title: event.target.value });
  }


  render() {
    return (
      <div>
        <h2>Lifecycle Methods</h2>
        <input 
          onChange={this.onChange}
          value={this.state.title}
        />
        <h2>Title: {this.state.title}</h2>
      </div>
    );
  }
}

export default Lifecycle;
