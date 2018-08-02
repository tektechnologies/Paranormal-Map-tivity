'use strict';

page('/detail/:type/:index', ctx => {
  app.sightings.loadOne(ctx.params.type, parseInt(ctx.params.index));
});
page('/', () => app.pages.initMap());
page('/about', ctx => app.pages.initAboutPage(ctx));

page();