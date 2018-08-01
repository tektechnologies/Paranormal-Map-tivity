'use strict'

page('/', () => app.pages.initMapPage());
page('/about', ctx => app.pages.initAboutPage(ctx));

page();