import cx from 'classnames';
import React, { Component } from 'react';
import InputSlider from 'react-input-slider';

export default class extends Component {
  changeHours = pos => {
    let d = this.props.dayjs;
    d = d.set('hour', pos.x);
    this.props.onChange(d);
  };

  changeMinutes = pos => {
    let d = this.props.dayjs;
    d = d.set('minute', pos.x);
    this.props.onChange(d);
  };

  render() {
    const d = this.props.dayjs;

    return (
      <div className={cx('m-time', this.props.className)}>
        <div className="showtime">
          <span className="time">{d.format('HH')}</span>
          <span className="separater">:</span>
          <span className="time">{d.format('mm')}</span>
        </div>

        <div className="sliders">
          <div className="time-text">Hours:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={23}
            xstep={this.props.hourStep}
            x={d.hour()}
            onChange={this.changeHours}
          />
          <div className="time-text">Minutes:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={59}
            xstep={this.props.minStep}
            x={d.minute()}
            onChange={this.changeMinutes}
          />
        </div>
      </div>
    );
  }
}
