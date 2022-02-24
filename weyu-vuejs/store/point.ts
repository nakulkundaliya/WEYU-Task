import { MutationTree, ActionTree } from "vuex";
import { Repositories, PointsData } from "~/types";
import { RootState } from "~/store";

export const state = () => ({
  points: [] as PointsData[],
});

export type PointState = ReturnType<typeof state>;

export const mutations: MutationTree<PointState> = {
  setPoint(state, points: PointsData[]) {
    state.points = points;
  },
};

export const actions: ActionTree<PointState, RootState> = {
  async fetchPoints(
    { commit },
    params: {
      api: Repositories;
      page?: number;
      per?: number;
    }
  ) {
    const { data }  = await params.api.pointRepo.fetchPoints({
      page: params.page,
      per: params.per,
    });
    commit("setPoint", data);
  },
};
