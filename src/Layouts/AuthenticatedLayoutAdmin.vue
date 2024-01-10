<template>
    <div class="relative top-0 bottom-0 left-0 right-0 z-20 bg-background">
        <div class="min-h-screen bg-background pt-3 md:pt-3 lg:pt-10">
            <nav class="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
                <div class="mx-auto px-4 sm:px-6 lg:px-8 bg-layout">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <div class="shrink-0 flex items-center">
                                <router-link :to="{name: 'scenario'}">
                                    ChatBot
                                </router-link>
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="flex items-center">
                                <div class="hidden sm:flex sm:items-center">
                                    <div class="relative z-50">
                                        <button @click="showUserDropdown = !showUserDropdown" type="button"
                                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                            {{ user.name }}
                                            <i class="fas fa-caret-down"></i>
                                        </button>
                                        <div v-if="showUserDropdown"
                                            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                            <router-link :to="{name: 'profil'}"
                                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</router-link>
                                            <form method="post" as="button" @submit.prevent="logout">
                                                <button type="submit"
                                                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Déconnexion</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sm:hidden bg-white">
                    <div class="pt-2 pb-3 space-y-1">
                        <button class="flex gap-2 items-center">
                            <i class="fas fa-tachometer-alt"></i>
                            Tableau de bord
                        </button>
                        <button class="flex gap-2 items-center">
                            <i class="fas fa-building"></i>
                            Scénarios
                        </button>
                        <button class="flex gap-2 items-center">
                            <i class="fas fa-graduation-cap"></i>
                            Formations
                        </button>
                        <button class="flex gap-2 items-center">
                            <i class="fas fa-user"></i>
                            Utilisateurs
                        </button>
                        <button class="flex gap-2 items-center">
                            <i class="fas fa-cogs"></i>
                            Gestion de Droits
                        </button>
                    </div>

                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">{{ user.name }}</div>
                            <div class="font-medium text-sm text-gray-500">{{ user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <router-link :to="{name: 'connexion'}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</router-link>
                            
                            <form method="post" as="button" @submit.prevent="logout">
                                <button type="submit"
                                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Déconnexion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- <button type="button"
                class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <i class="fas fa-bars"></i>
            </button> -->

            <aside class="fixed top-16 left-0 z-50 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar">
                <div class="h-full w-60 px-3 py-4  bg-white">
                    <ul class="font-medium ml-5">
                        <li class="pt-3">
                            <button class="flex gap-2 items-center">
                                <i class="fas fa-building"></i>
                                Tableau de bord 
                            </button>
                        </li>
                        <li class="pt-2">
                            <router-link :to="{name: 'scenario'}" class="flex gap-2 items-center">
                                <i class="fas fa-tachometer-alt"></i>
                                Scénarios
                            </router-link>
                        </li>
                        <li class="pt-3">
                            <button class="flex gap-2 items-center">
                                <i class="fas fa-building"></i>
                                Conversation
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            <header class="bg-background shadow sticky top-16" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-16">
                    <slot name="header" />
                </div>
            </header>

            <main>
                <div class="sm:pl-[16rem] sm:pr-[2.5rem] pt-16 z-50 ">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            showDropdown: false,
            showUserDropdown: false,
            showResponsiveNav: false,
            showSidebar: false,
            user: {
                name: "John Doe", // Replace with actual user data
                email: "john.doe@example.com" // Replace with actual user data
            }
        };
    },
    methods: {
        logout() {
            // Implement your logout logic here
            console.log("Logout");
        }
    }
};
</script>
  
<style>/* Add your styles here */</style>
  