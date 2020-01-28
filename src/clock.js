import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  };

  getTime() {
    const currentTIme = new Date();
      return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: hours >= 12 ? 'pm' : 'am'
    }
  }

  setTime() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState({currentTime: this.getTime}, this.setTimer)
  }
  
  render() {
    const {hours, minutes, seconds, ampm} = this.state;

    return (
      <div className="clock">
      {
        hours == 0 ? 12 :
              (hours > 12) ?
                hours - 12 : hours
          }:{
            minutes > 9 ? minutes : `0${minutes}`
          }:{
            seconds > 9 ? seconds : `0${seconds}`
          } {ampm}
      }
      </div>
    )
  }
};
