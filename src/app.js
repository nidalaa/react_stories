"use strict";

var React = require('react');
var $ = require('jquery');

var Story = React.createClass({
  render: function() {
    return (
      <p>
        <b> {this.props.title} </b>
        <a href={this.props.url}> Read it! </a>
        <span> score: {this.props.score} </span>
      </p>
    );
  }
});

var StoriesCollection = React.createClass({
  render: function() {
    var storiesNodes = this.props.storiesData.map(function(story){
      return (
        <li>
          <Story id={story.id} title={story.title} url={story.url} score={story.score}/>
        </li>
      );
    });

    return(
      <ul>
        {storiesNodes}
      </ul>
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
    return(
      <div>
        <h1>The newest amazing stories for you!</h1>
        <h2>See them all:</h2>
        <StoriesCollection storiesData={this.state.storiesData}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  React.render(<StoriesBox apiUrl="https://fierce-gorge-1132.herokuapp.com/stories" />, document.getElementById("content"));
});


