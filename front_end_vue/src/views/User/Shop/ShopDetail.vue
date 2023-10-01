<template>
    <div class="">
        <Header />
        <div class="h-72 w-full flex justify-center items-center text-center  text-white"
            style="background-image:URL('https://themewagon.github.io/arkitektur/img/carousel-1.jpg')">
            <div class="">
                <h1 class="text-5xl mb-3">Products</h1>
                <span>Home/Shop</span>
            </div>
        </div>
        <div class="mx-auto w-8/12 my-12">
            <div class="grid grid-cols-2 gap-12 pb-12 border-b relative">
                <div class="">
                    <img src="https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg" alt="">
                </div>
                <div class="relative">
                    <h3 class="text-4xl font-bold mb-2">CloudFee Hạnh Nhân Nướng</h3>
                    <p class="text-red-500 mb-5 text-xl font-bold">49.000 đ</p>
                    <p>
                        Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý, lẫn chút ngọt ngào của kem sữa và lớp
                        foam trứng cacao, nhấn thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai giòn mê ly. Tất
                        cả cùng quyện hoà trong một thức uống làm vị giác "thức giấc", thơm ngon hết nấc.
                    </p>
                    <button
                        class="w-full bg-orange-600 text-white p-3 rounded-full absolute bottom-0 hover:bg-orange-500">Đặt
                        hàng</button>
                </div>
            </div>
            <div class="my-12 pb-12 border-b">
                <h4 class="font-bold mb-5">Mô tả sản phẩm</h4>
                <p>Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý, lẫn chút ngọt ngào của kem sữa và lớp foam
                    trứng cacao, nhấn thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai giòn mê ly. Tất cả cùng
                    quyện hoà trong một thức uống làm vị giác "thức giấc", thơm ngon hết nấc.</p>
            </div>
            <div class="">
                <h4 class="font-bold mb-5">Sản phẩm liên quan</h4>
                <div class="">
                    <swiper :slidesPerView="4" :spaceBetween="30" :loop="true" :pagination="{
                        clickable: true,
                    }" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="i in 10" :key="i">
                            <div class="">
                                <img src="https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
                                    alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
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
import ButtonUp from '../Layout/ButtonUp.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default {
    name: "ShopDetailView",
    data() {
        return {
            itemsPerPage: 10,
            currentPage: 0,
            items: [], // Đây là dữ liệu cần phân trang
            filter: false,
        };
    },

    components: {
        FooterVue,
        Header,
        ButtonUp,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
}
</script>

<style></style>