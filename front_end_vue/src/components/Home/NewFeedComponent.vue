<template>
    <div class="text-center border shadow-md">
        <div class="overflow-hidden">
            <img :src="newFeed.image" 
            class="transform transition-transform hover:scale-110 duration-700" />
        </div>
        <h3 class="font-seimibold text-2xl mb-3 mt-4">{{ newFeed.title }}</h3>
        <p class="text-sm text-gray-400 mb-4">{{ newFeed.dateTime }}</p>
    </div>
</template>

<script>
export default {
    name: "NewFeed",
    props: {
        newFeed: Object,
    }
}
</script>

<style></style>