import PageHome from '@/components/PageHome'
import PageNotFound from '@/components/PageNotFound'
import PageThreadShow from '@/components/PageThreadShow'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

// define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // validate the thread exists before rendering the ThreadShow component
      const threadExists = sourceData.threads.find(t => t.id === to.params.id)
      if (threadExists) {
        return next()
      } else {
        // thread does not exist: redirect to PageNotFound
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
    component: PageNotFound,
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
