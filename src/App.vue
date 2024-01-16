<script setup  >
 import Navbar from './components/Navbar.vue';
 import HotNew  from './components/HotNew.vue';
 import Novels from './components/Novels.vue';
 import MainList from  './components/MainList.vue';
 import MangaFooter from  './components/MangaFooter.vue';
 
</script>


<template>
 <Navbar/> 


<HotNew/>
<Novels/>
<MainList/>
  


 
 <footer>
  <MangaFooter/>
 </footer>
</template>
 
<style>
  body.dark{
    color-scheme: dark;
  }
</style>

