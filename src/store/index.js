import Vue from "vue";
import Vuex from "vuex";
import { favorite } from "@/store/modules/favorite";
import { search } from "@/store/modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    favorite,
    search,
  },
});
