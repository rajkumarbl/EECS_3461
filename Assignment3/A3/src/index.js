// React -> manage components
// ReactDOM -> render component
import React, {Component} from 'react'; // 'react' is literally the node_module name
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Staff from './staff';
import Resident from './resident';

const staffApp = document.getElementById('staff');
const resApp = document.getElementById('resident');

if (staffApp) {
ReactDOM.render(<Staff />, document.querySelector('.staffcontainer'));
} else if (resApp) {
 ReactDOM.render(<Resident />, document.querySelector('.rescontainer'));
}

