"use strict";

global.jQuery = require('jquery');
global.$ = require('jquery');

var Badge = require('react-bootstrap/lib/Badge');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var PageHeader = require('react-bootstrap/lib/PageHeader');

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


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


var StoriesBox = React.createClass({
  getInitialState: function(){
    return {storiesData: []}
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
      <div style={wrapperStyle}>
        <PageHeader>The newest amazing stories for you! See them all!</PageHeader>
        <StoriesCollection storiesData={this.state.storiesData}/>
      </div>
    );
  }
});

var RecentStories = React.createClass({
  render: function() {
    return(
      <StoriesBox apiUrl="https://fierce-gorge-1132.herokuapp.com/stories/recent"/>
    );
  }
});

var PopularStories = React.createClass({
  render: function() {
    return(
      <StoriesBox apiUrl="https://fierce-gorge-1132.herokuapp.com/stories"/>
    );
  }
});


var App = React.createClass({

  mixins: [ Router.State ],

  render: function() {
    var activeItem = {
      'font-weight': 'bold'
    };

    return(
      <div>
        <Navbar brand="React Stories">
          <Nav>
            <NavItem><Link to="popular" style={this.isActive("popular", null, null) ? activeItem : null}>Popular</Link></NavItem>
            <NavItem><Link to="recent" style={this.isActive("recent", null, null) ? activeItem : null}>Recent</Link></NavItem>
          </Nav>
        </Navbar>

        <RouteHandler/>
      </div>
    );
  }
});




var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="popular" path="popular" handler={PopularStories}/>
    <Route name="recent" path="recent" handler={RecentStories}/>
    <DefaultRoute handler={PopularStories}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("content"));
  });
});

