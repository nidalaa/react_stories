"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

module.exports = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var activeItem = {
      'font-weight': 'bold'
    };

    return(
      <Navbar brand="React Stories">
        <Nav>
          <NavItem><Link to="popular" style={this.isActive("popular", null, null) ? activeItem : null}>Popular</Link></NavItem>
          <NavItem><Link to="recent" style={this.isActive("recent", null, null) ? activeItem : null}>Recent</Link></NavItem>
        </Nav>
      </Navbar>
    );
  }
});

