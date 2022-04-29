import api from "./apiService";

const foodService = {
  get: async (data) => {
    let res = await api.get("food", data);
    return res.data;
  },
};

export default foodService;
