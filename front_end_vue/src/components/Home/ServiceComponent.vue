<template>
    <div class="flex items-center">
        <li class="text-4xl" :class="service.iconName"></li>
        <div class="ml-4">
            <h4 class="font-bold text-xl">{{ service.supportTitle }} </h4>
            <p class="text-gray-500">{{ service.supportDesc }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ServiceComponents",
    props: {
        service: Object,
    },
};
</script>
  