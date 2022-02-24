import { Plugin } from "@nuxt/types";
import { Repositories } from "~/types";
import pointRepository from "~/repository/pointRepository";

declare module "vue/types/vue" {
  interface Vue {
    $api: Repositories;
  }
}

const myPlugin: Plugin = (ctx, inject) => {
  const repositories: Repositories = {
    pointRepo: pointRepository(ctx.$axios),
  };
  inject("api", repositories);
};

export default myPlugin;
