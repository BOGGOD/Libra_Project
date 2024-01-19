<script setup>
import { useDark, useToggle } from '@vueuse/core';

    const isDark = useDark();
    const toggleDark = useToggle(isDark);
 
</script>

<template>
<button
    @click='toggleDark()'
    class="text-gray-300 border-b-4 border-gray-800 hover:border-sky-500 px-3 py-2 text-sm font-medium dark:bg-purple-500 rounded">
    Toggle Dark Mode 


</button>

</template>

<style>

</style>