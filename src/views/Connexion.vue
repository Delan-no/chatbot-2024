<template>
    <div class="flex max-w-md mx-auto items-center justify-center h-screen bg-gray-100">
        <div class="w-full p-8 rounded-md shadow-md">
            <div class="flex justify-center">
                <!-- <img src="../assets/logo.png" alt="" class="w-20"/> -->
                <p> <img src="../assets/logo.png" alt="" class="w-20" /> Inscription</p>
            </div>
            <form @submit.prevent="submit" class="mt-6 mb-7">
                <div>
                    <label for="name" class="block  font-medium text-gray-700">
                        Nom d'utilisateur
                    </label>
                    <input id="name" type="text" class="mt-3 py-3 p-2 border  border-gray-300 rounded-md block w-full"
                        v-model="form.userName" required autofocus autocomplete="name" />
                </div>

                <div class="mt-4">
                    <label for="password" class="block  font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <input id="password" type="password"
                        class="mt-3 py-3 p-2 border  border-gray-300 rounded-md block w-full" v-model="form.password"
                        required autocomplete="new-password" />
                </div>

                <div class="flex justify-between mt-6">
                    <div class=" text-gray-600 hover:text-gray-900">
                        <button @click="handleLoginClick" :disabled="isLoading"
                            class="underline cursor-pointer focus:outline-none">
                            {{ isLoading ? 'Chargement...' : 'J\'ai pas de compte' }}
                           
                        </button>
                    </div>
                    <button type="submit" :disabled="isLoading"
                        class="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500">
                        Se connecter
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const router = useRouter();

const form = reactive({
    userName: '',
    password: '',
});

const submit = () => {
    //  envoie les données dans la base de donnée pour faire la vérification
};

const handleLoginClick = async () => {
    try {
        isLoading.value = true;

        // Simulez un chargement pendant 1.5 secondes 
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Redirection vers la page de connexion
        router.push({ name: 'inscription' });
    } finally {
        isLoading.value = false;
    }
};
</script>