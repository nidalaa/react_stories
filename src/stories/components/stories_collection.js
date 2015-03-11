"use strict";

var React = require('react');
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Story = require('./story');

module.exports = React.createClass({
  render: function() {

    var storiesNodes = this.props.storiesData.map(function(story){
      return (
        <ListGroupItem>
          <Story id={story.id} title={story.title} url={story.url} score={story.score}/>
        </ListGroupItem>
      );
    });

    return(
      <ListGroup>
        {storiesNodes}
      </ListGroup>
    );
  }
});
