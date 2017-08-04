export default [
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['../view/home.vue'], resolve), 
    meta: {
      title: '首页'
    }
  },
  {
    path: '/slot',
    name: 'slot',
    component: resolve => require(['../view/slot.vue'], resolve), 
    meta: {
      title: '钩子'
    }
  },
  {
    path: '/*',
    redirect: '/home'
  }
]