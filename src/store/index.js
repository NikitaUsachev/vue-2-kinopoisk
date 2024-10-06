import Vue from 'vue';
import Vuex from 'vuex';
import { favorite } from "@/store/modules/favorite";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    favorite,
  },
});
