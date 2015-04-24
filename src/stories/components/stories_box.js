"use strict";

require('es6-promise').polyfill();

var React = require('react');
var PageHeader = require('react-bootstrap').PageHeader;

var StoriesCollection = require('./stories_collection');

module.exports = React.createClass({
  getInitialState: function(){
    return {storiesData: []}
  },

  componentDidMount: function(){
  var _this = this;

    fetch("https://fierce-gorge-1132.herokuapp.com/stories" + this.props.path, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        if (_this.isMounted()) {
          _this.setState({storiesData: json});
        }
      })
      .then(undefined, function(error) {
        alert("Error during fetching stories. Try to refresh page, please.")
      });
  },

  render: function(){
    return(
      <div className='wrapper'>
        <PageHeader>The newest amazing stories for you! See them all!</PageHeader>
        <StoriesCollection storiesData={this.state.storiesData}/>
      </div>
    );
  }
});
