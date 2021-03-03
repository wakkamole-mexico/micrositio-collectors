import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Full from "../views/Full.vue";
import Home from "../views/Home.vue";
import Sets from "../views/Sets.vue";
import Comunidad from "../views/Comunidad.vue";
import Delivery from "../views/Delivery.vue";
import Spotify from "../views/Spotify.vue";
import Mundos from "../views/Mundos.vue";
import Privacidad from "../views/Privacidad.vue";
import Pruebas from '../views/Pruebas.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Full',
    redirect: '/home',
    component: Full,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'sets',
        name: 'Sets',
        component: Sets
      },
      {
        path: 'galeria-collectors',
        name: 'Comunidad',
        component: Comunidad
      },
      {
        path: 'descargables',
        name: 'Mundos',
        component: Mundos
      },
      {
        path: 'filtros',
        name: 'Filtros',
        component: Pruebas
      },
      {
        path: 'quiz',
        name: 'Quiz',
        component: Delivery
      },
      {
        path: 'spotify',
        name: 'Spotify',
        component: Spotify
      },
      {
        path: 'privacidad',
        name: 'Privacidad',
        component: Privacidad
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: '',
  scrollBehavior: () => ({y: 0, x: 0}),
  routes
});

export default router;
