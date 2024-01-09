<template>
    <AuthenticatedLayoutAdmin>
        <h1>Edition de scénarios</h1>
        <div @click="openModal" class="text-right">
            <button class="bg-blue-300 text-wh rounded-lg p-1">Ajouter </button>
        </div>

        <div class="pt-4">
            <div v-show="isModalOpen"
                class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <form  @submit.prevent="soumettreFormulaireQuestion"
                    class="animation bg-white border relative border-primary md:max-w-2xl m-auto pt-6 shadow-lg text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pr-8 dark:bg-gray-100 dark:border-primary">
                    <span @click="closeModal" class="absolute top-5 right-5 cursor-pointer">Fermer</span>
                    <div class="m-4 w-full tailleChang">
                        <h1 class="text-xl font-bold mb-4 text-black">Ajouter une Question</h1>
                    </div>

                    <div class="mb-4 m-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Question :</label>
                        <textarea v-model="question" type="text" required id="texte" placeholder="Entrez le texte"
                            class="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div class="mt-2 ml-4 tailleChang">
                        <button type="submit"
                            class=" bg-blue-600 p-1 text-white w-fit h-fit px-1 rounded-md font-semibold flex items-center gap-2 disabled:cursor-not-allowed">
                            Créer une question
                        </button>
                    </div>
                    
                </form>
            </div>
            <div>
                <div v-if="questions.length > 0">
                    <div v-for="(q, index) in questions" :key="index">
                        <ul>
                            <li class="p-2">{{ q.texte }}</li>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    <p>Aucune question disponible pour le moment.</p>
                </div>
            </div>
        </div>


    </AuthenticatedLayoutAdmin>
</template>
  
<script setup>
import AuthenticatedLayoutAdmin from "@/Layouts/AuthenticatedLayoutAdmin.vue";
import { ref } from 'vue';

const question = ref('');
const questions = ref([]);
const isModalOpen = ref(false);

const soumettreFormulaireQuestion = () => {
    // Ajouter la question à la liste des questions
    questions.value.push({ texte: question.value,});

    // Réinitialiser le champ de question
    question.value = '';
};

  const openModal = () => {
    isModalOpen.value = true;
  };
  const closeModal = () => {
    isModalOpen.value = false;

  };


</script>
  