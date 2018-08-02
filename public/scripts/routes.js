'use strict'

page('/', () => app.pages.initMap());
page('/about', ctx => app.pages.initAboutPage(ctx));

page();