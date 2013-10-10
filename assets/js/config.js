require.config({
  paths: {
    backbone: "../../bower_components/backbone/backbone",
    jquery: "../../bower_components/jquery/jquery",
    marionette: "../../bower_components/marionette/lib/backbone.marionette",
    underscore: "../../bower_components/underscore/underscore",
    handlebars: "../../bower_components/handlebars/handlebars",
    "handlebars.runtime": "../../bower_components/handlebars/handlebars.runtime",
    R: "prelude"
  },
  shim: {
    jquery: {
      exports: "jQuery"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: [
        "jquery",
        "underscore"
      ],
      exports: "Backbone"
    },
    R: {
      exports: "R"
    },
    marionette: {
      deps: [
        "jquery",
        "underscore",
        "backbone"
      ],
      exports: "Marionette"
    }
  }
});

/* Require the initial module */
require(["app"], function() {
  "use strict";
});
