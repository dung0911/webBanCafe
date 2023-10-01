<template>
    <header class="fixed top-0 lg:relative w-full z-10">
        <div class="bg-gray-900 p-2 lg:text-black text-white">
            <div class="text-sm flex justify-between items-center text-white">
                <div class="flex">
                    <p class="mx-4"><i class="mr-2 fa fa-phone" aria-hidden="true"></i> +11 (019) 25184203</p>
                    <p class="mx-4"><i class="mr-2 fa fa-envelope" aria-hidden="true"></i> rideo@mail.com</p>
                </div>
                <div class="hidden lg:block lg:flex items-center">
                    <div class="flex items-center">
                        <i class="fa fa-search mr-3" aria-hidden="true"></i>
                        <input type="search" class="px-3 py-1  rounded-sm bg-gray-800" placeholder="search">
                    </div>

                    <div class="navbar-right ml-4 relative">
                        <button
                            class="relative z-10 block m-2 overflow-hidden focus:outline-none text-sm leading-loose align-middle px-4 py-1 rounded cursor-pointer text-sm"
                            @click="isOpen = !isOpen">
                            <p class="mx-4 flex justify-center items-center">
                                <i class="mr-2 fa fa-user" aria-hidden="true"></i>
                                <span class="mx-2">ACCOUNT</span>
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </p>
                        </button>
                        <button v-if="isOpen" @click="isOpen = false" tabindex="-1"
                            class="fixed top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
                        <div v-if="isOpen"
                            class="z-10 absolute top-auto left-0 w-48 py-2 mt-2 rounded-lg border-gray-900 bg-white shadow-xl">
                            <router-link to="/login"
                                class="text-sm text-gray-900 hover:bg-blue-600 hover:text-white block px-4 py-2 cursor-pointer">Sign In
                            </router-link>
                            <router-link to="/registration"
                                class="text-sm text-gray-900 hover:bg-blue-600 hover:text-white block px-4 py-2 cursor-pointer">Registration</router-link>
                            <router-link to="/login"
                                class="text-sm text-gray-900 hover:bg-blue-600 hover:text-white block px-4 py-2 cursor-pointer">Sign
                                Out</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <MenuBar :onScroll="onScroll" />
        </div>
    </header>
</template>

<script>
import MenuBar from './MenuBar.vue'
export default {
    name: "HeaderView",
    components: { MenuBar },
    data() {
        return {
            onScroll: false,
            isOpen: false
        }
    },
    methods: {
        ChangeNavbarOnScroll() {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 50) {
                    this.onScroll = true
                } else {
                    this.onScroll = false
                }
            })
        }
    },
    created() {
        this.ChangeNavbarOnScroll();
    }
}
</script>

<style></style>