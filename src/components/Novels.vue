<template>
<div     class="bg-white dark:bg-neutral-900 dark:text-neutral-200 ">
  <div class="mx-auto max-w-2xl  py-16 sm:px-6 sm:py-24 lg:max-w-7xl  ">
    <h2 class="text-2xl font-bold tracking-tight mb-8 text-sky-400">Новели</h2>
    <div   class="mx-auto max-w-2xl pb-16 overflow-hidden    lg:max-w-7xl  ">
    <div   class="grid grid-row gap-x-7 gap-y-4   ">
     <div  class=" grid grid-row  ">
       <div    class=" flex flex-row"> 
         <div     v-for="item in dates"  :key="item.id" class="group px-2"   >
          <!-- <div > Вставити сюди v-if='значення фільтру'  -->
           <div   class="w-36 h-48  rounded-lg bg-gray-200"> 
            <img :src="`data:image/png;base64,${item.cover_image} `" /> 
           </div>
           <h3 class="mt-4 text-sm text-gray-700 dark:text-white">{{ item.name }}  </h3>
           <p class="mt-1 text-lg font-medium text-gray-900 dark:text-white">{{ item.year }} {{ item.year }}</p>
          
          <!-- </div> -->
         </div>
        </div>
    </div>
 </div>
</div>
  </div>
</div>
</template>

<script setup  >
     import {ref, onMounted,onBeforeUpdate,onBeforeMount} from 'vue'
  
 
 
  const backend = 'http://127.0.0.1:8000/manga'
   
  const dates = ref([])

  const getData = async () => {
    const res = await fetch(backend);
    return await res.json();
}

    onBeforeMount(async () => {
          const result = await getData();
          dates.value = result
          console.log(dates.value)
          
    })

</script>

<style>


</style>