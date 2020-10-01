import * as React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';

dayjs.extend(duration);
dayjs.extend(utc);

class Timer extends React.PureComponent {
  constructor(props) {
    super();

    this.state = {
      time: props.exp - dayjs().unix()
    };

  }

  componentDidMount() {
    if (this.state.time > 0) {
      this.timerID = setInterval(
          () => this.tick(),
          1000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1
    });

    if (this.state.time === 0) {
      clearInterval(this.timerID);
    }
  }

  render() {
    const durationObject = dayjs.duration(this.state.time, `seconds`).asMilliseconds();
    return (<p>
      {dayjs.utc(durationObject).format(`HH : mm : ss`)}
    </p>);
  }
}

Timer.propTypes = {
  exp: PropTypes.number
};

export default Timer;
