const state = () => {
  return {
    homeData: null,
  };
};

const mutations = {
  UPDATE_HOME_DATA(state, response) {
    state.homeData = response.data;
  },
};

const actions = {
  async getHomeData({ commit }) {
    try {
      const { data } = await this.$axios.get("/home");
      commit("UPDATE_HOME_DATA", data);
    } catch (error) {
      return console.error(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
