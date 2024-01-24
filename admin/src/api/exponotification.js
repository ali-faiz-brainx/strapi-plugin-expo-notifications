import { request } from "@strapi/helper-plugin";

const expoNotificationsRequests = {
  getPluginConfig: async () => {
    return await request(`/expo-notifications/get-plugin-config`, {
      method: "GET",
    });
  },

  getPagedNotifications: async (page = 1, pageSize = 10) => {
    return await request(
      `/expo-notifications/findFrom/?page=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
      }
    );
  },

  getPagedRecipients: async (start = 0) => {
    return await request(`/expo-notifications/recipientsFrom/${start}`, {
      method: "GET",
    });
  },

  createNotification: async (data, tokens) => {
    return await request(`/expo-notifications/create`, {
      method: "POST",
      body: { data: data, tokens: tokens },
    });
  },

  sendNotificatiosToAll: async () => {
    return await request(`/expo-notifications/send-to-all`, {
      method: "GET"
    });
  },

  editNotification: async (id, data) => {
    return await request(`/expo-notifications/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },

  deleteNotification: async (id) => {
    return await request(`/expo-notifications/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default expoNotificationsRequests;
