/*
 See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
 */
'use strict';

var React = require('react');
var assign = require('lodash/assign');

//needs props maxPage, currentPage, nextFunction, prevFunction
var GridShowMore = React.createClass({
  displayName: 'GridShowMore',

  getDefaultProps: function getDefaultProps() {
    return {
      "maxPage": 0,
      "showMoreText": "",
      "previousText": "",
      "currentPage": 0,
      "useGriddleStyles": true,
      "showMoreClassName": "griddle-showmore",
      "showMoreIconComponent": null
    };
  },

  render: function render() {
    var showMoreButton = React.createElement('button', { type: 'button', onClick: this.props.addMoreLevel, style: this.props.useGriddleStyles ? { "color": "#222", border: "none", background: "none", margin: "0 0 0 10px" } : null }, this.props.showMoreIconComponent, this.props.showMoreText);

    return React.createElement('div', { style: null }, showMoreButton);
  }
});

module.exports = GridShowMore;
