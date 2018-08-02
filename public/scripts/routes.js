'use strict';

page('/', () => app.pages.initMapPage());
page('/detail/:type/:index', ctx => {
  app.sightings.loadOne(ctx.params.type, parseInt(ctx.params.index));
});
page('/about', ctx => app.pages.initAboutPage(ctx));

page();