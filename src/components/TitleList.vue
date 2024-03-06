<script setup>
 
//   import {ref, onMounted,onBeforeUpdate,onBeforeMount} from 'vue'
  
 
 
//     const backend = 'http://127.0.0.1:8000/manga'
     
//     const dates = ref([])

//     const getData = async () => {
//       const res = await fetch(backend);
//       return await res.json();
// }

//       onBeforeMount(async () => {
//             const result = await getData();
//             dates.value = result
//             console.log(dates.value)
            
//       })


 
</script>

<template>
 

  
 
<!-- 
        <div id="wrapper"> 
              <div  v-for="item in dates"  :key="item.id"> 
 
                <div v-if="item.manga_type == 'Ongoing'"> 
                  <h2>
                      {{ item.name }}
          
                  </h2>
                  <p>{{ item.description }}</p>
                  <img :src="`data:image/png;base64,${item.cover_image}`" />
                </div>
 
        </div>
 

        </div>



  -->

 
 
    <!-- Create Manga Form - Display only when logged in -->
    <h2 style="display: none;" id="create-manga-title">Create Manga</h2>
    <form id="create-manga-form" onsubmit="return false" style="display: none;">
        <label for="manga-name">Manga Name:</label>
        <input type="text" id="manga-name" name="name" required><br>

        <label for="manga-description">Description:</label>
        <textarea id="manga-description" name="description" required></textarea><br>

        <label for="manga-tags">Tags:</label>
        <input type="text" id="manga-tags" name="tags" required><br>

        <label for="manga-type">Type:</label>
        <input type="text" id="manga-type" name="manga_type" required><br>

        <label for="cover-image">Cover Image:</label>
        <input type="file" id="cover-image" name="cover_image" accept="image/*" required><br>

        <button type="submit">Create Manga</button>
    </form>

</template> 

<style>
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>  