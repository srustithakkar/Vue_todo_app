import axios from "axios";
import VueAxios from "vue-axios";

export default {
  install(Vue) {
    axios.defaults.baseURL = "https://api.stackexchange.com";
    Vue.use(VueAxios, axios);
  }
};
