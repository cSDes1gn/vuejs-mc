import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import ThreadShow from '@/pages/ThreadShow'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import sourceData from '@/data.json'
import { createRouter, createWebHistory } from 'vue-router'

// define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // validate the thread exists before rendering the ThreadShow component
      const threadExists = sourceData.threads.find(t => t.id === to.params.id)
      if (threadExists) {
        return next()
      } else {
        // thread does not exist: redirect to NotFound
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // query and hash preservation
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
