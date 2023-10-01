<template>
  <footer class="bg-gray-900 text-white py-12">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 w-10/12 mx-auto leading-loose">
        <div class="">
          <router-link to="/">
            <img src="https://template.hasthemes.com/rideo/rideo/img/logo.png" alt="">
          </router-link>
          <h4 class="text-xl mt-6 mb-5">NEWSLETTER</h4>
          <div class="relative">
            <input type="text" name="" id="" class="w-full py-3 px-3 rounded-md" placeholder="your email address....">
            <button
              class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-700 rounded-full py-1.5 px-3.5"><i
                class="fa fa-search" aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="text-left lg:text-right">
          <h3 class="font-bold text-xl mb-5">CONTACT</h3>
          <p class="my-3 text-sm"><span class="font-bold text-lg">Address:</span> Freshvegi Vegs And Fruits Store, 507-Union Trade Center,
            United States</p>
          <p class="my-3 text-sm"><span class="font-bold text-lg">Call Us:</span> (+123) 0800-903277</p>
          <p class="my-3 text-sm"><span class="font-bold text-lg">Email Us:</span> support@company.com</p>
        </div>
        <div class="text-left lg:text-right">
          <h3 class="font-bold text-xl mb-5">INFORMATION</h3>
          <p class="my-3 hover:underline">About Us</p>
          <p class="my-3 hover:underline">Our Store</p>
          <p class="my-3 hover:underline">Help</p>
          <p class="my-3 hover:underline">FAQ</p>
        </div>
        <div class="text-left lg:text-right">
          <h3 class="font-bold text-xl mb-5">MY ACCOUNT</h3>
          <p class="my-3 hover:underline">My Order</p>
          <p class="my-3 hover:underline">My Cart</p>
          <p class="my-3 hover:underline">Wish List</p>
          <p class="my-3 hover:underline">Login</p>
          <p class="my-3 hover:underline">Register</p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name:"FooterView"
}
</script>

<style>

</style>