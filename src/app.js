"use strict";

global.jQuery = require('jquery');
global.$ = require('jquery');
var React = require('react');
var Badge = require('react-bootstrap/lib/Badge');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var PageHeader = require('react-bootstrap/lib/PageHeader');


var Story = React.createClass({
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

var StoriesCollection = React.createClass({
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


var StoriesMenu = React.createClass({
  render: function(){
    return(
      <div>
      <Navbar brand="React Stories">
        <Nav>
          <NavItem eventKey={1} href="#">Popular</NavItem>
          <NavItem eventKey={2} href="#">Recent</NavItem>
        </Nav>
      </Navbar>
      </div>
    );
  }
});



var StoriesBox = React.createClass({
  getInitialState: function(){
    return {storiesData: [{"id": 1, "title": "Title", "url": "url", "score": "+2000"}]}
  },

  componentDidMount: function(){
    $.ajax({
      url: this.props.apiUrl,
      dataType: 'json',
      success: function(data) {
        if (this.isMounted()) {
          this.setState({storiesData: data});
        }
      }.bind(this)
    });
  },

  render: function(){
    var wrapperStyle = {
      width: '1100px',
      margin: 'auto'
    };

    return(
      <div>
        <StoriesMenu/>

        <div style={wrapperStyle}>
          <PageHeader>The newest amazing stories for you! See them all!</PageHeader>
          <StoriesCollection storiesData={this.state.storiesData}/>
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  React.render(<StoriesBox apiUrl="https://fierce-gorge-1132.herokuapp.com/stories" />, document.getElementById("content"));
});


