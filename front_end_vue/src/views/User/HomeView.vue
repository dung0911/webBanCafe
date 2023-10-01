<template>
  <div class="h-full w-full">
    <Header />
    <div
      class="justify-start items-start w-full py-24 lg:py-0 lg:h-screen overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg relative"
      style="background-image:url('https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg');">
      <div class="lg:flex lg:flex-col justify-center items-start h-full lg:w-1/2 lg:pl-20 pl-5">
        <h3 class="font-bold text-3xl mb-8">LEARN NEW THINGS DAILY</h3>
        <h1 class="font-bold text-5xl mb-12">Education Is A Path To Success In Life</h1>
        <p class="mb-8">Empower yourself with the knowledge and skills gained through online education and best
          instructors.</p>
        <button class="bg-blue-300 rounded-md px-5 py-3">Get Started Today</button>
      </div>
    </div>


    <div class="flex items-center">
      <div class="relative w-36 h-36 m-8">
        <img class="w-full absolute object-cover"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/hero-04-round-2.png" alt="Background Image">
        <div class="absolute w-full h-full p-4">
          <img class="flex justify-center items-center w-full h-full rounded-full"
            src="https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-anh-cafe-1.jpg" alt="Rounded Image">
        </div>
        <button class="absolute w-full h-full p-6">
          <i class="fa fa-play text-white"></i>
        </button>
      </div>
      <div class="">
        <h5>Watch</h5>
        <h4>Cafe</h4>
        <p>Cafe</p>
      </div>
    </div>
    <div class="w-10/12 mx-auto">
      <div class="">
        <h3 class="text-4xl font-seimibold ml-24 mb-8">Latest New</h3>
        <LatestNewVue />
      </div>
      <!-- about -->
      <div class="grid grid-cols-1 lg:grid-cols-2 py-24">
        <div class="">
          <h4 class="uppercase text-xl">About us</h4>
          <h1 class="text-5xl my-7">Organic & Fresh Coffee Provider Center</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem
            aperiam
            eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui
            ratione
          </p>
          <div class="flex justify-between items-center rounded-md p-3 w-full">
            <img src="https://kaffen-reactjs.netlify.app/images/quote_img.png" class="rounded-full" alt="">
            <p class="text-right">Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae</p>
          </div>
        </div>
        <img src="https://kaffen-reactjs.netlify.app/images/about_img.png" alt="">
      </div>
      <!--end about -->
      <!-- Shop -->

      <!-- The Shop -->
      <div class="mb-24">
        <TitleComponent title="Shop" />
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">
          <div v-for="index in 8" :key="index" class="">
            <ProductVue />
          </div>
        </div>
      </div>
      <!-- The Shop -->

      <!-- Top seller -->
      <div class="">
        <TitleComponent title="# trend now" />
        <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
          clickable: true,
        }" :navigation="true" :modules="modules" class="mySwiper" :breakpoints="{
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
}">
          <swiper-slide v-for="index in 8" :key="index">
            <ProductVue />
          </swiper-slide>
        </swiper>
      </div>

      <router-link to="/shop" class="px-5 py-2 border rounded-sm my-12 block lg:w-1/5 mx-auto text-center">Show
        More</router-link>

      <!-- Top seller -->
      <!-- End Shop -->
      <!-- Review -->
      <div class="text-center  my-24">
        <TitleComponent title="Why Do People Love Us" />
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div v-for="index in 3" :key="index" class="text-justify border p-8 shadow-lg">
            <div class="flex items-center justify-center mb-5">
              <img src="https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
                class="w-20 h-20 rounded-full" alt="">
              <div class="ml-5">
                <p class="text-lg font-bold">Nguyeenx Van A</p>
                <span class="text-sm text-gray-500">- Designer</span>
              </div>
            </div>
            <p> type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum</p>
            <img
              src="https://splashythemes.com/opencart/OPC02/OPC020099/catalog/view/theme/freshvegi/image/themeimage/quote.svg"
              class="w-5 h-5 m-auto mt-6" alt="">
          </div>
        </div>
      </div>
      <!-- End Review -->
      <!-- Service -->
      <ServiceSupport class="my-12" />
      <!-- Service -->
    </div>
    <!-- Button Up -->
    <ButtonUp />
    <!-- Button Up -->
    <!-- Footer -->
    <FooterVue />
    <!-- End Footer -->
  </div>
</template>

<script>
import LatestNewVue from '../User/HomePage/LatestNew.vue'
import ServiceSupport from '../User/HomePage/ServiceSupport.vue'
import Header from '../User/Layout/Header.vue'
import FooterVue from '../User/Layout/Footer.vue'
import ButtonUp from '../User/Layout/ButtonUp.vue'
import ProductVue from '@/components/Products/Product.vue'
import TitleComponent from '@/components/Home/TitleComponent.vue'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

export default {

  name: 'HomeView',

  methods: {
    ChangeNavbarOnScroll() {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 40) {
          this.onScroll = true
        } else {
          this.onScroll = false
        }
      })
    },
  },
  created() {
    this.ChangeNavbarOnScroll();
  },
  components: {
    LatestNewVue,
    ServiceSupport,
    FooterVue,
    Header,
    ButtonUp,
    ProductVue,
    Swiper,
    SwiperSlide,
    TitleComponent
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
}
</script>
