<!-- <script setup>
  import CloseButton from './CloseButton.vue'
  import RegisterForm from './RegisterForm.vue'
  import {ref, onMounted,} from 'vue'
  import router from '../router'

  const emit = defineEmits(['close'])
  const el = ref()
 
  const isVoiceModalOpen = ref(false);

    function close(value)  {
        emit('close', value)
    }
 
    onMounted(() => {
       el.value

        const backendURL = import.meta.env.VITE_APP_API_URL;

       const loginForm = document.getElementById("login-form");
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            try {
                const response = await fetch(`${backendURL}/login/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `username=${username}&password=${password}`,
                });

                if (response.status === 200) {
                    const data = await response.json();
                    alert('Login successful!');
                    router.push({ path: 'profile' });
                    displayUserProfile(data.access_token);
                    localStorage.setItem('access_token', data.access_token);

                } else {
                    const data = await response.json();
                    alert(`Login failed: ${data.detail}`);
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        });
    })
    
       
</script>
<template>
    <button
        class="fixed inset-0 z-10 bg-black bg-opacity-80 focus:outline-none"
        tabindex="-1"
        @click.self="close"
        @keydown.esc="close" 
        >
        <div class="bg-white max-w-sm mx-auto my-8">
        <div class="p-2 text-right">
            <CloseButton  @click="close" />
        </div>
        <div class="p-6">

                <h2>Login</h2>
                <form id="login-form" onsubmit="return false;">
                    <label for="login-username">Username:</label>
                    <input type="text" id="login-username" name="username" required><br>

                    <label for="login-password">Password:</label>
                    <input type="password" id="login-password" name="password" required><br>
 

                    <button  type="submit">Login</button>

                </form>
                <h2>Немає облікового закису??</h2>
                <h2  @click="isVoiceModalOpen = true" class=" text-blue-400">Register</h2>
                <RegisterForm v-if="isVoiceModalOpen" @close="isVoiceModalOpen = false"  />
        </div>
       </div>
   </button>
</template>
   -->


<script>
</script>

<template>

    
</template>