"use strict";

var React = require('react');
var StoriesBox = require('../components/stories_box');

module.exports = React.createClass({
  render: function() {
    return(
      <StoriesBox apiUrl="https://fierce-gorge-1132.herokuapp.com/stories"/>
    );
  }
});