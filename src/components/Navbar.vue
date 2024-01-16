<template>
 
<nav class="bg-gray-800 dark:bg-black-900">
  <div class="mx-auto max-w-7xl">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://yt3.googleusercontent.com/zlOzA3foHfFD0Bc_qUVZbaMDy70IfZTnmvMTEgyG2i9o2imvP7cjREmSBtOpUE-P25xlU0Ks1w=s900-c-k-c0x00ffffff-no-rj" alt="Libra">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="text-gray-300 border-b-4 border-gray-800 hover:border-sky-500 px-3 py-2 text-sm font-medium cursor-grabbing">Каталог</a>
            <a href="#" class="text-gray-300 border-b-4 border-gray-800 hover:border-sky-500 px-3 py-2 text-sm font-medium cursor-pointer">Топи</a>
          </div>
        </div>
        <div class="flex flex-1 justify-end">
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 border-b-4 border-gray-800 hover:border-sky-500 px-3 py-2 text-sm font-medium">Закладки</a>
            <button 
            
            class="p-2 focus:outline-none">
              Login
 
            </button>
 
            <button
             
              class="text-gray-300 border-b-4 border-gray-800 hover:border-sky-500 px-3 py-2 text-sm font-medium"
              >
              Toggle Dark Mode
            </button> 
            <div class="flex lg:ml-6">
              <a href="https://remanga.org/" class="p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Налаштування</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
 
            <button class="text-gray-300 bg-sky-700 rounded-full px-3 py-2  hover:bg-sky-500 text-sm font-medium"> Войти</button>

          </div> 
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
 
</template>

<script setup>
 
</script>

<style>


</style>