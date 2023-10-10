'use strict';

/**
 * push service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::push.push');
