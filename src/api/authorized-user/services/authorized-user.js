'use strict';

/**
 * authorized-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::authorized-user.authorized-user');
