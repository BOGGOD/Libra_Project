import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from '../views/MainPage.vue'
import Profile from '../views/Profile.vue'


const routes = [ 
    {path: '/', name:'MainPage', component:MainPage },
    {path: '/profile', name:'profile', component:Profile }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes

})

export default router