<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center ">
        <div v-for="s in service" :key="s" class="my-5">
            <Service :service="s" />
        </div>
    </div>
</template>

<script>
import Service from '@/components/Home/ServiceComponent.vue';
export default {
    name: "ServiceSupportView",
    data() {
        return {
            service: [
                {
                    iconName: "fa fa-shopping-cart", 
                    supportTitle: "Free Fast Delivery",
                    supportDesc: "Online Only Exclusions Apply"
                },
                {
                    iconName: "fa fa-shopping-cart",
                    supportTitle: "Free Fast Delivery",
                    supportDesc: "Online Only Exclusions Apply"
                },
                {
                    iconName: "fa fa-shopping-cart",
                    supportTitle: "Free Fast Delivery",
                    supportDesc: "Online Only Exclusions Apply"
                },
                {
                    iconName: "fa fa-shopping-cart",
                    supportTitle: "Free Fast Delivery",
                    supportDesc: "Online Only Exclusions Apply"
                }
            ]
        }
    },
    components: {
        Service
    }
}
</script>

<style></style>