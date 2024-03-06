<!-- <script setup>
  import CloseButton from './CloseButton.vue'
  import ModalWindow from './ModalWindow.vue'
  import {ref, onMounted,} from 'vue'

  const emit = defineEmits(['close'])
  const el = ref()
 
  const isVoiceModalOpen = ref(false);
    function close(value)  {
        emit('close', value)
    }
 
    onMounted(() => {
       el.value

       const backendURL = import.meta.env.VITE_APP_API_URL; // Replace with your actual backend URL
       console.log(backendURL);

       const registrationForm = document.getElementById("registration-form");
        registrationForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch(`${backendURL}/register/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `username=${username}&email=${email}&password=${password}`,
                });

                if (response.status === 200) {
                    alert('Registration successful! You can now log in.');
                } else {
                    const data = await response.json();
                    alert(`Registration failed: ${data.detail}`);
                }
            } catch (error) {
                console.error('Error during registration:', error);
            }
        });
    })
 

</script>
<template>
    <button
        class="fixed inset-0 z-10 bg-black bg-opacity-80 focus:outline-none"
        tabindex="-1"
        @click.self="close"
        >
        <div class="bg-white max-w-sm mx-auto my-8">
        <div class="p-2 text-right">
            <CloseButton  @click="close" />
        </div>
        <div class="p-6">
            <h2>Registration</h2>
                <form id="registration-form" onsubmit="return false;">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required><br>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required><br>

                    <button type="submit">Register</button>
                </form>
            <h2>Вже маєш аккаунт?</h2>
            <h2>Login</h2>
            <h2  @click="isVoiceModalOpen = true" class=" text-blue-400">Register</h2>
            <ModalWindow v-if="isVoiceModalOpen" @close="isVoiceModalOpen = false"  />
        </div>
       </div>
   </button>
</template>
   -->
<script>
</script>

<template>

    
</template>