<template>
<div class="bg-white dark:bg-neutral-900 dark:text-white ">
  <div class="mx-auto max-w-7xl px-4 py-2 sm:px-6     grid grid-cols-3	 gap-4">
    <!-- <div class="flex flex-col gap-4   "> -->
      <div class="mr-auto max-w-44	 "> 
        <h2 class="text-2xl font-bold tracking-tight mb-8 text-sky-400">Новий сезон</h2>
        <div   class="mx-auto max-w-44	 pb-16  ">
          <div   class="grid grid-row gap-x-7 gap-y-4   ">
          <div  class=" grid grid-row  ">
            <div     v-for="item in dates"  :key="item.id" class="group px-2"   >
              <!-- <div > Вставити сюди v-if='значення фільтру'  -->
            <div class="mr-auto max-w-44	  flex flex-row"> 
              <div   class="flex flex-col justify-center  w-36 h-48  rounded-lg bg-gray-200" > 
                <img :src="`data:image/png;base64,${item.cover_image}`"/> 
              </div>
              <div class="flex flex-col ">
                <h3 class="text-sm text-gray-700 dark:text-white">{{ item.name }}  </h3>
                <p class="mt-1 text-lg font-medium text-gray-900 dark:text-white">{{ item.year }}  </p>
              </div>
              <!-- </div> -->
                </div>
                </div>
              </div>
              </div>
          </div>
          </div>
          <!-- </div> -->
          <div class="mr-auto  max-w-44		">
          <h2 class="text-2xl font-bold tracking-tight mb-8 text-sky-400">Топ місяця</h2>
          <div   class="mx-auto max-w-44		 pb-16    ">
            <div   class="grid grid-row gap-x-7 gap-y-4   ">
            <div  class=" grid grid-row  ">
              <div     v-for="item in dates"  :key="item.id" class="group px-2"   >
                <!-- <div > Вставити сюди v-if='значення фільтру'  -->
              <div class="mr-auto max-w-44	 flex flex-row"> 
                <div   class="flex flex-col justify-center  w-36 h-48  rounded-lg bg-gray-200" > 
                  <img :src="`data:image/png;base64,${item.cover_image}`"/> 
                </div>
                <div class="flex flex-col ">
                  <h3 class="text-sm text-gray-700 dark:text-white">{{ item.name }}  </h3>
                  <p class="mt-1 text-lg font-medium text-gray-900 dark:text-white">{{ item.year }}  </p>
                </div>
                <!-- </div> -->
                  </div>
                  </div>
                </div>
                </div>
            </div>
        </div> 
      
        <div class="mr-auto max-w-44 ">
          <h2 class="text-2xl font-bold tracking-tight mb-8 text-sky-400">Популярно сьогодні</h2>
          <div   class="mx-auto  max-w-44	 	 pb-16         ">
            <div   class="grid grid-row gap-x-7 gap-y-4   ">
            <div  class=" grid grid-row  ">
              <div     v-for="item in dates"  :key="item.id" class="group px-2"   >
                <!-- <div > Вставити сюди v-if='значення фільтру'  -->
              <div class="mr-auto  max-w-44		 flex flex-row"> 
                <div   class="flex flex-col justify-center  w-36 h-48  rounded-lg bg-gray-200" > 
                  <img :src="`data:image/png;base64,${item.cover_image}`"/> 
                </div>
                <div class="flex flex-col ">
                  <h3 class="text-sm text-gray-700 dark:text-white">{{ item.name }}  </h3>
                  <p class="mt-1 text-lg font-medium text-gray-900 dark:text-white">{{ item.year }}  </p>
                </div>
                <!-- </div> -->
                  </div>
                  </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>

 
 
      
 
 
<!-- <div class="bg-red-300  dark:bg-black dark:text-white ">
  <div class="mx-auto max-w-2xl px-4 py-2 sm:px-6   lg:max-w-7xl ">
    <div class="flex flex-row gap-4   ">
      <div class="mr-auto max-w-xl relative"> 
        
        <a href="https://www.youtube.com/"> 
          <div class="mr-auto max-w-xl flex flex-row"> 
            <div class="flex flex-col justify-center   max-w-16 max-h-24 ">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="  w-14 h-24 ">
            </div>
            <div class="flex flex-col ">
              <h3 class="text-sm text-gray-700 dark:text-white">Machined Mechanical Pencil</h3>
              <p class="mt-1 text-lg font-medium text-gray-900 dark:text-white">$35</p>
            </div>
          </div>
        </a>
      </div>
    </div> 
    </div>
  </div> -->
</template>

<script setup >
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
          
          
    })

</script>

<style>


</style>