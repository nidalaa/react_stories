"use strict";

var React = require('react');
var Badge = require('react-bootstrap').Badge;

module.exports = React.createClass({
  render: function() {
    return (
      <p>
        <Badge>{this.props.score}</Badge>
        <b> {this.props.title} </b>
        <a href={this.props.url}> Read it! </a>
      </p>
    );
  }
});