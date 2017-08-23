var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');

//load foundation using styleloader and cssloader
// require('style!css!foundation-sites/dist/foundation.min.css')
// $(document).foundation();

//load new style
require('style!css!sass!appStyles')

// debugger;
ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
