<template>
    <div class="">
        <Header />
        <div class="min-h-screen flex flex-col items-center justify-center bg-no-repeat w-full h-full bg-cover"
            style="background-image: url('https://xpressrow.com/html/cafena/demo_assets/images/bg_01.png');">
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded w-1/2 border">
                <h1 class="text-center mb-6 self-center text-3xl font-bold text-gray-800">Đăng ký tài khoản</h1>
                <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0 w-full">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                            First Name
                        </label>
                        <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="firstName" type="text" placeholder="First Name" />
                    </div>
                    <div class="md:ml-2 w-full">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                            Last Name
                        </label>
                        <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="lastName" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                        Email
                    </label>
                    <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email" />
                </div>
                <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0 w-full">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                            Password
                        </label>
                        <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************" />
                        <p class="text-xs italic text-red-500">Please choose a password.</p>
                    </div>
                    <div class="md:ml-2 w-full">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                            Confirm Password
                        </label>
                        <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="c_password" type="password" placeholder="******************" />
                    </div>
                </div>
                <div class="mb-6 text-center">
                    <button
                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="button">
                        Register Account
                    </button>
                </div>
                <hr class="mb-6 border-t" />
                <p class="text-center inline-block text-sm text-blue-500 hover:text-blue-800">
                    Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link>
                </p>
            </form>
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
    name: "RegistrationView",
    components: {
        FooterVue,
        Header,
    }
}
</script>

<style></style>