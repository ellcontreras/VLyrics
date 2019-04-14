import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LyricAdd from "./views/LyricAdd";
import LyricView from "./views/LyricView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/lyric/new",
      name: "add lyric",
      component: LyricAdd
    },
    {
      path: "/lyric/:id",
      name: "lyric view",
      component: LyricView
    }
  ]
});
