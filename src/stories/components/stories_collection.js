"use strict";

var React = require('react');
var ListGroup = require('react-bootstrap').ListGroup;

var Story = require('./story');

module.exports = React.createClass({
  render: function() {

    return(
      <ListGroup>
        {this.props.storiesData.map(function(story){
          return <Story key={story.id} {...story}/> ;
        })}
      </ListGroup>
    );
  }
});
