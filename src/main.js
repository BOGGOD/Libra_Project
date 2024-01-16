import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import NavBar from './components/NavBar.vue';
// import HotNewTitles from './components/HotNewTitles.vue';
// import Novels from './components/Novels.vue';
// import MainList from  './components/MainList.vue';
// import Footer from  './components/Footer.vue';

 
import VueDragscroll from "vue-dragscroll";
 


// const app = createApp(App)

const app = createApp(App)
app.use(VueDragscroll);
app.mount( '#app');
// app.component('NavBar', NavBar)
 
 


