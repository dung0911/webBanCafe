<template>
  <button class="fixed bottom-10 right-10 border py-2 px-3 rounded-sm z-10" @click="scrollToTop"><i
      class="fa fa-angle-double-up" aria-hidden="true"></i></button>
</template>

<script>
export default {
  name: "ButtonUp",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
  }
}
</script>

<style></style>