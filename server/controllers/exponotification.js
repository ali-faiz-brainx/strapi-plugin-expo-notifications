"use strict";

module.exports = {
  async getPluginConfig(ctx) {
    try {
      const testToken = await strapi
        .plugin("expo-notifications")
        .config("testToken");
      const response = {
        testToken: testToken,
      };
      return response;
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async find(ctx) {
    try {
      return await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async findFrom(ctx) {
    try {
      return await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .findFrom(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async recipientsFrom(ctx) {
    try {
      return await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .recipientsFrom(ctx.params.start);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async sendToAll(ctx){
    try {
      ctx.body = await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .sendToAll();
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async update(ctx) {
    try {
      ctx.body = await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .update(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async delete(ctx) {
    try {
      ctx.body = await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
