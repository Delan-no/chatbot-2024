<template>
    <AuthenticatedLayoutAdmin>
        <h1>Edition de scénarios</h1>
        <div @click="openModal" class="text-right">
            <button class="bg-blue-600 text-white rounded-lg p-1">Ajouter une Question </button>
        </div>
        <div @click="openModals" class="text-right mt-3">
            <button class="bg-amber-400 text-white rounded-lg p-1">Ajouter une Réponse </button>
        </div>

        <div class="pt-4">
            <!-- Modal pour creer les questions -->
            <div v-show="isModalOpen"
                class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <form @submit.prevent="soumettreFormulaireQuestion"
                    class="animation bg-white border relative border-primary md:max-w-2xl m-auto pt-6 shadow-lg text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pr-8 dark:bg-gray-100 dark:border-primary">
                    <span @click="closeModal" class="absolute top-5 right-5 cursor-pointer">Fermer</span>
                    <div class="m-4 w-full tailleChang">
                        <h1 class="text-xl font-bold mb-4 text-black">Ajouter une Question</h1>
                    </div>

                    <div class="mb-4 m-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Question :</label>
                        <input v-model="question" type="text" required id="texte" placeholder="Entrez le texte"
                            class=" shadow-md appearance-none border rounded text-cneter w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div class="mt-2 mb-8 ml-4 flex justify-end tailleChang">
                        <button type="submit"
                            class=" bg-blue-600 p-1  text-white w-fit h-fit px-1 rounded-md font-semibold flex items-center gap-2 disabled:cursor-not-allowed">
                            Créer une question
                        </button>
                    </div>
                </form>
            </div>
            <!-- Modal pour creer les Réponses -->
            <div v-show="isModalOpens"
                class="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <form @submit.prevent="soumettreFormulaireReponse"
                    class="animation bg-white border relative border-primary md:max-w-2xl m-auto pt-6 shadow-lg text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pr-8 dark:bg-gray-100 dark:border-primary">
                    <span @click="closeModals" class="absolute top-5 right-5 cursor-pointer">Fermer</span>
                    <div class="m-4 w-full tailleChang">
                        <h1 class="text-xl font-bold mb-4 text-black">Ajouter une Réponse</h1>
                    </div>

                    <div class="mb-4 m-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Question :</label>
                        <select v-model="selectedQuestionId" required id="texte"
                            class="shadow-md appearance-none border rounded text-cneter w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option v-for="q in questions" :key="q.id" :value="q.id">{{ q.texte }}</option>
                        </select>
                    </div>
                    <div class="mb-4 m-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Réponse :</label>
                        <input v-model="reponse" type="text" required id="texte" placeholder="Entrez le texte"
                            class="shadow-md appearance-none border rounded text-cneter w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div class="mb-4 m-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Next Question :</label>
                        <select v-model="nextQuestionId" required id="texte"
                            class="shadow-md appearance-none border rounded text-cneter w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option v-for="q in questions" :key="q.id" :value="q.id">{{ q.texte }}</option>
                        </select>
                    </div>
                    <div class="mt-2 mb-8 ml-4 flex justify-end tailleChang">
                        <button type="submit"
                            class="bg-blue-600 p-1 text-white w-fit h-fit px-1 rounded-md font-semibold flex items-center gap-2 disabled:cursor-not-allowed">
                            Valider
                        </button>
                    </div>
                </form>
            </div>


            <div class="flex flex-wrap gap-4 max-w-5xl mx-auto justify-center">
                <div v-if="questions.length > 0">
                    <div>
                        <table class="table-fixed w-full">
                            <thead>
                                <tr class=" ">
                                    <th class="text-left ">Question</th>
                                    <th></th>
                                    <th class="text-center ">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(q, index) in questions" :key="index">
                                    <td class="p-2">{{ q.texte }}</td>
                                    <td></td>
                                    <td class="flex justify-center">

                                        <!-- button pour effectuer les actions -->
                                        <button class="  py-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>

                                        </button>
                                        <!-- button de modification de question -->
                                        <button class=" px-4 py-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path
                                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                            </svg>
                                        </button>


                                        <!-- button de suppression de question -->
                                        <button class=" py-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                <path
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                            </svg>
                                        </button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

const reponse = ref('');
const reponses = ref([]);
const isModalOpen = ref(false);
const isModalOpens = ref(false);

const soumettreFormulaireQuestion = () => {
    // Ajouter la question à la liste des questions
    questions.value.push({ texte: question.value, });
    // console.log(questions.value)
    // Réinitialiser le champ de question
    question.value = '';
};

const soumettreFormulaireReponse = () => {
    // Ajouter la reponse à la liste des questions
    reponses.value.push({ texte: reponse.value, });
    
    // Réinitialiser le champ de reponse
    reponse.value = '';
};


const openModal = () => {
    isModalOpen.value = true;
};
const closeModal = () => {
    isModalOpen.value = false;

};

const openModals = () => {
    isModalOpens.value = true;
};
const closeModals = () => {
    isModalOpens.value = false;

};


</script>
  