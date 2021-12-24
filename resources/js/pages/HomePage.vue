<template>
  <div>
	  Home
    {{titulo}}
  </div>
</template>

<script>
export default {
  computed:{
    titulo(){return this.$store.state.titulo}
  }
}
</script>

<style>

</style>