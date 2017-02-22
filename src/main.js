import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Home = {
    template: `<div>sjfajfdsjafhome内容</div>`
}
const first = {
    template: `<div>first内容</div>`
}
const second = {
    template: `<div>second内容</div>`
}
const firstFirst = {
    template: `<div>{{$route.params.age}}firstFirst1111222222</div>`
}
const firstScond = {
    template: `<div>{{$route.name}}firstFirst2222221111</div>`
}
const child = {
    template: `
       <div>
          <h2>自路由</h2>
          <router-view></router-view>
       </div>
    `
}
var router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: Home
    }, 
    {
        path: '/first',
        component: child,
        children: [
            {path: '/', component: first},
            {path: 'first', name:'name-first-first', component: firstFirst},
            {path: 'second',  name:'name-first-second', component: firstScond}
        ]
    },
   {
        path: '/second',
        component: second
    }]
})

new Vue({
    router,
    template: `<div>
                 <h1>导航</h1>
                 <ol>
                     <li><router-link to='/'>home</router-link></li>
                     <li><router-link to='/first'>first</router-link></li>
                        <ol>
                           <li><router-link :to = "{name: 'name-first-first', params: {age: 26}}">firstFirst</router-link></li>
                           <li><router-link to = '/first/second'>firstScond</router-link></li>
                        </ol>
                     <li><router-link to='/second' append>second</router-link></li>
                 </ol>
                 <router-view></router-view>
              </div>`
}).$mount('#app');