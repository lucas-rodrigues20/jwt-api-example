const expressJwt = require('express-jwt');

function authentication(routePrefix="") {

  return expressJwt({ secret: process.env.JWT_SECRET }).unless({
    path: [
      // public routes that don't require authentication
      `${routePrefix}/users/authenticate`
    ]
  });
}

module.exports = { authentication };
