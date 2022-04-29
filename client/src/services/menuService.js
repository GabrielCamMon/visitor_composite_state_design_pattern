import api from "./apiService";

const menuService = {
  get: async (data) => {
    let res = await api.get("menu", data);
    return res.data;
  },
};

export default menuService;
