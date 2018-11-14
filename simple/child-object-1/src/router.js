const routes = [
  {
    path: '/about-1',
    name: 'about-1',
    component: () => import('./views/About.vue')
  }
]

window.appData = window.appData || { routes: [] }
window.appData.routes.push(...routes)

export {
  routes
}

export default {
  routes
}
