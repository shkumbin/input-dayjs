# input-dayjs 
[![npm](https://img.shields.io/npm/v/input-dayjs.svg)](https://www.npmjs.com/package/input-dayjs)
[![Build Status](https://travis-ci.org/shkumbin/input-dayjs.svg?branch=master)](https://travis-ci.org/shkumbin/input-dayjs)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

React datetime picker powered by [dayjs](https://github.com/iamkun/dayjs)

The design is from https://dribbble.com/shots/1439965-Due-Date-and-Time-Picker.

The icon is from [ionicons](http://ionicons.com/).

### Installation
``` sh
npm i input-dayjs --save
```

**Notice:** This module requires [dayjs](https://www.npmjs.com/package/dayjs) as a [peerDependency](https://docs.npmjs.com/files/package.json#peerdependencies).

### Demo
http://shkumbin.github.io/input-dayjs

### Usage
``` javascript
<InputDayJS
  dayjs={this.state.dayjs}
  onChange={this.handleChange}
  onSave={this.handleSave}
  minStep={1} // default
  hourStep={1} // default
  prevMonthIcon="ion-ios-arrow-left" // default
  nextMonthIcon="ion-ios-arrow-right" // default
/>
```
Check [app.js](https://github.com/wangzuo/input-dayjs/blob/master/example/app.js) for a working example.

### Development
- npm install
- npm start
- http://localhost:8080

### License
ISC
