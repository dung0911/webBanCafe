<template>
    <div class="">
        <Header />
        <TitleBackground headerTitle="Blog" home="Home" title="Blog" />
        <div class="lg:w-8/12 w-10/12 mx-auto my-12">
            <nav>
                <ul>
                    <li>Categories</li>
                </ul>
            </nav>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                <div class="border rounded-sm" v-for="index in 6" :key="index">
                    <img src="https://template.hasthemes.com/rideo/rideo/img/blog/1.jpg" class="w-full mb-2" alt="">
                    <div class="p-6 relative lg:h-72 3xl:h-64">
                        <h4 class="uppercase text-ld font-bold mb-3">CLARITAS EST ETIAM PROCESSUS</h4>
                        <p class="text-sm text-gray-400 mb-3"><span class="text-red-500">Rakib Hossain</span> | jan 17 -
                            2021 | 12 comments </p>
                        <p id="text" class="mb-4 text-justify">{{ truncateText(text) }}</p>
                        <router-link to="/blogDetail" class="uppercase px-4 py-1 border rounded-sm absolute bottom-5 right-5">read more</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- Button Up -->
        <ButtonUp />
        <!-- Button Up -->
        <FooterVue />
    </div>
</template>
  
<script>
import Header from '../Layout/Header.vue'
import FooterVue from '../Layout/Footer.vue'
import TitleBackground from '../Layout/TitleBackground.vue'
export default {
    name: "BlogView",
    data() {
        return {
            text: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.'
        }
    },
    components: {
        FooterVue,
        Header,
        TitleBackground
    },
    methods: {
        truncateText(text) {
            if (text.length > 100) {
                return text.substring(0, 100) + '...';
            } else {
                return text;
            }
        }
    }
}
</script>
  
<style></style>