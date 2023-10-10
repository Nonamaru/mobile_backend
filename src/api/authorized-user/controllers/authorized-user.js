'use strict';

/**
 * authorized-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::authorized-user.authorized-user');
