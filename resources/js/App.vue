<template>
  <div>
    <nav-component></nav-component>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.btn-auth {
  background-color: #2a394a;
  color: white;
}
</style>