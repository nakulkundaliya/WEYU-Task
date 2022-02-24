import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { PointRepo } from "~/types";

export default ($axios: NuxtAxiosInstance): PointRepo => ({
  async fetchPoints(params?: { page: number; per: number }) {
    try {
        const res = await $axios.get("https://weyu-backend.herokuapp.com/api/points", {
          params,
        });
        if (res.status === 200) {
          return res.data;
        }
    } catch (error) {
      console.log("error", error);
    }
  },
});
