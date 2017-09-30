'use strict';

var angular = require('angular');

// angular modules
require('angular-bootstrap');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('./templates');

window._ = require('lodash');


  var requires = [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'templates',
    require('./controllers').name,
    require('./services').name,
    require('./directives').name
  ];


module.exports = angular.module('app', requires)
.constant('AppSettings', require('./constants'))
.config(require('./on_config'))
.run(require('./on_run'));

