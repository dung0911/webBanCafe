<template>
    <div class="flex items-center mx-auto mb-14">
        <div class="w-full bg-black p-0.5 mr-4"></div>
        <h3 class="text-xl lg:text-4xl text-red-600 font-fold text-center mb-12 contents uppercase whitespace-nowrap">{{ title }}</h3>
        <div class="w-full bg-black p-0.5 ml-4"></div>
    </div>
</template>

<script>
export default {
    name: "TitleComponent",
    props: {
        title: String
    }
}
</script>

<style></style>