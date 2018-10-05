import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import Home from './components/Home.vue';
import Fixtures from './components/Fixtures.vue';
import FixturesMatchday from './components/FixturesMatchday.vue';
import Fixture from './components/Fixture.vue';
import Teams from './components/Teams.vue';
import Team from './components/Team.vue';
import Players from './components/Players.vue';
import Stadiums from './components/Stadiums.vue';
import Chat from './components/Chat.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
      props: false,
    },
    {
      path: '/fixtures',
      name: 'Fixtures',
      component: Fixtures,
      meta: {
        requiresAuth: true,
      },
      props: false,
    },
    {
      path: '/fixtures-matchday/:id',
      name: 'FixturesMatchday',
      component: FixturesMatchday,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
    {
      path: '/fixtures-matchday/:id/fixture/:indexData',
      name: 'Fixture',
      component: Fixture,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams,
      meta: {
        requiresAuth: true,
      },
      props: false,
    },
    {
      path: '/team/:id',
      name: 'Team',
      component: Team,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
    {
      path: '/players/:id',
      name: 'Players',
      component: Players,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
    {
      path: '/stadiums',
      name: 'Stadiums',
      component: Stadiums,
      meta: {
        requiresAuth: true,
      },
      props: false,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      meta: {
        requiresAuth: true,
      },
      props: false,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});
/* eslint-disable */
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  // firebase.auth().currentUser ? console.log(currentUser.email) : console.log('nobody logged in');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else if (!requiresAuth && currentUser) {
    next('home');
  } else {
    next();
  }
});

export default router;
