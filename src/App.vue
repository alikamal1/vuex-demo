<template>
  <div id="app">
    <FirstComponent />
    <SecondComponent />
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";

export default {
  name: "app",
  components: {
    FirstComponent,
    SecondComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  box-shadow: 1px 1px 2px 1px #ccc;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  width: 300px;
  vertical-align: top;
}
.row h4 {
  display: inline-block;
  width: 30%;
  margin: 0 0 10px 0;
  box-sizing: border-box;
}

.row span {
  width: 30%;
  color: red;
  cursor: pointer;
}

.row span:hover {
  color: darkred;
}
</style>
