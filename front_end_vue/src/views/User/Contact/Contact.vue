<template>
    <div class="">
        <Header />
        <TitleBackground headerTitle="Contact" home="Home" title="Contact"/>
        <div class="lg:w-9/12 w-11/12 mx-auto lg:my-24 my-12">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-12">
                <div class="">
                    <div class="border-2 shadow-lg w-full mb-12">
                        <h1 class="uppercase text-2xl font-bold py-8 px-5 border-b">contact info</h1>
                        <div class="py-2 border-b py-6 px-5 flex items-center">
                            <i class="mr-5 fa fa-location-arrow" aria-hidden="true"></i>
                            <div class="">
                                <p>777 Seventh Road. Bonosri Rampura - Dhaka.</p>
                            </div>
                        </div>
                        <div class="py-2 border-b py-6 px-5 flex items-center">
                            <i class="mr-5 fa fa-phone" aria-hidden="true"></i>
                            <div class="">
                                <p>+11 (019) 25184203 </p>
                                <p>+11 (019) 25184203</p>
                            </div>
                        </div>
                        <div class="py-2 border-b py-6 px-5 flex items-center">
                            <i class="mr-5 fa fa-envelope" aria-hidden="true"></i>
                            <div class="">
                                <p>domain@email.com</p>
                                <p>mail@email.com</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 my-5">
                            <button class="text-4xl text-gray-400"><i class="fa fa-envelope"
                                    aria-hidden="true"></i></button>
                            <button class="text-4xl text-gray-400"><i class="fa fa-envelope"
                                    aria-hidden="true"></i></button>
                            <button class="text-4xl text-gray-400"><i class="fa fa-envelope"
                                    aria-hidden="true"></i></button>
                            <button class="text-4xl text-gray-400"><i class="fa fa-envelope"
                                    aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <h3 class="font-bold text-2xl mb-5">Information</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled
                        it to make a type specimen book.</p>
                    <p>Printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the
                        1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration
                        in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div class="text-gray-400">
                    <form action="">
                        <div class="flex justify-between mb-4">
                            <input placeholder="test" type="text" class="px-4 py-2 border rounded-sm w-full mr-4">
                            <input placeholder="test" type="text" class="px-4 py-2 border rounded-sm w-full ml-4">
                        </div>
                        <input placeholder="test" type="text" class="px-4 py-2 border rounded-sm w-full mb-4">
                        <textarea placeholder="test" class="w-full px-4 py-2 border rounded-sm mb-4" name="" id="" cols="30"
                            rows="10"></textarea>
                        <button class="px-4 py-2 border uppercase">submit</button>
                    </form>
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
import TitleBackground from '../Layout/TitleBackground.vue';
export default {
    name: "ContactView",

    components: {
        FooterVue,
        Header,
        TitleBackground
    }
}
</script>

<style></style>