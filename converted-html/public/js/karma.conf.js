// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(config) {
    return config.set({
      basePath: "",
      frameworks: ["jasmine"],
      files: ["test/polyfills/bind.js", "bower_components/angular/angular.js", "bower_components/angular-mocks/angular-mocks.js", "src/renderer/canvas.js", "src/easypiechart.js", "src/angular.directive.js", "test/**/*.js"],
      exclude: [],
      port: 8080,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      reporters: ['progress', 'dots'],
      browsers: ['Chrome', 'PhantomJS'],
      singleRun: false
    });
  };

}).call(this);
