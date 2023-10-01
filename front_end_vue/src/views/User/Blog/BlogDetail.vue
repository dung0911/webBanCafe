<template>
    <div class="">
        <Header />
        <div class="w-full relative">
            <img src="https://file.hstatic.net/1000075078/article/thecoffeehouse_traxanhtaybac_1_d8c2ac635c5941a19c0065339727e41a_master.jpg"
                class="w-full h-96" alt="">
            <div class="w-2/3 mx-auto mt-12 mb-6 border-b-2 border-black pb-14">
                <h1 class="font-bold text-3xl mb-6">NGƯỢC LÊN TÂY BẮC GÓI VỊ MỘC VỀ XUÔI</h1>
                <p>Những dải ruộng bậc thang, các cô gái Thái với điệu múa xòe hoa, muôn cung đường ngợp mùa hoa… đó là rẻo
                    cao Tây Bắc luôn làm say lòng lữ khách miền xuôi. Và nép mình bên dưới núi non hùng vĩ ấy còn có món quà
                    gói trọn vị thiên nhiên: trà xanh Tây Bắc.</p>
            </div>
            <div class="mx-auto w-10/12 mb-24 relative">
                <h1 class="text-center font-normal text-2xl mb-12">Bài viết mới nhất</h1>
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                    <div class="border rounded-sm relative" v-for="index in 3" :key="index">
                        <img src="https://template.hasthemes.com/rideo/rideo/img/blog/1.jpg" class="w-full mb-2" alt="">
                        <div class="p-6 lg:h-72 3xl:h-64">
                            <h4 class="uppercase text-ld font-bold mb-3">CLARITAS EST ETIAM PROCESSUS</h4>
                            <p class="text-sm text-gray-400 mb-3"><span class="text-red-500">Rakib Hossain</span> | jan 17 -
                                2021 | 12 comments </p>
                            <p id="text" class="mb-4 text-justify">test</p>
                            <router-link to="/blogDetail"
                                class="uppercase px-4 py-1 border rounded-sm absolute bottom-5 right-5">read
                                more</router-link>
                        </div>
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
    }
}
</script>
  
<style></style>