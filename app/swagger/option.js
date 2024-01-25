const options = {
  info: {
    version: '1.0.0',
    title: 'Adopte un Tech API',
    description: "Détails de l'API",
    contact: {
      name: 'Matthieu Le Priol',
      url: 'https://www.mimouss.fr',
      email: 'lepriol.matthieu@gmail.com',
    },

  },
  baseDir: __dirname,
  security: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  explorer: true,
  exposeSwaggerUI: true,
  swaggerUIPath: '/swagger-ui',
  exposeApiDocs: false,
  swaggerUiOptions: {
    customSiteTitle: 'Swagger UI AUT API',
    // swaggerUrls: [
    //   {
    //     url: 'https://www.mimouss.fr/api/home',
    //     name: 'Home',
    //   },
    //   // {
    //   //   url: 'https://www.mimouss.fr/api/oside',
    //   //   name: 'Oside',
    //   // },
    // ],
    primaryName: 'Home',
  },
  filesPattern: '../swagger/docs/*.js',

};

module.exports = options;
