'use strict';

page('/', () => app.pages.initMapPage());
page('/detail/:type/:index', ctx => {
  app.sightings.fetchOne(ctx,initDetailModal);
});
page('/about', ctx => app.pages.initAboutPage(ctx));

page();