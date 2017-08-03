export default [
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['../view/home.vue'], resolve), 
    meta: {
      title: '首页'
    }
  }
]