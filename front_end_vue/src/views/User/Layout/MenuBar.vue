<template>
    <div class="my-3">
        <div v-bind:class="onScroll ? 'w-full lg:py-3 lg:bg-white border-b' : 'lg:py-2 lg:mt-20 w-full lg:w-9/12'"
            class="z-10 flex lg:fixed top-0 left-0 right-0 justify-between items-center px-5 w-9/12 mx-auto duration-1000">
            <router-link to="/">
                <img src="https://template.hasthemes.com/rideo/rideo/img/logo.png" alt="">
            </router-link>

            <nav class="hidden lg:block my-5">
                <ul class="lg:flex justify-between uppercase text-md">
                    <li v-for="l in listLink" :key="l.id" class="mx-4 mb-5">
                        <router-link :to="l.to" exact-active-class="underline">{{ l.title }}</router-link>
                    </li>
                </ul>
            </nav>

            <div class="flex items-center">
                <button id="btnCart" type="button" @click="toggleCart" class="relative text-xl py-2">
                    <i class="fa fa-shopping-bag border p-3" aria-hidden="true" style="font-size: 22px;"></i>
                    <span v-bind:class="onScroll ? 'top-2' : 'top-0'"
                        class="absolute top-0 left-0 right-0 lg:bg-black mx-auto rounded-full w-6 h-6 text-sm text-center border-2 text-red-600 duration-300">0</span>
                </button>

                <button id="btnMenuBar" type="button" @click="toggleMenu" class="relative text-xl border px-3 py-2 mx-4 lg:hidden">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <nav :class="{ 'translate-x-full': !isCartOpen }"
            class="fixed right-0 top-0 w-64 bg-blue-200 text-blue-800 h-full z-10 transform transition-transform duration-700 h-screen">
            <div class="flex items-center justify-between">
                <span>Cart</span>
                <button @click="toggleCart"><i class="fa fa-times" aria-hidden="true"></i></button>
            </div>
            <p>hoge</p>
            <p>fuga</p>
            <p>piyo</p>
        </nav>
        <nav class="lg:hidden my-5" v-show="isMenuOpen">
            <ul class="lg:flex justify-between uppercase text-md">
                <li v-for="l in listLink" :key="l.id" class="mx-4 mb-5">
                    <router-link :to="l.to" exact-active-class="underline">{{ l.title }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "MenuBar",
    props: {
        onScroll: Boolean,
    },
    data() {
        return {
            listLink: [
                { id: 1, to: "/", title: "HOME" },
                { id: 2, to: "/shop", title: "SHOP" },
                { id: 3, to: "/about", title: "ABOUT" },
                { id: 4, to: "/blog", title: "BLOG" },
                { id: 6, to: "/contact", title: "CONTACT" },
            ],
            isCartOpen: false,
            isMenuOpen: false,
        }
    },
    methods: {
        toggleCart() {
            this.isCartOpen = !this.isCartOpen
            this.isMenuOpen = false
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    },
    computed: {
        buttonClass() {
            return this.isCartOpen
                ? 'border border-blue-800 text-blue-800'
                : 'bg-blue-600 text-white'
        }
    }
}
</script>

<style></style>