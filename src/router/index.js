import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UserView from '../views/UserView.vue'
import UserPosts from '../views/UserPosts.vue'
import PostView from '../views/PostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    children: [
      {
        path: 'posts',
        name: 'user-posts',
        component: UserPosts,
      },
      {
        path: 'posts/:postId',
        name: 'post-view',
        component: PostView,
        props: (route) => ({ id: Number(route.params.postId) }),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
