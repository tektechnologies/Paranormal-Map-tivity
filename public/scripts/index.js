'use strict';

var app = app || {};

(function(module){

  let productionUrl = 'https://paranormal-map-tivity.herokuapp.com';
  let developmentUrl = 'http://localhost:3000';

  module.inProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.Environment = module.inProduction ? productionUrl : developmentUrl;

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };
})(app);
