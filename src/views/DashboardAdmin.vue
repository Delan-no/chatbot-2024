<script setup>
import AuthenticatedLayoutAdmin from "@/Layouts/AuthenticatedLayoutAdmin.vue";
import Dropdown from '@/Components/Dropdown.vue';
import { ref } from 'vue';

const isModalOpen = ref(false);

const newScenario = ref({
    title: '',
    fin:'',
    debut:'',
    description: '',

});


const scenarios = ref([]);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    // Réinitialiser les valeurs du nouveau scénario après la fermeture du modal
    newScenario.value.debut = '';
    newScenario.value.fin = '';
    newScenario.value.title = '';
    newScenario.value.description = '';
};

const createScenario = () => {
    // Ajouter la logique pour envoyer le scénario au backend ici
    // Après avoir réussi, fermez le modal et mettez à jour la liste des scénarios
    console.log(newScenario.value)
    closeModal();
    scenarios.value.push(newScenario);
    console.log(scenarios.value)
    
};

</script>

<template>
    <AuthenticatedLayoutAdmin>
        <h1>Les scénarios</h1>
        <div class="text-right">
            <div class="text-right">
                <button class="bg-blue-600 text-white rounded-lg px-3 p-2" @click="openModal">Ajouter un Scénario</button>
            </div>
        </div>
        <div class="mt-12 flex flex-wrap gap-4 max-w-5xl mx-auto justify-center">
            <div
                class=" group rounded-3xl border-solid  w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <router-link :to="{ name: 'edition' }"
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </router-link>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description  h-40">
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div
                class=" group rounded-3xl border-solid  w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <!-- <h2 class="mt-1 ml-1 font-medium text-gray-00 ">titre</h2> -->
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div
                class=" group rounded-3xl border-solid  w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <!-- <h2 class="mt-1 ml-1 font-medium text-gray-00 ">titre</h2> -->
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div
                class=" group rounded-3xl border-solid  w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <!-- <h2 class="mt-1 ml-1 font-medium text-gray-00 ">titre</h2> -->
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div
                class=" group rounded-3xl border-solid  w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <!-- <h2 class="mt-1 ml-1 font-medium text-gray-00 ">titre</h2> -->
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div
                class=" group rounded-3xl border-solid w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <!-- <h2 class="mt-1 ml-1 font-medium text-gray-00 ">titre</h2> -->
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div
                class=" group rounded-3xl border-solid  w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <!-- <h2 class="mt-1 ml-1 font-medium text-gray-00 ">titre</h2> -->
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div
                class=" group rounded-3xl border-solid w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm">
                <div>
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <!-- <h2 class="mt-1 ml-1 font-medium text-gray-00 ">titre</h2> -->
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            Nom du Scénario
                        </p>

                    </div>
                </div>
            </div>
            <div class=" group rounded-3xl border-solid w-72 h-36 bg-amber-50 text-gray-800 text-xl font-medium pl-2 pr-3 py-2 shadow-sm"
                v-if="scenarios.length > 0">
                <div v-for="(scenario, index) in scenarios" :key="index">
                    <div class="flex justify-between sticky top-0">
                        <div class="h-7 w-30 flex items-center justify-center rounded-xl">
                            <div class="text-center "></div>
                        </div>

                        <Dropdown>
                            <template #trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </template>
                            <template #content>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Voir
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Modifier
                                </button>

                                <button
                                    class="block w-full px-4 py-1 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                    Supprimer
                                </button>
                            </template>
                        </Dropdown>


                    </div>
                    <div class="description overflow-y-auto h-40">
                        <h2 class="mt-1 ml-1 font-medium text-gray-00 ">{{ scenario.title }}</h2>
                        <p class="mt-4 text-sm ml-1 leading-relaxed text-center">
                            {{ scenario.description }}
                        </p>

                    </div>
                </div>
            </div>
        </div>

        <!-- Affichage des scénarios existants -->
        <div v-if="scenarios.length > 0">
            <h2>Scénarios existants :</h2>
            <div v-for="(scenario, index) in scenarios" :key="index">
                <h3>{{ scenario.title }}</h3>
                <h3>{{ scenario.fin }}</h3>
                <h3>{{ scenario.debut }}</h3>
                <p>{{ scenario.description }}</p>
                <pre>
                    {{ scenario }}
                </pre>
            </div>
        </div>

        <!-- Message si aucun scénario n'est disponible -->
        <div v-else>
            <p>Aucun scénario disponible pour le moment.</p>
        </div>


    <!-- Modal pour ajouter un scénario -->
    <div v-show="isModalOpen"
        class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <form @submit.prevent="createScenario"
            class="animation bg-white border relative border-primary md:max-w-2xl m-auto pt-6 shadow-lg text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pr-8 dark:bg-gray-100 dark:border-primary">
            <span @click="closeModal" class="absolute top-5 right-5 cursor-pointer">Fermer</span>
            <div class="m-4 w-full tailleChang">
                <h1 class="text-xl font-bold mb-4 text-black">Ajouter un Scénario</h1>
            </div>
            <div class="m-4 w-full tailleChang">
                <label class="block text-gray-700 font-bold mb-2 ">Titre du scénario</label>
                <input v-model="newScenario.title" type="text" name="title" placeholder="Entrez le titre " required
                    class="shadow-md border-4 border-black mr-2 appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-none">
            </div>
            <div class="m-4 w-full tailleChang">
                <label class="block text-gray-700 font-bold mb-2 ">Mot du début</label>
                <input v-model="newScenario.debut" type="text" name="debut" placeholder="Entrez le mot du début " required
                    class="shadow-md border-4 border-black mr-2 appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-none">
            </div>
            <div class="m-4 w-full tailleChang">
                <label class="block text-gray-700 font-bold mb-2 ">Mot de fin</label>
                <input v-model="newScenario.fin" type="text" name="fin" placeholder="Entrez le mot de fin " required
                    class="shadow-md border-4 border-black mr-2 appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-none">
            </div>
            <div class="m-4 w-full tailleChang">
                <label class="block text-gray-700 font-bold mb-2 ">Description du scénario :</label>
                <textarea v-model="newScenario.description" name="description" placeholder="Entrez la description"
                    required
                    class="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-none h-20"></textarea>
            </div>
            <div class="flex justify-end">
                <button type="submit"
                    class="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-8">Valider</button>
            </div>
        </form>
    </div>

</AuthenticatedLayoutAdmin></template>
