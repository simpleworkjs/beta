'use strict';

module.exports = {
  app: {
    name: 'SimpleWorkJS Beta',
    port: 3000,
  },

  orm: {
    dialect: 'sqlite',
    storage: 'data.sqlite',
    logging: false,
  },

  pubsub: {
    enabled: true,
  },

  models: {
    // Models are loaded from ./models/*.js by default.
    // Override per environment if needed.
    path: 'models',
  },

  // Static assets and views default to the bundled files in @simpleworkjs/backend.
  // Override these if you want to provide your own templates/assets.
  // static: { path: 'public' },
  // views:  { engine: 'ejs', path: 'views' },
};
