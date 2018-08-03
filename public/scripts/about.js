'use strict';

var app = app || {};

(function(module){

  var pages = {};
  module.pages = pages;

  pages.initMap = () => {
    console.log('loading');
    app.showOnly('.map-view');
    $('.check').show();
  };

  pages.initAboutPage = () => {
    app.showOnly('.about');
  };

  pages.initNothing = () => {
    app.showOnly('.fourOhFour-view');
  };

  pages.initDetailPage = () => {
    app.showOnly('.detail-view');
    $('.detail-view').empty();
  };


})(app);