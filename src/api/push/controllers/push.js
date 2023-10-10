'use strict';

/**
 * push controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::push.push');
