'use strict';

page('/', () => app.pages.initMapPage());
page('/detail/:type/:index', ctx => {
  console.log(ctx);
  console.log(ctx.params.type);
  console.log(ctx.params.index);
  console.log(app.sightings.loadOne);
  app.sightings.loadOne(ctx.params.type, parseInt(ctx.params.index));
});
page('/about', ctx => app.pages.initAboutPage(ctx));

page();