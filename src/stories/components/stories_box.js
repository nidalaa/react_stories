"use strict";

var React = require('react');
var PageHeader = require('react-bootstrap').PageHeader;

var StoriesCollection = require('./stories_collection');

module.exports = React.createClass({
  getInitialState: function(){
    return {storiesData: []}
  },

  componentDidMount: function(){
    jQuery.ajax({
      url: "https://fierce-gorge-1132.herokuapp.com/stories" +this.props.path,
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
