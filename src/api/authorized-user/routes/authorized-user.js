'use strict';

/**
 * authorized-user router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::authorized-user.authorized-user');
