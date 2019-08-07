<template>
  <div class="container">
    <h3>First Component</h3>
    <hr />
    <br />
    <div class="row" v-for="(element, index ) in firstArray" :key="index">
      <h4>{{ element.name }}</h4>
      <span @click="moveToSecondArray(element)">move</span>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    firstArray() {
      return this.$store.getters.firstArray;
    }
  },
  methods: {
    moveToSecondArray(element) {
      this.$store.dispatch("moveToSecondArray", element);
    }
  }
};
</script>

<style scoped>
</style>

