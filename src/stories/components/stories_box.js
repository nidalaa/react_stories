"use strict";

var React = require('react');
var PageHeader = require('react-bootstrap').PageHeader;

var StoriesCollection = require('./stories_collection');

module.exports = React.createClass({
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
    return(
      <div className='wrapper'>
        <PageHeader>The newest amazing stories for you! See them all!</PageHeader>
        <StoriesCollection storiesData={this.state.storiesData}/>
      </div>
    );
  }
});