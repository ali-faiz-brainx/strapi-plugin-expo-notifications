module.exports = [
  {
    method: "GET",
    path: "/get-plugin-config",
    handler: "exponotification.getPluginConfig",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
      // auth: false,
    },
  },
  {
    method: "GET",
    path: "/find",
    handler: "exponotification.find",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
      // auth: false,
    },
  },
  {
    method: "GET",
    path: "/findFrom",
    handler: "exponotification.findFrom",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/recipientsFrom/:start",
    handler: "exponotification.recipientsFrom",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
      // auth: false,
    },
  },
  {
    method: "GET",
    path: "/send-to-all",
    handler: "exponotification.sendToAll",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
      // auth: false,
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "exponotification.create",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
      // auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "exponotification.delete",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
      // auth: false,
    },
  },
  {
    method: "PUT",
    path: "/update/:id",
    handler: "exponotification.update",
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
      // auth: false,
    },
  },
];
