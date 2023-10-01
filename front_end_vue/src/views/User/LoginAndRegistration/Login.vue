<template>
    <div class="">
        <Header />
        <div class="min-h-screen flex flex-col items-center justify-center bg-no-repeat w-full h-full bg-cover" style="background-image: url('https://xpressrow.com/html/cafena/demo_assets/images/bg_01.png');">
            <div class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        ">
                <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
                   Đăng nhập
                </div>
                <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Enter your credentials to access your account
                </div>

                <div class="mt-10">
                    <form action="#">
                        <div class="flex flex-col mb-5">
                            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600">E-Mail:</label>
                            <div class="relative">
                                <div class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  ">
                                    <i class="fas fa-at text-blue-500"></i>
                                </div>

                                <input id="email" type="email" name="email" class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  " placeholder="Enter your email" />
                            </div>
                        </div>
                        <div class="flex flex-col mb-6">
                            <label for="password"
                                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Mật khẩu:</label>
                            <div class="relative">
                                <div class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  ">
                                    <span>
                                        <i class="fas fa-lock text-blue-500"></i>
                                    </span>
                                </div>

                                <input id="password" type="password" name="password" class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  " placeholder="Enter your password" />
                            </div>
                        </div>

                        <div class="flex w-full">
                            <button type="submit" class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                ">
                                <span class="mr-2 uppercase"><router-link to="/registration">Đăng ký</router-link></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="flex justify-center items-center mt-6">
                <a href="#" target="_blank" class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          ">
                    <span class="ml-2">Bạn chưa có tài khoản?
                        <a href="#" class="text-xs ml-2 text-blue-500 font-semibold">Đăng ký ngay</a></span>
                </a>
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
    name: "LoginView",
    components: {
        FooterVue,
        Header,
    }
}
</script>

<style></style>