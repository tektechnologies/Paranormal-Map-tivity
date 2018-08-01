'use strict';

var app = app || {};

(function(module){

  let productionUrl = 'https://paranormal-map-tivity.herokuapp.com';
  let developmentUrl = 'http://localhost:3000';

  module.inProduction = /^(?!localhost|127)/.test(window.location.hostname);

  module.Environment = module.inProduction ? productionUrl : developmentUrl;


  module.showOnly = (selector) => {
    $(".container").hide();
    $(selector).show();
  }
})(app);



ghost.prototype.toHtml= function() {
  let ghostTemplate = Handlebars.compile(document.getElementById('#ghost-details').innerText);
  ghostTemplate();  
}

// Book.prototype.toHtml = function(){return app.render('#detail-template', this);}

