<template>
    <div class="h-72 w-full flex justify-center items-center text-center  text-white"
        style="background-image:URL('https://themewagon.github.io/arkitektur/img/carousel-1.jpg')">
        <div class="">
            <h1 class="text-5xl mb-3">{{ headerTitle }}</h1>
            <span>{{ home }} / {{ title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "backgrountTitle",
    props: {
        home: String,
        title: String,
        headerTitle: String,
    }
}
</script>

<style></style>