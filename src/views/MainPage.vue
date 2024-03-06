<script setup  >
 import Navbar from '../components/Navbar.vue';
 import HotNew  from '../components/HotNew.vue';
 import Novels from '../components/Novels.vue';
 import TitleList from  '../components/TitleList.vue';
 import MangaFooter from  '../components/MangaFooter.vue';
 import MainList from  '../components/MainList.vue';
 
 
 
 
 
</script>


<template>
 <Navbar/> 

 



<HotNew/>
<Novels/>
<MainList/>
<TitleList/>
 
  


 
 <footer>
  <MangaFooter/>
 </footer>
</template>
 
<style>
  body.dark{
    color-scheme: dark;
  }
</style>
