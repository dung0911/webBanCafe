<template>
    <div class="">
        <Header />

        <TitleBackground headerTitle="Shop" home="Home" title="Shop" />
        <div class="w-11/12 mx-auto lg:my-24 my-12">
            <div class="lg:flex">

                <div class="lg:w-1/2 lg:mr-12 mb-12" v-show="!filter">
                    <div class="border rounded-2xl p-12 sticky top-28">
                        <div class="mb-5">
                            <h4 class="text-xl font-bold">Categories</h4>
                            <nav>
                                <ul>
                                    <li v-for="index in 10" :key="index">
                                        test
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="mb-5">
                            <h4 class="text-xl font-bold">Price</h4>
                            <nav>
                                Started <br>
                                end
                            </nav>
                        </div>
                        <div class="mb-5">
                            <h4 class="text-xl font-bold">Brand</h4>
                            <nav>
                                <ul>
                                    <li v-for="index in 4" :key="index">
                                        test
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="">
                    <h1 class="text-center mb-12 text-3xl">Our Dairy Products For Healthy Living</h1>
                    <div class="flex justify-between items-center mb-5">
                        <button class="border px-4 py-2 rounded-sm" @click="toggleFilter"> <span>Filter</span> <i
                                class="fa fa-filter" aria-hidden="true"></i></button>
                        <p>Showing all 150 items</p>
                    </div>
                    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
                        <div class="" v-for="index in 20" :key="index">
                            <ProductVue />
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <button @click="previousPage" :disabled="currentPage <= 0">Previous</button>
                <button @click="nextPage" :disabled="currentPage >= pageCount - 1">Next</button>
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
import ProductVue from '../../../components/Products/Product.vue'
import TitleBackground from '../Layout/TitleBackground.vue'
export default {
    name: "ShopView",
    data() {
        return {
            itemsPerPage: 10,
            currentPage: 0,
            items: [], // Đây là dữ liệu cần phân trang
            filter: false,
        };
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.pageCount - 1) {
                this.currentPage += 1;
            }
        },
        previousPage() {
            if (this.currentPage > 0) {
                this.currentPage -= 1;
            }
        },
        toggleFilter() {
            this.filter = !this.filter
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        paginatedData() {
            const start = this.currentPage * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.items.slice(start, end);
        },
    },
    components: {
        FooterVue,
        Header,
        ProductVue,
        ButtonUp,
        TitleBackground
    }
}
</script>

<style></style>