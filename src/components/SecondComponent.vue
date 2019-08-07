<template>
  <div class="container">
    <h3>Second Component</h3>
    <hr />
    <br />
    <div class="row" v-for="(element, index ) in secondArray" :key="index">
      <h4>{{ element.name }}</h4>
      <span @click="moveToFirstArray(element)">move</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    secondArray() {
      return this.$store.getters.secondArray;
    }
  },
  methods: {
    moveToFirstArray(element) {
      this.$store.dispatch("moveToFirstArray", element);
    }
  }
};
</script>

<style scoped>
</style>


