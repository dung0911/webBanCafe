<template>
    <div class="text-center border shadow-lg p-5">
        <div class="relative group overflow-hidden -m-5 mb-5">
            <img src="https://themewagon.github.io/milky/img/product-1.jpg" alt="">
            <div
                class="absolute inset-0 bg-black opacity-0 transition-all text-white ease-in-out duration-200 transform translate-y-full group-hover:opacity-50 group-hover:translate-y-0">
                <div class="w-full h-full flex items-center justify-center text-lg">
                    <router-link class="mx-3" to="/shopDetail"><i class="fa fa-heart" aria-hidden="true"></i></router-link>
                    <router-link class="mx-3" to="/shopDetail"><i class="fa fa-shopping-cart" aria-hidden="true"></i></router-link>
                    <router-link class="mx-3" to="/shopDetail"><i class="fa fa-eye" aria-hidden="true"></i></router-link>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold">ProductName</h3>
        <p class="mb-4 mt-1">Description</p>
        <span class="text-red-500">price</span>
    </div>
</template>

<script>
export default {
    name: "SingleProductComponent"
}
</script>

<style></style>