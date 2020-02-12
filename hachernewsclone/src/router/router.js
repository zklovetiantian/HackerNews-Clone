import VueRouter from 'vue-router';
import Vue from 'vue'
import Index from '../pages/index'
import TopStories from '../pages/topStories'
import NewStories from '../pages/newStories'
Vue.use(VueRouter);
let routes = [
    { path: '/', component: Index },
    { path: '/topStories', component: TopStories },
    { path: '/newStories', component: NewStories }
]
let router = new VueRouter({ routes, mode:'history' });
export default router