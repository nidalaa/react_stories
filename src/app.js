"use strict";

var React = require('react');

var SimpleComponent = React.createClass({
  render: function() {
    return (
      <div>
        Hello World! :):)
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(){
  React.render(<SimpleComponent/>, document.getElementById("content"));
});


