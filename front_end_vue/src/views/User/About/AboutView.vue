<template>
  <div class="">
    <Header />
    <TitleBackground headerTitle="About" home ="Home" title="About" />
    <div class="mt-24">
      <div class="w-3/4 mx-auto flex justify-between">
        <div class="w-full">
          <img src="https://template.hasthemes.com/rideo/rideo/img/about/1.jpg" class="w-full h-full" alt="">
        </div>
        <div class="w-full ml-12">
          <h3 class="uppercase font-bold text-xl mb-6">about us</h3>
          <p class="leading-loose mb-4">It is a long established fact that a reader will be distracted by the readable
            content
            of a page when looking
            at its layout. Lorem Lorem The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', </p>
          <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years,</p>
        </div>
      </div>
      <h3 class="text-xl uppercase text-center my-12">Why choose us</h3>
      <div class="h-36 w-full flex justify-center items-center text-center  text-white"
        style="background-image:URL('https://themewagon.github.io/arkitektur/img/carousel-1.jpg')">
      </div>
      <div class="mt-12">
        <ServiceSupport class="my-12" />
      </div>
      <h3 class="text-xl uppercase text-center my-12">Our Team</h3>
      <div class="grid grid-cols-4 w-10/12 mx-auto mb-24">
        <div class="text-center border shadow-lg p-5">
          <div class="relative group overflow-hidden -m-5 mb-5">
            <img src="https://themewagon.github.io/milky/img/product-1.jpg" alt="">
            <div
              class="absolute inset-0 bg-black opacity-0 transition-all text-white ease-in-out duration-200 transform translate-y-full group-hover:opacity-50 group-hover:translate-y-0">
              <div class="w-full h-full flex items-center justify-center text-lg">
                <button class="text-lg mx-2"><i class="fa fa-google" aria-hidden="true"></i></button>
                <button class="text-lg mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></button>
                <button class="text-lg mx-2"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
                <button class="text-lg mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold">Tom Smith</h3>
          <p class="mb-4 mt-1">Designer</p>
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
import ServiceSupport from '../HomePage/ServiceSupport.vue';
import TitleBackground from '../Layout/TitleBackground.vue';
export default {
  name: "AboutView",
  components: {
    FooterVue,
    Header,
    ServiceSupport,
    TitleBackground
  }
}
</script>

<style></style>