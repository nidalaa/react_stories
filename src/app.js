"use strict";

var React = require('react');
var Router = require('react-router');
var Redirect = Router.Redirect;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var MainMenu = require('./main_menu');
var RecentStories = require('./stories/collections/recent_stories');
var PopularStories = require('./stories/collections/popular_stories');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <MainMenu/>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="popular" path="popular" handler={PopularStories}/>
    <Route name="recent" path="recent" handler={RecentStories}/>
    <Redirect from="/" to="popular" />
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("content"));
  });
});

