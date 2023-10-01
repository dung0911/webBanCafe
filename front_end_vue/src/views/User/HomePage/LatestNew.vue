<template>
    <swiper :slidesPerView="1" :loop="true" :spaceBetween="30" :modules="modules" :pagination="{
        clickable: true,
    }" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
}" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 40,
    },
}" class="mySwiper">
        <swiper-slide v-for="n in newFeed" :key="n" class=" pb-10">
            <NewFeed :newFeed="n" />
        </swiper-slide>
    </swiper>
</template>

<script>
import NewFeed from '@/components/Home/NewFeedComponent.vue';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
export default {
    name: "LatestNew",
    data() {
        return {
            newFeed: [
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
                {
                    image: "https://template.hasthemes.com/rideo/rideo/img/products/l1.jpg",
                    title: "GT Sensor Carbon Jenson",
                    dateTime: "6/14/2023",
                },
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        NewFeed
    },
    setup() {
        return {
            modules: [Pagination, Navigation, Autoplay],
        };
    },
}
</script>

<style></style>